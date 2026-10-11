import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Film, MessageCircle, CheckCircle2, Play, Users } from 'lucide-react';
import { ServiceDetail } from '../types';

interface HeroSectionProps {
  onSelectService?: (service: ServiceDetail) => void;
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [highlightColor, setHighlightColor] = useState<'yellow' | 'green' | 'red'>('yellow');

  useEffect(() => {
    const colors: Array<'yellow' | 'green' | 'red'> = ['yellow', 'green', 'red'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % colors.length;
      setHighlightColor(colors[idx]);
    }, 1500); // 1.5 seconds (automatically changes between 1-2 seconds)
    return () => clearInterval(interval);
  }, []);

  const highlightStyles = {
    yellow: 'bg-[#FEF08A] text-neutral-950 border-amber-300/80 shadow-[0_4px_20px_-2px_rgba(250,204,21,0.45)]',
    green: 'bg-[#86EFAC] text-neutral-950 border-emerald-400/80 shadow-[0_4px_20px_-2px_rgba(34,197,94,0.45)]',
    red: 'bg-[#FDA4AF] text-neutral-950 border-rose-400/80 shadow-[0_4px_20px_-2px_rgba(244,63,94,0.45)]',
  };
  return (
    <section 
      id="hero" 
      className="section-scroll-fade relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle Lined Paper Background Effect (as in Assemble screenshot) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '100% 64px',
        }}
      />

      {/* Floating 3D Tactile Social Media Tiles Around Hero */}
      {/* 1. Instagram Tile (Top Left) */}
      <div className="hidden lg:flex absolute top-28 left-[10%] w-16 h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] items-center justify-center -rotate-6 hover:rotate-0 transition-all duration-300 select-none z-10 group cursor-default">
        <Instagram size={28} className="text-neutral-900 group-hover:scale-110 transition-transform" />
      </div>

      {/* 2. Meta Tile (Top Right) */}
      <div className="hidden lg:flex absolute top-24 right-[12%] w-16 h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] items-center justify-center rotate-6 hover:rotate-0 transition-all duration-300 select-none z-10 group cursor-default">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-neutral-900 group-hover:scale-110 transition-transform" aria-label="Meta">
          <path d="M12.001 8.163c-1.396-1.636-3.364-2.613-5.468-2.613C3.013 5.55 0 8.563 0 12.28c0 3.716 3.013 6.73 6.533 6.73 2.104 0 4.072-.977 5.468-2.613 1.396 1.636 3.364 2.613 5.468 2.613C20.987 19.01 24 15.996 24 12.28c0-3.717-3.013-6.73-6.531-6.73-2.104 0-4.072.977-5.468 2.613zm-5.468 8.447c-2.27 0-4.116-1.942-4.116-4.33 0-2.388 1.846-4.33 4.116-4.33 1.488 0 2.822.84 3.535 2.148-.285.55-.452 1.173-.452 1.832 0 .809.256 1.562.695 2.193-.854 1.545-2.264 2.487-3.778 2.487zm10.936 0c-1.514 0-2.924-.942-3.778-2.487.439-.631.695-1.384.695-2.193 0-.659-.167-1.282-.452-1.832.713-1.308 2.047-2.148 3.535-2.148 2.27 0 4.116 1.942 4.116 4.33 0 2.388-1.846 4.33-4.116 4.33z" />
        </svg>
      </div>

      {/* 3. LinkedIn Tile (Mid Left) */}
      <div className="hidden md:flex absolute top-72 left-[4%] xl:left-[7%] w-16 h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.14)] items-center justify-center -rotate-12 hover:rotate-0 transition-all duration-300 select-none z-10 group cursor-default">
        <Linkedin size={26} className="text-neutral-900 group-hover:scale-110 transition-transform" />
      </div>

      {/* 4. Facebook Tile (Mid Right) */}
      <div className="hidden md:flex absolute top-80 right-[5%] xl:right-[8%] w-16 h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.14)] items-center justify-center rotate-12 hover:rotate-0 transition-all duration-300 select-none z-10 group cursor-default">
        <Facebook size={26} className="text-neutral-900 group-hover:scale-110 transition-transform" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Hero Header Stack */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center pt-2 pb-14 space-y-4">
          {/* Main Headline with Highlight Pill on 'noticed.' (Matching Reference Screenshot) */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08]">
            Not getting{' '}
            <span
              className={`relative inline-block px-3.5 py-0.5 rounded-2xl border font-extrabold mx-1 transition-all duration-700 ease-in-out will-change-transform ${highlightStyles[highlightColor]}`}
            >
              noticed?
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-xl mx-auto leading-relaxed font-normal">
            You’re doing everything right, but nobody’s watching. <span className="text-neutral-900 font-semibold">We fix that.</span>
          </p>

          {/* Pill CTA Button with Glowing Amber Dot (Exact Match to Assemble Screenshot) */}
          <div className="pt-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-[0_12px_30px_-6px_rgba(0,0,0,0.35)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Start your project</span>
            </button>
          </div>
        </div>

        {/* Large Monitor / Tablet Mockup (Exact Match to Assemble Screenshot) */}
        {/* Focused on Video Production & Social Media Management Pipeline */}
        <div className="max-w-5xl mx-auto mt-2 rounded-[28px] sm:rounded-[38px] bg-white border-[8px] sm:border-[12px] border-white shadow-[0_30px_90px_-20px_rgba(0,0,0,0.18)] ring-1 ring-neutral-200/90 overflow-hidden">
          {/* Top Browser / Window Header */}
          <div className="h-11 bg-[#FBFBFB] border-b border-neutral-200/70 px-4 flex items-center justify-between text-xs font-medium text-neutral-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 inline-block" />
              </div>
              <span className="text-neutral-300">|</span>
              <div className="flex items-center gap-2 text-neutral-900 font-bold">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px]">
                  ✦
                </span>
                <span>Motionless Media · Production Timeline</span>
              </div>
            </div>

            {/* View Mode Pills */}
            <div className="hidden sm:flex items-center gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 font-semibold text-neutral-900 shadow-2xs">
                Calendar View
              </span>
              <span className="px-2.5 py-1 rounded-md text-neutral-500 hover:text-neutral-900">
                Kanban
              </span>
              <span className="px-2.5 py-1 rounded-md text-neutral-500 hover:text-neutral-900">
                Analytics
              </span>
            </div>
          </div>

          {/* Monitor Body: Timeline Gantt Calendar View (Video Production & Social Media Management) */}
          <div className="grid grid-cols-12 min-h-[380px] sm:min-h-[440px] text-xs bg-white">
            {/* Left Sidebar: Channels & Campaigns */}
            <div className="col-span-12 sm:col-span-3 border-b sm:border-b-0 sm:border-r border-neutral-200/70 p-4 sm:p-5 bg-[#FAFAFA]/70 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Active Pipelines
                </span>
                <div className="space-y-1">
                  <div className="px-3 py-2 rounded-xl bg-white border border-neutral-200 shadow-2xs font-bold text-neutral-900 flex items-center justify-between">
                    <span>Q4 Omnichannel Sprint</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-neutral-900 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Film size={13} className="text-neutral-600" />
                      <span>Video Production</span>
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">18 Cuts</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-4.5">4K Commercials & Reels</p>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex items-center justify-between text-neutral-900 font-bold">
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} className="text-neutral-600" />
                      <span>Social Media</span>
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">30 Drops</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-4.5">Daily IG Stories & Reels</p>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex items-center justify-between text-neutral-900 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Users size={13} className="text-neutral-600" />
                      <span>Paid Performance</span>
                    </span>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold">4.6x ROAS</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-4.5">Meta & Google Ad Sets</p>
                </div>
              </div>
            </div>

            {/* Right Main Stage: Timeline Calendar Schedule */}
            <div className="col-span-12 sm:col-span-9 p-4 sm:p-6 overflow-x-auto relative">
              {/* Date Header Strip (Exact Match to Assemble Screenshot) */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-6 text-[11px] font-mono font-semibold text-neutral-400 min-w-[540px]">
                <span>W 14</span>
                <span>T 15</span>
                <span>F 16</span>
                <span>S 17</span>
                <span>S 18</span>
                <span>M 20</span>
                {/* Active Highlight Day */}
                <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white font-bold">
                  T 21
                </span>
                <span>W 22</span>
                <span>T 24</span>
                <span>F 25</span>
                <span>S 26</span>
                <span>M 28</span>
              </div>

              {/* Vertical Active Line Indicator (T 21) */}
              <div className="absolute top-14 bottom-4 left-[58%] w-px bg-neutral-900/30 border-l border-dashed border-neutral-900/40 pointer-events-none hidden sm:block">
                <span className="absolute -top-3 -translate-x-1/2 px-2 py-0.5 rounded-full bg-neutral-900 text-[9px] font-mono text-white whitespace-nowrap shadow-xs">
                  V1 Due Today
                </span>
              </div>

              {/* Schedule Gantt Rows */}
              <div className="space-y-4 min-w-[540px]">
                {/* Row 1: Video Production Hook Scripting */}
                <div className="h-12 relative flex items-center">
                  <div className="w-[45%] h-9 rounded-xl bg-neutral-50 border border-neutral-200/90 px-3 flex items-center justify-between shadow-2xs hover:border-neutral-400 transition-colors cursor-pointer">
                    <span className="font-semibold text-neutral-900 text-[11px] flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>Concept & Viral Hooks</span>
                    </span>
                    <div className="flex -space-x-1.5">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&fit=crop" className="w-5 h-5 rounded-full ring-2 ring-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&fit=crop" className="w-5 h-5 rounded-full ring-2 ring-white object-cover" />
                    </div>
                  </div>
                </div>

                {/* Row 2: 4K Commercial Shoot & Production */}
                <div className="h-12 relative flex items-center">
                  <div className="ml-[25%] w-[50%] h-9 rounded-xl bg-white border border-neutral-300 px-3 flex items-center justify-between shadow-xs hover:border-neutral-950 transition-colors cursor-pointer">
                    <span className="font-semibold text-neutral-900 text-[11px] flex items-center gap-1.5">
                      <Play size={12} className="text-indigo-600 fill-indigo-600" />
                      <span>4K Studio Shoot & Cutdowns</span>
                    </span>
                    <div className="flex -space-x-1.5 items-center">
                      <span className="text-[10px] text-neutral-500 mr-2 font-mono">12 Reels</span>
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&fit=crop" className="w-5 h-5 rounded-full ring-2 ring-white object-cover" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Daily Social Media Content Distribution */}
                <div className="h-12 relative flex items-center">
                  <div className="ml-[42%] w-[48%] h-9 rounded-xl bg-neutral-100/90 border border-neutral-200/90 px-3 flex items-center justify-between shadow-2xs hover:border-neutral-400 transition-colors cursor-pointer">
                    <span className="font-semibold text-neutral-900 text-[11px] flex items-center gap-1.5">
                      <MessageCircle size={12} className="text-neutral-700" />
                      <span>Social Media Multi-Platform Drop</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold">
                        Scheduled
                      </span>
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&fit=crop" className="w-5 h-5 rounded-full ring-2 ring-white object-cover" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Paid Performance Media Scaling */}
                <div className="h-12 relative flex items-center">
                  <div className="ml-[54%] w-[42%] h-9 rounded-xl bg-neutral-950 text-white px-3 flex items-center justify-between shadow-xs cursor-pointer">
                    <span className="font-semibold text-[11px] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Meta Ads Scale (ROAS: 4.6x)</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
