import React from 'react';

interface SVGProps {
  className?: string;
  size?: number;
}

// 1. Cat holding a big romantic heart
export const CatWithHeart: React.FC<SVGProps> = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-md transform hover:scale-105 transition-transform duration-300 ${className}`}
  >
    {/* Shadow base */}
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="#FBCFE8" opacity="0.6" />
    
    {/* Cat Tail */}
    <path
      d="M 145 145 C 175 140 180 100 165 90 C 155 83 150 95 155 105 C 160 115 145 130 140 135"
      stroke="#FF8AAB"
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Cat Ears */}
    {/* Left Ear */}
    <path d="M 55 65 L 40 25 L 75 45 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 58 60 L 48 35 L 70 47 Z" fill="#FFD1DC" />
    {/* Right Ear */}
    <path d="M 145 65 L 160 25 L 125 45 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 142 60 L 152 35 L 130 47 Z" fill="#FFD1DC" />

    {/* Cat Body */}
    <ellipse cx="100" cy="130" rx="48" ry="42" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="4" />

    {/* Cat Head */}
    <circle cx="100" cy="85" r="46" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="4" />
    
    {/* White Muzzle */}
    <ellipse cx="100" cy="94" rx="18" ry="12" fill="#FFFFFF" />

    {/* Eyes - Happy Curved */}
    <path d="M 78 80 Q 86 72 92 80" stroke="#4A3E3D" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 108 80 Q 114 72 122 80" stroke="#4A3E3D" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Cute Eyelashes */}
    <path d="M 75 76 L 71 72" stroke="#4A3E3D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 125 76 L 129 72" stroke="#4A3E3D" strokeWidth="2.5" strokeLinecap="round" />

    {/* Nose */}
    <path d="M 97 90 L 103 90 L 100 94 Z" fill="#FF6584" />

    {/* Mouth */}
    <path d="M 94 95 Q 100 100 100 96 Q 100 100 106 95" stroke="#FF6584" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Blush */}
    <circle cx="72" cy="92" r="8" fill="#FF94B9" opacity="0.6" />
    <circle cx="128" cy="92" r="8" fill="#FF94B9" opacity="0.6" />

    {/* Whiskers */}
    <path d="M 52 85 L 36 83" stroke="#FF7597" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 54 92 L 38 95" stroke="#FF7597" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 148 85 L 164 83" stroke="#FF7597" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 146 92 L 162 95" stroke="#FF7597" strokeWidth="2.5" strokeLinecap="round" />

    {/* Paws Holding Heart */}
    {/* Big Red Heart in Paws */}
    <path
      d="M 100 145 C 80 120 50 135 68 158 C 82 176 100 188 100 188 C 100 188 118 176 132 158 C 150 135 120 120 100 145 Z"
      fill="#FF477E"
      stroke="#E60049"
      strokeWidth="3"
    />
    <ellipse cx="82" cy="142" rx="6" ry="3" fill="#FF94B9" transform="rotate(-30 82 142)" opacity="0.7" />

    {/* Left Paw */}
    <ellipse cx="68" cy="138" rx="10" ry="8" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3" />
    {/* Right Paw */}
    <ellipse cx="132" cy="138" rx="10" ry="8" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3" />

    {/* Tiny sparkles near cat head */}
    <path d="M 45 40 L 48 45 L 53 48 L 48 51 L 45 56 L 42 51 L 37 48 L 42 45 Z" fill="#FFD166" />
    <path d="M 155 42 L 157 46 L 161 48 L 157 50 L 155 54 L 153 50 L 149 48 L 153 46 Z" fill="#FFD166" />
  </svg>
);

// 2. Panda holding a flower bouquet
export const PandaWithFlowers: React.FC<SVGProps> = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-md transform hover:scale-105 transition-transform duration-300 ${className}`}
  >
    {/* Shadow base */}
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="#CBD5E1" opacity="0.5" />

    {/* Panda Ears */}
    <circle cx="56" cy="48" r="18" fill="#334155" />
    <circle cx="56" cy="48" r="10" fill="#475569" />
    <circle cx="144" cy="48" r="18" fill="#334155" />
    <circle cx="144" cy="48" r="10" fill="#475569" />

    {/* Panda Body */}
    <ellipse cx="100" cy="132" rx="52" ry="42" fill="#FFFFFF" stroke="#334155" strokeWidth="4" />
    {/* Panda Black Vest area */}
    <path d="M 52 110 C 60 135 140 135 148 110 C 154 135 148 165 100 168 C 52 165 46 135 52 110 Z" fill="#334155" />

    {/* Panda Head */}
    <ellipse cx="100" cy="82" rx="48" ry="42" fill="#FFFFFF" stroke="#334155" strokeWidth="4" />

    {/* Eye Patches (classic adorable tilted pandas) */}
    <ellipse cx="78" cy="80" rx="14" ry="18" fill="#334155" transform="rotate(-15 78 80)" />
    <ellipse cx="122" cy="80" rx="14" ry="18" fill="#334155" transform="rotate(15 122 80)" />

    {/* Eyes - Shiny Big Dots */}
    <circle cx="80" cy="78" r="5" fill="#FFFFFF" />
    <circle cx="81" cy="77" r="2" fill="#334155" />
    <circle cx="120" cy="78" r="5" fill="#FFFFFF" />
    <circle cx="119" cy="77" r="2" fill="#334155" />

    {/* Nose */}
    <ellipse cx="100" cy="90" rx="6" ry="4" fill="#334155" />

    {/* Cute Mouth */}
    <path d="M 95 95 Q 100 100 100 96 Q 100 100 105 95" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Blush */}
    <ellipse cx="66" cy="92" rx="7" ry="5" fill="#FF8AAB" opacity="0.7" />
    <ellipse cx="134" cy="92" rx="7" ry="5" fill="#FF8AAB" opacity="0.7" />

    {/* Bouquet of Flowers */}
    {/* Stem */}
    <path d="M 100 135 L 100 160" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M 100 150 Q 85 145 92 140" fill="#22C55E" />
    <path d="M 100 152 Q 115 147 108 142" fill="#22C55E" />

    {/* Flowers */}
    {/* Flower 1 - Center Pink */}
    <circle cx="100" cy="130" r="8" fill="#FF6584" />
    <circle cx="100" cy="130" r="4" fill="#FEF08A" />
    
    {/* Flower 2 - Left Lavender */}
    <circle cx="86" cy="132" r="7" fill="#C084FC" />
    <circle cx="86" cy="132" r="3" fill="#FEF08A" />

    {/* Flower 3 - Right Rose */}
    <circle cx="114" cy="132" r="7" fill="#FB7185" />
    <circle cx="114" cy="132" r="3" fill="#FEF08A" />

    {/* Paws holding flowers */}
    <circle cx="76" cy="138" r="10" fill="#334155" />
    <circle cx="124" cy="138" r="10" fill="#334155" />

    {/* Little floating hearts above */}
    <path d="M 100 28 C 95 20 85 24 92 32 C 96 36 100 40 100 40 C 100 40 104 36 108 32 C 115 24 105 20 100 28 Z" fill="#FF477E" />
  </svg>
);

