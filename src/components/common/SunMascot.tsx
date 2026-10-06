import React from 'react';

interface SunMascotProps {
  className?: string;
  size?: number;
  animate?: boolean;
  mood?: 'happy' | 'waving' | 'excited';
  showRays?: boolean;
}

export const SunMascot: React.FC<SunMascotProps> = ({
  className = '',
  size = 64,
  animate = true,
  mood = 'happy',
  showRays = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="sunGlowGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD166" />
            <stop offset="0.6" stopColor="#F4A261" />
            <stop offset="1" stopColor="#E76F51" />
          </linearGradient>
          <linearGradient id="rayGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE066" />
            <stop offset="1" stopColor="#F4A261" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rotating Sun Rays */}
        {showRays && (
          <g className={animate ? "animate-spin-slow origin-center" : ""}>
            {/* 12 rounded sun rays around perimeter */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <rect
                key={i}
                x="47"
                y="6"
                width="6"
                height="12"
                rx="3"
                fill="url(#rayGrad)"
                transform={`rotate(${deg} 50 50)`}
                opacity={i % 2 === 0 ? 0.95 : 0.75}
              />
            ))}
          </g>
        )}

        {/* Ambient Halo */}
        <circle cx="50" cy="50" r="32" fill="#F4A261" opacity="0.18" className={animate ? "animate-pulse" : ""} />

        {/* Main Sun Body */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="url(#sunGlowGrad)"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          className={animate ? "animate-sun-wiggle origin-center" : ""}
        />

        {/* Smiling Face Features */}
        <g>
          {/* Eyes */}
          <circle cx="41" cy="46" r="3.2" fill="#263238" />
          <circle cx="59" cy="46" r="3.2" fill="#263238" />
          {/* Eye reflections (sparkle) */}
          <circle cx="42.2" cy="44.8" r="1.1" fill="#FFFFFF" />
          <circle cx="60.2" cy="44.8" r="1.1" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <circle cx="35" cy="53" r="3.5" fill="#E76F51" opacity="0.65" />
          <circle cx="65" cy="53" r="3.5" fill="#E76F51" opacity="0.65" />

          {/* Cheerful Mouth */}
          {mood === 'happy' && (
            <path
              d="M 43 53 Q 50 61 57 53"
              stroke="#263238"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="#FFFFFF"
            />
          )}
          {mood === 'excited' && (
            <path
              d="M 42 51 Q 50 64 58 51 Z"
              fill="#E76F51"
              stroke="#263238"
              strokeWidth="2"
            />
          )}
          {mood === 'waving' && (
            <path
              d="M 43 53 Q 50 60 57 53"
              stroke="#263238"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </g>
      </svg>
    </div>
  );
};
