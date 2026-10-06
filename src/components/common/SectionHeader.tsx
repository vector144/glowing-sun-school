import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeColor = 'bg-amber-100 text-amber-900 border-amber-200/80',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border mb-4 shadow-xs ${badgeColor}`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#263238] tracking-tight leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
            {highlightText}
            {/* Playful curved underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#E9C46A]/60"
              viewBox="0 0 100 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 C 20 2, 40 12, 60 4 C 80 1, 95 10, 98 6"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