// 3. Cat and Panda hugging together (Couple illustration)
export const CatPandaCouple: React.FC<SVGProps> = ({ className = '', size = 160 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 260 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg transform hover:scale-105 transition-transform duration-300 ${className}`}
  >
    {/* Shadow base */}
    <ellipse cx="130" cy="180" rx="90" ry="12" fill="#FBCFE8" opacity="0.6" />

    {/* Floating Heart between them */}
    <g className="animate-pulse-heart">
      <path
        d="M 130 35 C 110 10 75 25 98 55 C 115 75 130 90 130 90 C 130 90 145 75 162 55 C 185 25 150 10 130 35 Z"
        fill="#FF477E"
        stroke="#E60049"
        strokeWidth="3"
      />
      <circle cx="115" cy="30" r="4" fill="#FFFFFF" opacity="0.6" />
    </g>

    {/* CAT (LEFT SIDE) */}
    <g transform="translate(15, 20)">
      {/* Ear */}
      <path d="M 45 55 L 30 20 L 65 40 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="3.5" />
      <path d="M 47 50 L 38 30 L 60 42 Z" fill="#FFD1DC" />
      <path d="M 95 55 L 110 20 L 80 40 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="3.5" />
      
      {/* Body & Head */}
      <ellipse cx="75" cy="115" rx="36" ry="34" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3.5" />
      <circle cx="75" cy="75" r="35" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3.5" />
      
      {/* Eyes Closed In Pure Joy */}
      <path d="M 60 72 Q 67 66 73 72" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 82 72 Q 89 66 95 72" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Nose & Mouth */}
      <path d="M 76 78 L 80 78 L 78 81 Z" fill="#FF6584" />
      <path d="M 74 83 Q 78 87 78 84 Q 78 87 82 83" stroke="#FF6584" strokeWidth="2.5" fill="none" />

      {/* Blush */}
      <circle cx="56" cy="80" r="6" fill="#FF94B9" opacity="0.7" />
      <circle cx="96" cy="80" r="6" fill="#FF94B9" opacity="0.7" />
    </g>

    {/* PANDA (RIGHT SIDE) */}
    <g transform="translate(100, 20)">
      {/* Panda Ears */}
      <circle cx="95" cy="42" r="14" fill="#334155" />
      <circle cx="145" cy="48" r="14" fill="#334155" />

      {/* Body & Head */}
      <ellipse cx="115" cy="118" rx="40" ry="34" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />
      <circle cx="115" cy="75" r="36" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />

      {/* Eye Patches */}
      <ellipse cx="98" cy="74" rx="10" ry="14" fill="#334155" transform="rotate(-10 98 74)" />
      <ellipse cx="132" cy="74" rx="10" ry="14" fill="#334155" transform="rotate(10 132 74)" />

      {/* Eyes Happy Curves */}
      <path d="M 94 72 Q 98 67 102 72" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 128 72 Q 132 67 136 72" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose & Mouth */}
      <ellipse cx="115" cy="82" rx="4" ry="3" fill="#334155" />
      <path d="M 111 86 Q 115 90 115 87 Q 115 90 119 86" stroke="#334155" strokeWidth="2.5" fill="none" />

      {/* Blush */}
      <circle cx="90" cy="83" r="6" fill="#FF8AAB" opacity="0.7" />
      <circle cx="138" cy="83" r="6" fill="#FF8AAB" opacity="0.7" />
    </g>

    {/* HUGGING ARMS */}
    {/* Cat arm around Panda */}
    <path d="M 100 125 C 115 120 135 125 145 130" stroke="#FF8AAB" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Panda arm around Cat */}
    <path d="M 175 130 C 155 120 120 125 105 132" stroke="#334155" strokeWidth="9" strokeLinecap="round" fill="none" />
  </svg>
);

// 4. Shy Panda with heart
export const ShyPanda: React.FC<SVGProps> = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-sm ${className}`}
  >
    <circle cx="40" cy="35" r="14" fill="#334155" />
    <circle cx="120" cy="35" r="14" fill="#334155" />
    
    <ellipse cx="80" cy="95" rx="42" ry="36" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />
    <circle cx="80" cy="65" r="38" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />

    <ellipse cx="62" cy="65" rx="11" ry="14" fill="#334155" transform="rotate(-15 62 65)" />
    <ellipse cx="98" cy="65" rx="11" ry="14" fill="#334155" transform="rotate(15 98 65)" />

    <circle cx="64" cy="63" r="4" fill="#FFFFFF" />
    <circle cx="96" cy="63" r="4" fill="#FFFFFF" />

    <ellipse cx="80" cy="74" rx="5" ry="3" fill="#334155" />
    <path d="M 76 78 Q 80 82 84 78" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Shy Paws covering mouth slightly */}
    <circle cx="60" cy="85" r="10" fill="#334155" />
    <circle cx="100" cy="85" r="10" fill="#334155" />

    {/* Rosy Blush */}
    <circle cx="50" cy="74" r="8" fill="#FF8AAB" opacity="0.8" />
    <circle cx="110" cy="74" r="8" fill="#FF8AAB" opacity="0.8" />
  </svg>
);

