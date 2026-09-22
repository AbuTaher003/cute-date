import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CatPandaCouple, CatWithHeart, PandaWithFlowers, ExcitedCat } from './illustrations/CatPandaSVGs';
import { Calendar as CalendarIcon, Sparkles, Share2, Check, Download, PartyPopper } from 'lucide-react';

interface Page3Props {
  selectedDate: string;
  selectedIdea?: string;
  onReset?: () => void;
}

export const Page3Confirmation: React.FC<Page3Props> = ({ selectedDate, selectedIdea, onReset }) => {
  const [copied, setCopied] = useState(false);

  // Format date nicely (e.g., "Saturday, October 14, 2026")
  const formatDateNice = (dateStr: string) => {
    try {
      // Split YYYY-MM-DD to avoid timezone shifting
      const [year, month, day] = dateStr.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const formattedDate = formatDateNice(selectedDate);

  // Fire celebratory fireworks / heart confetti on component mount
  useEffect(() => {
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: ['#FF477E', '#FF7597', '#FBBF24', '#C084FC', '#F472B6', '#38BDF8'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Our Special Date 💕 (${selectedIdea || 'Romantic Date'})`);
    const details = encodeURIComponent(`Yay! We are going on our date! Vibe: ${selectedIdea || 'Cozy & Romantic'}`);
    
    // YYYYMMDD
    const cleanDate = selectedDate.replace(/-/g, '');
    const dates = `${cleanDate}T180000Z/${cleanDate}T210000Z`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}`;
  };

  // Generate .ics iCal download
  const handleDownloadICS = () => {
    const cleanDate = selectedDate.replace(/-/g, '');
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CutieDate//NONSGML v1.0//EN
BEGIN:VEVENT
SUMMARY:Our Special Date 💕 (${selectedIdea || 'Romantic Date'})
DESCRIPTION:Yay! We are going on our date! Vibe: ${selectedIdea || 'Cozy & Romantic'}
DTSTART:${cleanDate}T180000Z
DTEND:${cleanDate}T210000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'our-special-date.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share / Copy Confirmation Text
  const handleShareConfirmation = () => {
    const text = `Yayyy! It's a date! 🥰 Our date is on ${formattedDate} (${selectedIdea || 'Special Date'}). Can't wait! ❤️`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[85vh] relative z-10"
    >
      {/* Decorative Corner Floating Stickers */}
      <div className="absolute top-0 -left-6 sm:-left-12 animate-float-slow hidden xs:block">
        <CatWithHeart size={90} />
      </div>
      <div className="absolute top-0 -right-6 sm:-right-12 animate-float-medium hidden xs:block">
        <PandaWithFlowers size={95} />
      </div>

      {/* Main Final Romantic Celebration Card */}
      <div className="glass-card w-full rounded-3xl p-6 sm:p-9 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
        {/* Confetti Ribbon Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm sm:text-base mb-4 shadow-md shadow-pink-200">
          <PartyPopper className="w-5 h-5 animate-bounce" />
          <span>YAYYY! IT'S A DATE! 🥰❤️</span>
        </div>

        {/* Center Cute Couple Hug SVG */}
        <div className="my-2 relative flex items-center justify-center">
          <CatPandaCouple size={220} className="sm:w-[250px] sm:h-[250px]" />
        </div>

        {/* Settled Dynamic Date Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 my-3 tracking-tight leading-snug">
          Then it's settled! <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
            Our date is on {formattedDate} 💕
          </span>
        </h2>

        {/* Vibe Activity Badge if selected */}
        {selectedIdea && (
          <div className="mt-1 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 font-semibold text-xs sm:text-sm border border-pink-200">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Vibe: {selectedIdea}</span>
          </div>
        )}

        <p className="text-slate-600 text-base sm:text-lg font-medium max-w-sm mb-6">
          I can't wait to spend that day with you! 🐼❤️
        </p>

        {/* Action Buttons: Add to Calendar & Share */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          {/* Google Calendar Link */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-pink-50 text-pink-600 font-bold text-sm border-2 border-pink-200 shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            <CalendarIcon className="w-4 h-4 text-pink-500" />
            <span>Google Calendar</span>
          </a>

          {/* iCal .ics Download */}
          <button
            type="button"
            onClick={handleDownloadICS}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-purple-50 text-purple-600 font-bold text-sm border-2 border-purple-200 shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
          >
            <Download className="w-4 h-4 text-purple-500" />
            <span>Save to iCal</span>
          </button>

          {/* Copy / WhatsApp Confirmation */}
          <button
            type="button"
            onClick={handleShareConfirmation}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied Love Note! 💖' : 'Send Screenshot/Note'}</span>
          </button>
        </div>

        {/* Optional Change Date Button */}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-slate-400 hover:text-pink-500 underline transition-colors cursor-pointer"
          >
            Want to change the date or pick again?
          </button>
        )}
      </div>

      {/* Cute Footer */}
      <div className="mt-4 flex items-center gap-2 text-xs text-rose-400 font-medium">
        <ExcitedCat size={35} />
        <span>Counting down every second until our date! 🥰</span>
      </div>
    </motion.div>
  );
};
