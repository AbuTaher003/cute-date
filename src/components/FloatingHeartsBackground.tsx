import React, { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'heart' | 'sparkle' | 'star';
}

export const FloatingHeartsBackground: React.FC = () => {
  const particles = useMemo<Particle[]>(() => {
    const list: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      list.push({
        id: i,
        x: Math.random() * 100, // percentage x
        size: Math.random() * 18 + 12, // px size
        duration: Math.random() * 8 + 8, // seconds
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
        type: i % 4 === 0 ? 'sparkle' : 'heart',
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft Romantic Ambient Gradient Light Blurs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute -bottom-20 left-1/4 w-[30rem] h-[30rem] bg-rose-200/40 rounded-full blur-3xl animate-float-slow" />

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: '-40px',
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'heart' ? (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-pink-400 drop-shadow-sm transform hover:scale-125 transition-transform"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-amber-300 animate-sparkle"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          )}
        </div>
      ))}

      {/* Custom keyframe for smooth floating upward */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
