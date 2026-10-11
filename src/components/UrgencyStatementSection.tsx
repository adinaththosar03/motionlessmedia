import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const UrgencyStatementSection: React.FC = () => {
  return (
    <section className="section-scroll-fade relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center px-4 sm:px-8 lg:px-12 py-24 sm:py-36 bg-white text-neutral-950 overflow-hidden select-none border-t border-neutral-200">
      {/* 1st Div: Architectural Blueprint Grid Background (Light & Crisp) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Precision Light Grid Lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Finer Sub-Grid Matrix */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
          }}
        />

        {/* Ambient Radial Core Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.015)_0%,transparent_100%)]" />
      </div>

      {/* 2nd Div: Text Framing & Typography Container */}
      <ScrollReveal direction="left" delay={50} className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Technical Frame with Corner Crosshairs in Pure White / Off-White & Interactive Hover */}
        <div className="relative border border-neutral-200/90 bg-neutral-50/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-14 md:p-16 lg:p-20 shadow-sm group cursor-pointer transition-all duration-500 ease-out hover:bg-white hover:border-neutral-300 hover:shadow-xl hover:scale-[1.015]">
          {/* 4 Corner Crosshairs with Hover Accent */}
          <span className="absolute -top-2.5 -left-2.5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-900 group-hover:scale-125 transition-all duration-300 select-none">+</span>
          <span className="absolute -top-2.5 -right-2.5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-900 group-hover:scale-125 transition-all duration-300 select-none">+</span>
          <span className="absolute -bottom-2.5 -left-2.5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-900 group-hover:scale-125 transition-all duration-300 select-none">+</span>
          <span className="absolute -bottom-2.5 -right-2.5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-900 group-hover:scale-125 transition-all duration-300 select-none">+</span>

          {/* The Statement Headline with Interactive Hover Effects */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black uppercase tracking-[-0.035em] leading-[1.1] text-neutral-950 select-none">
            <span className="inline-block mb-3 sm:mb-5 transition-all duration-300 ease-out group-hover:tracking-tight group-hover:scale-[1.02] group-hover:text-neutral-800">
              EVERY MONTH YOU STAY{' '}
              <span className="inline-block transition-all duration-300 group-hover:text-red-600 group-hover:scale-105">
                INVISIBLE
              </span>
              ,
            </span>
            <span className="block mt-3 sm:mt-5 transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:text-black">
              YOUR COMPETITORS TAKE YOUR CUSTOMERS.
            </span>
          </h2>
        </div>
      </ScrollReveal>
    </section>
  );
};
