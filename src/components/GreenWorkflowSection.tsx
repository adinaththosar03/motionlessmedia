import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface GreenWorkflowSectionProps {
  onOpenBooking: () => void;
}

export const GreenWorkflowSection: React.FC<GreenWorkflowSectionProps> = ({ onOpenBooking }) => {
  const workflowCards = [
    {
      title: 'Commercial Video Pipeline',
      desc: 'Plan, script, shoot, and review cinema-grade commercials with live timecoded notes.',
    },
    {
      title: 'Omnichannel Social Hub',
      desc: 'Daily multi-platform storytelling coordinated across TikTok, Instagram, and Shorts.',
    },
    {
      title: 'First-Party ROAS Tracking',
      desc: 'Server-side attribution modeling that reveals which hooks drive highest-ticket conversions.',
    },
    {
      title: 'Creative Testing Engine',
      desc: 'Deploy 20+ multivariate hook angles per sprint to beat ad fatigue and lower customer acquisition costs.',
    },
  ];

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 bg-[#3B4D37] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hand Holding Modern iPhone (matching reference image) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 sm:w-72 aspect-[9/18.5] rounded-[44px] bg-[#1F291D] p-3 shadow-2xl ring-1 ring-white/20">
              {/* iPhone Bezel & Dynamic Island */}
              <div className="relative w-full h-full rounded-[36px] bg-[#0E150D] overflow-hidden flex flex-col justify-between p-5 border border-white/10">
                {/* Dynamic Island */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mb-4" />

                {/* Inner Screen Content */}
                <div className="space-y-4 my-auto">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-mono text-emerald-300 uppercase block">
                      Active Campaign Live
                    </span>
                    <p className="text-xs font-bold text-white mt-0.5">
                      Q1 Kinetic Velocity Reel
                    </p>
                    <div className="flex items-center justify-between text-xs mt-2 text-white/80">
                      <span>4.6x Verified ROAS</span>
                      <span className="text-emerald-400 font-bold">+68% Lift</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-mono text-white/60 uppercase block">
                      Weekly Video Output
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      12 Variations In Market
                    </p>
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[82%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                    <p className="text-[11px] text-white/90 font-medium">
                      Next Shoot Sprint: Oct 14
                    </p>
                  </div>
                </div>

                <div className="text-center text-[10px] text-white/50 font-mono">
                  Motionless Media Client OS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Details & 2x2 Soft Green Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-300">
                Architecture For Scale
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Built for Every Brand, Ready for Any Workflow
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                From fast-scaling DTC brands to venture-backed tech platforms, our agile creative and media frameworks seamlessly synchronize with your leadership team.
              </p>
            </div>

            {/* 2x2 Soft Mint / Sage Cards (matching reference layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflowCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-[#DCEADB] text-[#1E2B1A] space-y-1.5 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <h4 className="text-sm font-bold tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#394935] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1817] text-xs font-bold hover:bg-neutral-100 transition-all shadow-md active:scale-95"
              >
                <span>Scale Your Brand Workflow</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
