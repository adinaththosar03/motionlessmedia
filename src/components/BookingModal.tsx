import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceType, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    monthlyBudget: '$10k - $25k',
    services: initialService ? [initialService] : ['video', 'performance'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService && !formData.services.includes(initialService)) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (service: ServiceType) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid work email is required';
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-xl bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
              <Check size={28} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Strategy Session Requested
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-neutral-900 font-semibold">{formData.name}</span>. Our team at Motion Less Media has received your brief and will review your brand within 2 hours.
            </p>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 max-w-md mx-auto text-left space-y-1.5">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                <Calendar size={14} className="text-indigo-600" />
                <span>Next Step: 20-Minute Discovery Call</span>
              </div>
              <p>Calendar invitation & prep kit sent to <span className="text-neutral-900 font-medium">{formData.email}</span>.</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">
                <ShieldCheck size={14} />
                <span>Motion Less Media · Direct Access</span>
              </div>
              <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                Schedule a Discovery Call
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Let's discuss your video pipeline, social storytelling, and performance marketing goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Studio or Website URL"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Services of Interest *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => toggleService('video')}
                    className={`px-3 py-2 text-xs rounded-lg border text-left transition-colors flex items-center justify-between cursor-pointer ${
                      formData.services.includes('video')
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Video Production</span>
                    {formData.services.includes('video') && <Check size={12} className="text-indigo-600" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleService('social')}
                    className={`px-3 py-2 text-xs rounded-lg border text-left transition-colors flex items-center justify-between cursor-pointer ${
                      formData.services.includes('social')
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Social Media</span>
                    {formData.services.includes('social') && <Check size={12} className="text-indigo-600" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleService('performance')}
                    className={`px-3 py-2 text-xs rounded-lg border text-left transition-colors flex items-center justify-between cursor-pointer ${
                      formData.services.includes('performance')
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span>Performance Ads</span>
                    {formData.services.includes('performance') && <Check size={12} className="text-indigo-600" />}
                  </button>
                </div>
                {errors.services && <p className="text-xs text-red-500 mt-1">{errors.services}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <span>{isSubmitting ? 'Confirming...' : 'Request Discovery Call'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
