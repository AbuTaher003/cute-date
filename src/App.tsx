import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { FloatingHeartsBackground } from './components/FloatingHeartsBackground';
import { Page1Question } from './components/Page1Question';
import { Page2DateSelection } from './components/Page2DateSelection';
import { Page3Confirmation } from './components/Page3Confirmation';
import { Heart, Volume2, VolumeX } from 'lucide-react';

export function App() {
  const [page, setPage] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedIdea, setSelectedIdea] = useState<string>('');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Gentle Web Audio API synthesizer for soft romantic melody chime
  const playRomanticChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.15);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + idx * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.15);
        osc.stop(ctx.currentTime + idx * 0.15 + 0.85);
      });
    } catch {
      // Ignore audio policy errors
    }
  };

  const handleSayYes = () => {
    playRomanticChime();
    setPage(2);
  };

  const handleConfirmDate = (date: string, idea: string) => {
    setSelectedDate(date);
    setSelectedIdea(idea);
    playRomanticChime();
    setPage(3);
  };

  const handleReset = () => {
    setPage(1);
    setSelectedDate('');
    setSelectedIdea('');
  };

  const toggleSoundEffect = () => {
    setIsAudioPlaying(!isAudioPlaying);
    if (!isAudioPlaying) {
      playRomanticChime();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between font-fredoka select-none overflow-x-hidden">
      {/* Background Animated Particles */}
      <FloatingHeartsBackground />

      {/* Top Header / Brand Bar */}
      <header className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse-heart" />
          </div>
          <span className="font-bold text-pink-600 text-sm tracking-wide font-handwriting text-lg sm:text-xl">
            A Secret Invitation...
          </span>
        </div>

        {/* Audio Chime Toggle Button */}
        <button
          type="button"
          onClick={toggleSoundEffect}
          title="Toggle Romantic Chime"
          className="p-2.5 rounded-full bg-white/80 hover:bg-pink-100/80 border border-pink-200 text-pink-500 shadow-sm transition-all cursor-pointer hover:scale-105"
        >
          {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </header>

      {/* Main Container for 3-Page Flow */}
      <main className="w-full flex-1 flex items-center justify-center relative z-10 px-4">
        <AnimatePresence mode="wait">
          {page === 1 && (
            <Page1Question key="page1" onSayYes={handleSayYes} />
          )}

          {page === 2 && (
            <Page2DateSelection key="page2" onConfirmDate={handleConfirmDate} />
          )}

          {page === 3 && (
            <Page3Confirmation
              key="page3"
              selectedDate={selectedDate}
              selectedIdea={selectedIdea}
              onReset={handleReset}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-pink-400 font-medium relative z-20">
        <p>Made with ❤️ specially for you</p>
      </footer>
    </div>
  );
}

export default App;
