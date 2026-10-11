import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface BentoSectionProps {
  onOpenBooking?: () => void;
}

export const BentoSection: React.FC<BentoSectionProps> = () => {
  return (
    <section id="features" className="section-scroll-fade py-24 px-4 sm:px-6 bg-[#FAFAFA] border-t border-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
              Does this sound like your brand?
            </h2>
          </div>
        </ScrollReveal>

        {/* 5 Cards Sliding In Alternately from Left and Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Slide from Left */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left" delay={100} className="h-full">
              <div className="h-full rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 flex items-center justify-center min-h-[180px] sm:min-h-[210px] border border-neutral-800 shadow-md text-center group cursor-pointer hover:scale-[1.03] hover:shadow-2xl hover:border-neutral-700 transition-all duration-300 ease-out will-change-transform">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug max-w-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                  “You post regularly but get no engagement”
                </h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2: Slide from Right */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="right" delay={150} className="h-full">
              <div className="h-full rounded-3xl bg-white text-neutral-950 p-8 sm:p-10 flex items-center justify-center min-h-[180px] sm:min-h-[210px] border border-neutral-200/90 shadow-xs text-center group cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:border-neutral-400 transition-all duration-300 ease-out will-change-transform">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug transition-transform duration-300 group-hover:scale-[1.01]">
                  “You run ads but the leads are low quality”
                </h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 3: Slide from Left */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="left" delay={100} className="h-full">
              <div className="h-full rounded-3xl bg-white text-neutral-950 p-8 sm:p-10 flex items-center justify-center min-h-[180px] sm:min-h-[210px] border border-neutral-200/90 shadow-xs text-center group cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:border-neutral-400 transition-all duration-300 ease-out will-change-transform">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug transition-transform duration-300 group-hover:scale-[1.01]">
                  “Your website gets traffic but nobody enquires”
                </h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 4: Slide from Right */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="right" delay={150} className="h-full">
              <div className="h-full rounded-3xl bg-neutral-100/90 text-neutral-950 p-8 sm:p-10 flex items-center justify-center min-h-[180px] sm:min-h-[210px] border border-neutral-200/90 shadow-xs text-center group cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:border-neutral-400 transition-all duration-300 ease-out will-change-transform">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug transition-transform duration-300 group-hover:scale-[1.01]">
                  “Your videos look good but don’t convert”
                </h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 5: Slide from Left */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="left" delay={200} className="h-full">
              <div className="h-full rounded-3xl bg-white text-neutral-950 p-8 sm:p-10 flex items-center justify-center min-h-[180px] sm:min-h-[210px] border border-neutral-200/90 shadow-xs text-center group cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:border-neutral-400 transition-all duration-300 ease-out will-change-transform">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug transition-transform duration-300 group-hover:scale-[1.01]">
                  “You have no clear content direction”
                </h3>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
