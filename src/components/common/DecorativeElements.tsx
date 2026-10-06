import React from 'react';

export const PlayfulCloud: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 120 70"
    fill="currentColor"
    className={`inline-block filter drop-shadow-sm select-none ${className}`}
    style={style}
  >
    <path
      d="M25 60 C15 60 8 52 8 42 C8 32 16 26 24 25 C28 12 40 4 55 4 C72 4 84 16 88 28 C94 25 102 27 106 33 C112 40 110 52 102 58 C98 60 92 60 88 60 Z"
      fill="white"
      stroke="#F4A261"
      strokeWidth="1.5"
      strokeOpacity="0.25"
    />
    <circle cx="45" cy="38" r="2" fill="#263238" opacity="0.6" />
    <circle cx="68" cy="38" r="2" fill="#263238" opacity="0.6" />
    <path d="M52 42 Q 56 46 60 42" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <circle cx="38" cy="42" r="2.5" fill="#E76F51" opacity="0.3" />
    <circle cx="75" cy="42" r="2.5" fill="#E76F51" opacity="0.3" />
  </svg>
);

export const SparkleStar: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#FFB703',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={`inline-block select-none ${className}`}
  >
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export const WaveDivider: React.FC<{
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}> = ({ fillColor = '#FDFBF7', className = '', inverted = false }) => (
  <div className={`w-full overflow-hidden leading-none select-none ${className}`}>
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-8 md:h-14 block ${inverted ? 'rotate-180' : ''}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,32 C240,64 480,12 720,40 C960,68 1200,16 1440,36 L1440,80 L0,80 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

export const FloatingBadge: React.FC<{
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  bg?: string;
}> = ({ icon, title, subtitle, className = '', bg = 'bg-white/95' }) => (
  <div
    className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md border border-amber-100/60 transition-transform duration-300 hover:scale-105 ${bg} ${className}`}
  >
    {icon && <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">{icon}</div>}
    <div>
      <p className="text-xs font-bold text-slate-800 tracking-tight leading-tight">{title}</p>
      {subtitle && <p className="text-[11px] text-slate-500 font-medium leading-tight">{subtitle}</p>}
    </div>
  </div>
);
