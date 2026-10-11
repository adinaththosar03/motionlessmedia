import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [budget, setBudget] = useState(15000);
  const [industry, setIndustry] = useState<'ecommerce' | 'saas' | 'services'>('ecommerce');

  const multipliers = {
    ecommerce: { roas: 4.4, viewsMultiplier: 65, ctr: '3.4%' },
    saas: { roas: 3.8, viewsMultiplier: 45, ctr: '2.8%' },
    services: { roas: 5.1, viewsMultiplier: 35, ctr: '3.9%' },
  };

  const current = multipliers[industry];
  const projectedRevenue = Math.round(budget * current.roas);
  const projectedViews = Math.round(budget * current.viewsMultiplier).toLocaleString();
  const projectedProfit = Math.round(projectedRevenue - budget);

  return (
    <section id="calculator" className="py-24 px-6 border-t border-neutral-100 bg-neutral-50/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-indigo-600 font-bold mb-2">
            <Calculator size={14} />
            <span>Growth Forecasting</span>
          </div>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Estimate Your Campaign Lift
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Simulate your revenue velocity when combining cinema-grade video with algorithmic media buying.
          </p>
        </div>

        <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          {/* Industry selector */}
          <div className="mb-8">
            <label className="block text-xs font-semibold text-neutral-700 mb-2.5">
              Select Your Business Category
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                onClick={() => setIndustry('ecommerce')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  industry === 'ecommerce'
                    ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 bg-white'
                }`}
              >
                E-Commerce / DTC
              </button>
              <button
                onClick={() => setIndustry('saas')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  industry === 'saas'
                    ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 bg-white'
                }`}
              >
                B2B & Tech / SaaS
              </button>
              <button
                onClick={() => setIndustry('services')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  industry === 'services'
                    ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-xs'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 bg-white'
                }`}
              >
                High-Ticket Services
              </button>
            </div>
          </div>

          {/* Budget Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-neutral-700">
                Monthly Advertising & Production Budget
              </span>
              <span className="text-xl font-bold text-neutral-900 tabular-nums">
                ${budget.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min={3000}
              max={100000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-indigo-600 h-2 bg-neutral-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono">
              <span>$3,000/mo</span>
              <span>$50,000/mo</span>
              <span>$100,000+/mo</span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 mb-8">
            <div className="text-center sm:text-left">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">
                Target Benchmark ROAS
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tabular-nums">
                {current.roas}x
              </span>
              <span className="text-[11px] text-neutral-500 block mt-0.5">
                Avg. CTR: {current.ctr}
              </span>
            </div>

            <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-neutral-200 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">
                Est. Video Impressions
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tabular-nums">
                {projectedViews}
              </span>
              <span className="text-[11px] text-neutral-500 block mt-0.5">
                Targeted audience reach
              </span>
            </div>

            <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-neutral-200 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">
                Projected Pipeline Revenue
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 tabular-nums">
                ${projectedRevenue.toLocaleString()}
              </span>
              <span className="text-[11px] text-neutral-600 block mt-0.5 font-medium">
                +${projectedProfit.toLocaleString()} gross gain
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <TrendingUp size={16} className="text-neutral-700" />
              <span>Based on verified historical portfolio benchmarks</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Build Custom Blueprint</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
