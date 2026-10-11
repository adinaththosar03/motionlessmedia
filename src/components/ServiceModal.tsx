import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookService: (service: ServiceDetail) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-neutral-100">
          <div>
            <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold">
              {service.tagline}
            </p>
            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mt-0.5">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body content */}
        <div className="py-6 space-y-6">
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Included Deliverables & Strategy
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg sm:text-xl font-extrabold text-neutral-900 tabular-nums">
                  {m.value}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Case Study spotlight */}
          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
            <div className="flex items-center justify-between text-xs text-indigo-900 mb-1 font-semibold">
              <span>Client Spotlight: {service.caseStudy.client}</span>
              <span className="text-indigo-700">{service.caseStudy.result}</span>
            </div>
            <p className="text-xs text-neutral-600 leading-normal">
              {service.caseStudy.highlight}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
          >
            Close
          </button>
          <button
            onClick={() => onBookService(service)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
