import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NoButtonProps {
  yesButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const PLAYFUL_MESSAGES = [
  "Hehe, nice try! 🐱",
  "Are you sure about that? 🥺",
  "That button seems a little shy... 🐼",
  "Try again... hehe ❤️",
  "Oops! Too slow! 🐱",
  "You can't catch me! 🐾",
  "Wrong choice, baby! 💖",
  "Nope nope nope! 🙈",
  "Only 'Yes' is allowed! 🥰",
  "Nice attempt! 🌸"
];

export const NoButton: React.FC<NoButtonProps> = ({ yesButtonRef }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const isMovingRef = useRef(false);

  // Calculate random safe position inside FULL BROWSER VIEWPORT
  const moveButtonToSafePosition = useCallback((cursorX?: number, cursorY?: number) => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;

    const btnWidth = buttonRef.current?.offsetWidth || 115;
    const btnHeight = buttonRef.current?.offsetHeight || 48;

    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    const padding = 20;
    const minX = padding;
    const maxX = Math.max(minX, viewportW - btnWidth - padding);
    const minY = padding;
    const maxY = Math.max(minY, viewportH - btnHeight - padding);

    let yesRect: DOMRect | null = null;
    if (yesButtonRef?.current) {
      yesRect = yesButtonRef.current.getBoundingClientRect();
    }

    let newX = minX;
    let newY = minY;
    let valid = false;
    let attempts = 0;

    while (!valid && attempts < 35) {
      attempts++;
      newX = Math.random() * (maxX - minX) + minX;
      newY = Math.random() * (maxY - minY) + minY;

      // 1. Avoid overlapping Yes button if possible
      const overlapsYes =
        yesRect &&
        newX < yesRect.right + 20 &&
        newX + btnWidth > yesRect.left - 20 &&
        newY < yesRect.bottom + 20 &&
        newY + btnHeight > yesRect.top - 20;

      if (overlapsYes && attempts < 25) continue;

      // 2. Ensure new position is at least 140px away from the cursor
      if (cursorX !== undefined && cursorY !== undefined) {
        const btnCenterX = newX + btnWidth / 2;
        const btnCenterY = newY + btnHeight / 2;
        const distToCursor = Math.hypot(cursorX - btnCenterX, cursorY - btnCenterY);
        if (distToCursor < 140 && attempts < 30) continue;
      }

      valid = true;
    }

    setPosition({ x: newX, y: newY });

    // Toast message trigger
    const randomMsg = PLAYFUL_MESSAGES[Math.floor(Math.random() * PLAYFUL_MESSAGES.length)];
    setToastMessage(randomMsg);
    setAttemptCount((prev) => prev + 1);

    // Brief cooldown so movement finishes cleanly
    setTimeout(() => {
      isMovingRef.current = false;
    }, 180);
  }, [yesButtonRef]);

  // Global mousemove proximity detection across viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || isMovingRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

      // Escape when cursor is within 100px
      if (dist < 100) {
        moveButtonToSafePosition(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [moveButtonToSafePosition]);

  // Touch and pointer handlers
  const handleTouch = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let clientX: number | undefined;
    let clientY: number | undefined;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    moveButtonToSafePosition(clientX, clientY);
  };

  const buttonElement = (
    <motion.button
      ref={buttonRef}
      type="button"
      onMouseEnter={(e) => moveButtonToSafePosition(e.clientX, e.clientY)}
      onTouchStart={handleTouch}
      onPointerDown={handleTouch}
      onClick={handleTouch}
      style={
        position
          ? {
              position: 'fixed',
              left: `${position.x}px`,
              top: `${position.y}px`,
              zIndex: 9999,
              transition: 'left 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }
          : { position: 'relative' }
      }
      className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-base sm:text-lg border border-slate-300 shadow-xl flex items-center justify-center gap-2 select-none cursor-pointer transition-colors duration-150"
    >
      <span>No 🥺</span>
    </motion.button>
  );

  return (
    <>
      {/* Toast Message Speech Bubble */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            key={attemptCount}
            initial={{ opacity: 0, y: -10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[10000] pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border-2 border-pink-300 text-pink-700 font-semibold text-sm sm:text-base flex items-center gap-2">
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flex container placeholder when position is fixed */}
      <div className="relative inline-flex items-center justify-center min-w-[110px] min-h-[48px]">
        {position ? (
          <>
            {/* Empty space placeholder inside card flex layout */}
            <div className="w-[110px] h-[48px]" />
            {/* Render position: fixed floating button directly attached to document.body */}
            {createPortal(buttonElement, document.body)}
          </>
        ) : (
          /* Initial state: rendered inline beside Yes button */
          buttonElement
        )}
      </div>
    </>
  );
};
