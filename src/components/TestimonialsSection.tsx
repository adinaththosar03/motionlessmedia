import React from 'react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Brand logos strip */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-8">
            Trusted By High-Growth DTC Brands & Founders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60">
            {CLIENT_LOGOS.map((logo, idx) => (
              <span key={idx} className="text-sm sm:text-base font-bold tracking-[0.2em] text-neutral-800">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold mb-2">
            Verified Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Built for growth leaders who demand measurable returns.
          </h2>
        </div>

        {/* Testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 flex flex-col justify-between shadow-xs"
            >
              <blockquote className="text-neutral-800 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                "{t.quote}"
              </blockquote>

              <div className="pt-6 border-t border-neutral-200/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {t.role}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block font-semibold">
                    Verified Outcome
                  </span>
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