// 5. Excited Cat with Heart Eyes
export const ExcitedCat: React.FC<SVGProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-sm ${className}`}
  >
    {/* Cat Ears */}
    <path d="M 40 45 L 25 15 L 55 30 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="3" />
    <path d="M 120 45 L 135 15 L 105 30 Z" fill="#FFA5C0" stroke="#FF7597" strokeWidth="3" />

    {/* Body & Head */}
    <ellipse cx="80" cy="105" rx="38" ry="32" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3.5" />
    <circle cx="80" cy="65" r="36" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3.5" />

    {/* Heart Eyes */}
    <path
      d="M 60 58 C 55 52 48 55 52 61 C 56 66 60 70 60 70 C 60 70 64 66 68 61 C 72 55 65 52 60 58 Z"
      fill="#FF477E"
    />
    <path
      d="M 100 58 C 95 52 88 55 92 61 C 96 66 100 70 100 70 C 100 70 104 66 108 61 C 112 55 105 52 100 58 Z"
      fill="#FF477E"
    />

    {/* Wide Open Happy Mouth */}
    <path d="M 72 74 Q 80 88 88 74 Z" fill="#FF6584" stroke="#FF6584" strokeWidth="2" />

    {/* Whiskers */}
    <path d="M 38 65 L 22 63" stroke="#FF7597" strokeWidth="2" strokeLinecap="round" />
    <path d="M 40 71 L 24 73" stroke="#FF7597" strokeWidth="2" strokeLinecap="round" />
    <path d="M 122 65 L 138 63" stroke="#FF7597" strokeWidth="2" strokeLinecap="round" />
    <path d="M 120 71 L 136 73" stroke="#FF7597" strokeWidth="2" strokeLinecap="round" />

    {/* Excited Paws in air */}
    <circle cx="48" cy="98" r="9" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3" />
    <circle cx="112" cy="98" r="9" fill="#FFF0F5" stroke="#FF8AAB" strokeWidth="3" />
  </svg>
);
