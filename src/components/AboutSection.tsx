import React from 'react';
import { Film, Share2, Target, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-neutral-100 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold mb-3">
              Why Motion Less Media
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-6">
              Media crafted to halt the scroll. Performance to scale the business.
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              Most brands struggle with disjointed vendors: a video studio that doesn't track CAC, an organic social manager posting into the void, and an ad buyer running exhausted stock creatives.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed mb-8">
              At <strong className="text-neutral-900 font-semibold">Motion Less Media</strong>, we run one cohesive growth engine: cinema-grade video production engineered specifically for conversion, daily social management that builds loyal audiences, and paid media buying optimized for verified ROAS.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                <span>Synchronized video production, social, and paid media teams</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                <span>Fast 7-day creative testing loops and iterative optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                <span>First-party conversion tracking and transparent reporting</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Film size={20} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Video Production</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                4K studio shoots, on-location cinematic crews, direct-response hooks, and custom audio mixing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Share2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Social Management</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Platform-native content calendars, community growth, and trend forecasting for Meta, TikTok & YouTube.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3 sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Performance Marketing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Relentless ROAS maximization with algorithmic audience testing, conversion rate audits, and disciplined capital allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
