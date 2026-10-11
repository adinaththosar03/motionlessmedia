import React from 'react';

export const ImpactMetricsSection: React.FC = () => {
  const metricCards = [
    {
      metric: '+310%',
      label: 'Average Revenue Velocity',
      subtext: 'Observed across verified client ad accounts in first 90 days',
      cardStyle: 'bg-white border border-neutral-200/90 text-neutral-950',
      textStyle: 'text-neutral-950',
      subStyle: 'text-neutral-600',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80',
    },
    {
      metric: '4.6x',
      label: 'Verified ROAS',
      subtext: 'Disciplined capital efficiency across Meta, Google & TikTok',
      cardStyle: 'bg-neutral-100/90 border border-neutral-200/80 text-neutral-950',
      textStyle: 'text-neutral-950',
      subStyle: 'text-neutral-600',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    },
    {
      metric: '45M+',
      label: 'Organic & Paid Views Delivered',
      subtext: 'High-retention video sequences engineered to capture attention',
      cardStyle: 'bg-neutral-950 border border-neutral-800 text-white',
      textStyle: 'text-white',
      subStyle: 'text-neutral-300',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    },
    {
      metric: '14 Days',
      label: 'Concept to Market Turnaround',
      subtext: 'From initial creative brief to launched multivariant campaigns',
      cardStyle: 'bg-white border border-neutral-200/90 text-neutral-950',
      textStyle: 'text-neutral-950',
      subStyle: 'text-neutral-600',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="results" className="py-24 px-4 sm:px-6 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15] mb-4">
            Proven Results, Real Impact
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            See how high-growth brands are breaking through ad fatigue, communicating with cultural precision, and scaling revenue with our full-stack media engine.
          </p>
        </div>

        {/* 4 Tall Vertical Rounded Cards (Black, White & Shades of Gray) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl ${card.cardStyle} overflow-hidden shadow-xs flex flex-col justify-between p-6 min-h-[380px] group transition-all duration-300 hover:shadow-lg`}
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-xs bg-neutral-900">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Metric Text */}
              <div className="space-y-1">
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums ${card.textStyle}`}>
                  {card.metric}
                </div>
                <h4 className={`text-sm font-bold ${card.textStyle}`}>
                  {card.label}
                </h4>
                <p className={`text-xs leading-relaxed pt-1 ${card.subStyle}`}>
                  {card.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Loved by Founders Around the World" strip */}
        <div className="mt-28 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-2">
            Loved by Founders Around the World
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 mb-12">
            From breakthrough DTC startups to enterprise market leaders, brands trust our team every single day.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
            {[
              { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80', name: 'Sophia R.', role: 'Founder, Lumina' },
              { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80', name: 'Marcus V.', role: 'CMO, Kinetix' },
              { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop&q=80', name: 'Chloe T.', role: 'Brand Director, Veloce' },
              { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80', name: 'Julian D.', role: 'Growth Lead, Nordic Peak' },
              { img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&fit=crop&q=80', name: 'Amara O.', role: 'CEO, Solstice' },
            ].map((f, i) => (
              <div
                key={i}
                className="w-24 sm:w-32 aspect-[3/4.2] rounded-2xl overflow-hidden shadow-xs relative group bg-neutral-100 border border-neutral-200/60"
              >
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1.5 inset-x-1.5 text-center text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {f.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
