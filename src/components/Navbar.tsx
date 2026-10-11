import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Apple-Style Pill Nav Container */}
      <div className="pointer-events-auto w-full max-w-4xl px-4 sm:px-6 py-2.5 rounded-full bg-white/85 backdrop-blur-2xl border border-neutral-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4 transition-all duration-300">
        {/* Brand Zone: Motionless Media Logo */}
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
          className="flex items-center group cursor-pointer shrink-0"
        >
          <img
            src="/logo.png"
            alt="Motionless Media"
            className="h-7 sm:h-8 w-auto max-w-[140px] sm:max-w-[170px] object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Center Nav Links: Subtle Minimalist Apple Style */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-neutral-600">
          <button 
            onClick={() => handleLinkClick('features')}
            className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-neutral-100/80 transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            Bottlenecks
          </button>
          <button 
            onClick={() => handleLinkClick('process')}
            className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-neutral-100/80 transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            Process
          </button>
          <button 
            onClick={() => handleLinkClick('reels')}
            className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-neutral-100/80 transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            Client Reels
          </button>
        </nav>

        {/* Right CTA Button: Apple-Style Compact Pill */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-4.5 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-black rounded-full transition-all duration-150 shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Get started</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1 text-xs font-semibold text-white bg-neutral-900 rounded-full"
          >
            Get started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-700 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Card */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-neutral-200/90 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col space-y-1.5 text-sm font-medium text-neutral-700">
            <button
              onClick={() => handleLinkClick('features')}
              className="text-left px-3 py-2 rounded-xl hover:bg-neutral-100 hover:text-black transition-colors"
            >
              Bottlenecks
            </button>
            <button
              onClick={() => handleLinkClick('process')}
              className="text-left px-3 py-2 rounded-xl hover:bg-neutral-100 hover:text-black transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => handleLinkClick('reels')}
              className="text-left px-3 py-2 rounded-xl hover:bg-neutral-100 hover:text-black transition-colors"
            >
              Client Reels
            </button>
          </div>
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-black transition-colors text-center flex items-center justify-center gap-2"
            >
              <span>Get started</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
