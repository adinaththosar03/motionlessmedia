import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="section-scroll-fade bg-[#FAFAFA] px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="right" delay={60}>
          {/* Dark Luminous CTA Banner Card (Matching Reference Screenshot) */}
          <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-[#1E2024] via-[#0E0F12] to-black text-white px-6 sm:px-12 py-16 sm:py-24 text-center overflow-hidden shadow-2xl border border-neutral-800">
            {/* Subtle Ambient Top Mist / Glow */}
            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-white/12 via-white/5 to-transparent pointer-events-none" />

            {/* Radial Top Light Center */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              {/* Display Heading */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Turn your attention into scale
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md mx-auto">
                Motionless Media makes it effortless to produce cinema-grade video, captivate audiences, and scale predictable revenue.
              </p>

              {/* Crisp White Pill Button (Matching Screenshot) */}
              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm rounded-xl shadow-md transition-all duration-150 active:scale-95 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
