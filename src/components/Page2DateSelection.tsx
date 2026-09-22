import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PandaWithFlowers, ExcitedCat, ShyPanda } from './illustrations/CatPandaSVGs';
import { Calendar as CalendarIcon, Heart, Sparkles, Coffee, UtensilsCrossed, Film, Sparkle } from 'lucide-react';


interface Page2Props {
  onConfirmDate: (date: string, idea: string) => void;
}

const DATE_IDEAS = [
  { id: 'cafe', title: 'Cozy Cafe & Pastries ☕', icon: Coffee },
  { id: 'sushi', title: 'Sushi & Arcade Fun 🍣', icon: UtensilsCrossed },
  { id: 'picnic', title: 'Sunset Park Picnic 🧺', icon: Sparkles },
  { id: 'movie', title: 'Movie Night & Cuddles 🎬', icon: Film },
  { id: 'icecream', title: 'Ice Cream & Stroll 🍦', icon: Sparkle },
];

export const Page2DateSelection: React.FC<Page2Props> = ({ onConfirmDate }) => {
  // Set default date to 3 days from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 3);
  const formattedDefault = defaultDate.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(formattedDefault);
  const [selectedIdea, setSelectedIdea] = useState<string>(DATE_IDEAS[0].title);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Get today's YYYY-MM-DD for min constraint
  const todayStr = new Date().toISOString().split('T')[0];

  // Helper for quick date presets
  const selectPresetDays = (daysFromNow: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    setSelectedDate(d.toISOString().split('T')[0]);
    setErrorMsg(null);
  };

  const handleConfirm = () => {
    if (!selectedDate) {
      setErrorMsg("Please pick a cute date for us! 🥺");
      return;
    }

    if (selectedDate < todayStr) {
      setErrorMsg("Silly goose! We can't go back in time, pick a future date! ⏰❤️");
      return;
    }

    onConfirmDate(selectedDate, selectedIdea);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[85vh] relative z-10"
    >
      {/* Side Decorative Illustrations */}
      <div className="absolute top-2 -right-4 sm:-right-12 animate-float-medium hidden xs:block">
        <ExcitedCat size={85} />
      </div>
      <div className="absolute bottom-4 -left-4 sm:-left-12 animate-float-slow hidden xs:block">
        <PandaWithFlowers size={90} />
      </div>

      {/* Date Picker Card */}
      <div className="glass-card w-full rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-2xl relative">
        {/* Celebration Header */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-600 font-semibold text-xs sm:text-sm mb-3 border border-rose-200">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse-heart" />
          <span>Awww! I'm so glad you said yes! 🥺❤️</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">
          I knew you would make me happy! 🐼💕
        </h2>

        <p className="text-slate-500 text-sm mb-6">
          So... when do you want to go on our date?
        </p>

        {/* Date Presets Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-5 w-full">
          <button
            type="button"
            onClick={() => selectPresetDays(2)}
            className="px-3.5 py-2 rounded-2xl bg-pink-100/80 hover:bg-pink-200 text-pink-700 text-xs sm:text-sm font-medium transition-all border border-pink-200 hover:scale-105 cursor-pointer"
          >
            This Weekend 🌸
          </button>
          <button
            type="button"
            onClick={() => selectPresetDays(5)}
            className="px-3.5 py-2 rounded-2xl bg-purple-100/80 hover:bg-purple-200 text-purple-700 text-xs sm:text-sm font-medium transition-all border border-purple-200 hover:scale-105 cursor-pointer"
          >
            Next Friday 💕
          </button>
          <button
            type="button"
            onClick={() => selectPresetDays(7)}
            className="px-3.5 py-2 rounded-2xl bg-rose-100/80 hover:bg-rose-200 text-rose-700 text-xs sm:text-sm font-medium transition-all border border-rose-200 hover:scale-105 cursor-pointer"
          >
            Next Week 📅
          </button>
        </div>

        {/* Custom Aesthetic Date Input Box */}
        <div className="w-full max-w-xs mb-6">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Pick Your Special Date
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-4 pointer-events-none text-pink-500">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <input
              type="date"
              min={todayStr}
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setErrorMsg(null);
              }}
              className="w-full pl-12 pr-4 py-3.5 bg-white/90 border-2 border-pink-300 rounded-2xl text-slate-800 font-bold text-base focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500 transition-all shadow-inner text-center cursor-pointer"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-500 mt-2 font-medium animate-bounce">
              {errorMsg}
            </p>
          )}
        </div>

        {/* Date Idea Vibe Selector */}
        <div className="w-full mb-8">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Choose Our Date Vibe (Optional) 🌟
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {DATE_IDEAS.map((idea) => {
              const isSelected = selectedIdea === idea.title;
              return (
                <button
                  key={idea.id}
                  type="button"
                  onClick={() => setSelectedIdea(idea.title)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md scale-105 font-bold ring-2 ring-pink-300'
                      : 'bg-white/80 hover:bg-pink-50 text-slate-600 border border-pink-100'
                  }`}
                >
                  <span>{idea.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONFIRM BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfirm}
          className="w-full max-w-xs py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg shadow-xl shadow-pink-300/50 transition-all flex items-center justify-center gap-2 cursor-pointer ring-4 ring-pink-200/50"
        >
          <span>Confirm Date 💕</span>
        </motion.button>
      </div>

      {/* Decorative Footer */}
      <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium">
        <ShyPanda size={35} />
        <span>I can't wait to see you dressed up! ✨</span>
      </div>
    </motion.div>
  );
};
