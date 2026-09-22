import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CatWithHeart, PandaWithFlowers, CatPandaCouple, ShyPanda } from './illustrations/CatPandaSVGs';
import { NoButton } from './NoButton';
import { Sparkles, Heart } from 'lucide-react';

interface Page1Props {
  onSayYes: () => void;
}

export const Page1Question: React.FC<Page1Props> = ({ onSayYes }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    // Launch heart & pink confetti explosion
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#FF477E', '#FF7597', '#FBBF24', '#C084FC', '#F472B6'],
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } catch {
      // Fallback if canvas-confetti fails
    }

    // Trigger parent callback to change state smoothly
    onSayYes();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[85vh] relative z-10"
    >
      {/* Decorative Floating Corner Stickers */}
      <div className="absolute -top-4 -left-2 sm:-left-8 animate-float-slow hidden xs:block">
        <ShyPanda size={85} />
      </div>
      <div className="absolute -bottom-2 -right-2 sm:-right-8 animate-float-medium hidden xs:block">
        <CatWithHeart size={90} />
      </div>

      {/* Main Cute Question Card */}
      <div
        ref={cardRef}
        className="glass-card w-full rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center relative overflow-hidden shadow-2xl"
      >
        {/* Cute Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-600 font-medium text-xs sm:text-sm mb-4 border border-pink-200">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A very important question for you... 🥺</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse-heart" />
        </div>

        {/* Center Cute Hero Illustration */}
        <div className="my-2 relative flex items-center justify-center">
          <CatPandaCouple size={180} className="sm:w-[210px] sm:h-[210px]" />
        </div>

        {/* Main Heading Question */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 my-4 tracking-tight leading-snug">
          Wanna have a date with me, baby? <span className="text-pink-500 inline-block animate-pulse-heart">❤️</span>
        </h1>

        <p className="text-slate-500 text-sm sm:text-base font-normal max-w-xs mb-8">
          I promise it will be full of smiles, good food, and lots of cuddles! 🌸✨
        </p>

        {/* Action Buttons Container */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 w-full min-h-[60px] relative">
          {/* YES BUTTON */}
          <motion.button
            ref={yesButtonRef}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg shadow-lg shadow-pink-300/60 transition-all flex items-center justify-center gap-2 cursor-pointer z-30 ring-4 ring-pink-200/50"
          >
            <span>Yes ❤️</span>
          </motion.button>

          {/* NO BUTTON (Evasive) */}
          <NoButton yesButtonRef={yesButtonRef} />
        </div>

      </div>

      {/* Footer Support Illustration for Desktop / Mobile */}
      <div className="mt-6 flex items-center gap-4 text-xs text-pink-400 font-medium opacity-80">
        <PandaWithFlowers size={40} />
        <span>Made with infinite love just for you 💕</span>
      </div>
    </motion.div>
  );
};
