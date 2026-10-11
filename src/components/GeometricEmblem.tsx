import React from 'react';

interface GeometricEmblemProps {
  type?: 'signature' | 'video' | 'social' | 'performance';
  className?: string;
}

export const GeometricEmblem: React.FC<GeometricEmblemProps> = ({ type = 'signature', className = '' }) => {
  if (type === 'video') {
    return (
      <div className={`w-11 h-11 rounded-full border border-neutral-600/70 flex items-center justify-center shrink-0 bg-neutral-900/40 text-neutral-200 transition-all duration-300 group-hover:border-white group-hover:bg-neutral-800/80 group-hover:text-white ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
        </svg>
      </div>
    );
  }

  if (type === 'social') {
    return (
      <div className={`w-11 h-11 rounded-full border border-neutral-600/70 flex items-center justify-center shrink-0 bg-neutral-900/40 text-neutral-200 transition-all duration-300 group-hover:border-white group-hover:bg-neutral-800/80 group-hover:text-white ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
      </div>
    );
  }

  if (type === 'performance') {
    return (
      <div className={`w-11 h-11 rounded-full border border-neutral-600/70 flex items-center justify-center shrink-0 bg-neutral-900/40 text-neutral-200 transition-all duration-300 group-hover:border-white group-hover:bg-neutral-800/80 group-hover:text-white ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" />
          <path d="m16 8-5 5-3-3" />
        </svg>
      </div>
    );
  }

  // Exact 4-glyph iconic controller emblem from reference image
  return (
    <div className={`w-11 h-11 rounded-full border border-neutral-600/70 flex items-center justify-center shrink-0 bg-neutral-900/30 text-neutral-200 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-neutral-800/60 ${className}`}>
      <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 items-center justify-center text-[10px] font-mono leading-none tracking-tighter">
        <span className="flex items-center justify-center">○</span>
        <span className="flex items-center justify-center">△</span>
        <span className="flex items-center justify-center">✕</span>
        <span className="flex items-center justify-center">□</span>
      </div>
    </div>
  );
};
