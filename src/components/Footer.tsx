import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <footer className="bg-[#F3F4F6] pt-12 sm:pt-16 pb-6 px-4 sm:px-6 rounded-t-[40px] sm:rounded-t-[48px] overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        {/* Floating White Card (Slides from Left) */}
        <ScrollReveal direction="left" delay={50}>
          <div className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-neutral-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-8 items-start">
              {/* Left Brand Column */}
              <div className="md:col-span-5 space-y-3.5">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
                  className="inline-flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src="/logo.png"
                    alt="Motionless Media"
                    className="h-7 w-auto object-contain mix-blend-multiply"
                  />
                </a>

                <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
                  Motionless Media helps teams transform complex campaigns into clear, engaging visual stories — everything you need in one place.
                </p>
              </div>

              {/* Right Navigation Columns */}
              <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8 text-xs">
                {/* Product Column */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900 tracking-tight">
                    Product
                  </h4>
                  <ul className="space-y-2 text-neutral-500 font-medium">
                    <li>
                      <button 
                        onClick={() => onNavigate('features')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Bottlenecks
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => onNavigate('process')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Process
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => onNavigate('reels')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Client Reels
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Resources Column */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900 tracking-tight">
                    Resources
                  </h4>
                  <ul className="space-y-2 text-neutral-500 font-medium">
                    <li>
                      <button 
                        onClick={() => onNavigate('reels')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Case Studies
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => onNavigate('process')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Framework
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={onOpenBooking} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Strategy Audit
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Company Column */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900 tracking-tight">
                    Company
                  </h4>
                  <ul className="space-y-2 text-neutral-500 font-medium">
                    <li>
                      <button 
                        onClick={() => onNavigate('hero')} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        About Us
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={onOpenBooking} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Careers
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={onOpenBooking} 
                        className="hover:text-black transition-colors cursor-pointer text-left"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Divider & Copyright / Legal Links */}
            <div className="border-t border-neutral-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
              <p>© {new Date().getFullYear()} Motionless. All rights reserved</p>

              <div className="flex items-center gap-6">
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-black underline underline-offset-2 transition-colors">
                  Terms of Service
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-black underline underline-offset-2 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Massive Faint Background Wordmark (Slides from Right) */}
        <ScrollReveal direction="right" delay={120}>
          <div className="mt-6 sm:mt-10 -mb-2 text-center select-none pointer-events-none w-full px-2">
            <span className="text-[12vw] sm:text-[11.5vw] md:text-[11vw] font-black uppercase text-neutral-200/70 tracking-tight leading-none block whitespace-nowrap">
              Motionless
            </span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
