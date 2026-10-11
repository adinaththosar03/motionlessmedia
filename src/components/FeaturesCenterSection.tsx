import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesCenterSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHeadingZooming, setIsHeadingZooming] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Trigger zoom animation when scrolling to this section's heading
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeadingZooming(true);
          } else {
            setIsHeadingZooming(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stepsData = [
    {
      stepNumber: '1',
      stepCode: '01',
      stepName: 'Direction',
      whatWeDo: 'Find your audience, message and plan',
      symptom: '“No clear content direction”',
      service: 'Content Strategy',
      details: 'We map out your customer avatars, pinpoint your core market hook, and build a 90-day thematic editorial calendar before cameras roll.',
    },
    {
      stepNumber: '2',
      stepCode: '02',
      stepName: 'Attention',
      whatWeDo: 'Create videos and content that stop the scroll',
      symptom: '“My videos don’t convert”',
      service: 'Video Production',
      details: 'Cinema-grade lighting, Hollywood-level 4K capture, and rapid multivariate hook cutdowns engineered specifically for retention and direct response.',
    },
    {
      stepNumber: '3',
      stepCode: '03',
      stepName: 'Presence',
      whatWeDo: 'Stay visible and consistent where your customers are',
      symptom: '“I post but get no engagement”',
      service: 'Social Media Management',
      details: 'Platform-native daily distribution across TikTok, Instagram Reels, and YouTube Shorts that builds brand familiarity and compounding reach.',
    },
    {
      stepNumber: '4',
      stepCode: '04',
      stepName: 'Reach',
      whatWeDo: 'Put the right content in front of the right buyers',
      symptom: '“My ads bring low-quality leads”',
      service: 'Performance Marketing',
      details: 'Disciplined paid acquisition funnels across Meta & Google that filter out tire-kickers and feed high-intent buyers into your pipeline.',
    },
  ];

  // Track which step is currently scrolled into the viewport focus
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="section-scroll-fade py-24 sm:py-36 px-4 sm:px-6 bg-white border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Centered Heading */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 
              ref={headingRef}
              className={`text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.12] transition-transform duration-500 ${
                isHeadingZooming ? 'animate-zoom-text-effect' : ''
              }`}
            >
              Here’s how we get you moving.
            </h2>
          </div>
        </ScrollReveal>

        {/* Centered Scroll-Revealed Process Stream */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12 relative">
          {/* Visual Process Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-12 bottom-12 w-0.5 bg-neutral-200 z-0" />

          {stepsData.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;
            const slideDirection = idx % 2 === 0 ? 'left' : 'right';

            return (
              <ScrollReveal 
                key={step.stepCode}
                direction={slideDirection} 
                delay={50}
                className="w-full"
              >
                <div
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  className={`relative z-10 transition-all duration-500 transform ${
                    isActive 
                      ? 'scale-100 opacity-100' 
                      : isPassed
                        ? 'scale-[0.99] opacity-80'
                        : 'scale-[0.97] opacity-45'
                  }`}
                >
                  <div className={`rounded-3xl p-7 sm:p-9 border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white border-neutral-950 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] ring-1 ring-neutral-950' 
                      : 'bg-neutral-50/70 border-neutral-200/90 shadow-2xs hover:bg-white hover:border-neutral-300'
                  }`}>
                    {/* Step Card Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-mono font-bold transition-colors ${
                          isActive 
                            ? 'bg-neutral-950 text-white shadow-xs' 
                            : 'bg-neutral-200 text-neutral-800'
                        }`}>
                          {step.stepCode}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight">
                          {step.stepName}
                        </h3>
                      </div>

                      {/* Service Tag */}
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        isActive 
                          ? 'bg-neutral-950 text-white' 
                          : 'bg-white border border-neutral-200 text-neutral-700'
                      }`}>
                        {step.service}
                      </span>
                    </div>

                    {/* What We Do */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold block">
                        What we do:
                      </span>
                      <p className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {step.whatWeDo}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {step.details}
                      </p>
                    </div>

                    {/* Fixes this symptom callout */}
                    <div className={`p-4 rounded-2xl border transition-colors ${
                      isActive 
                        ? 'bg-neutral-50 border-neutral-200' 
                        : 'bg-white/80 border-neutral-200/60'
                    }`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">
                          Fixes this symptom:
                        </span>
                        <span className="font-bold text-neutral-950 italic">
                          {step.symptom}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
