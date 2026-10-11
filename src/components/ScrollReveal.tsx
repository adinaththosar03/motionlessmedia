import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  threshold?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100 scale-100 filter-none';
    if (direction === 'left') return '-translate-x-16 sm:-translate-x-24 opacity-0 scale-[0.97] blur-[2px]';
    if (direction === 'right') return 'translate-x-16 sm:translate-x-24 opacity-0 scale-[0.97] blur-[2px]';
    if (direction === 'up') return 'translate-y-16 opacity-0 scale-[0.985] blur-[2px]';
    if (direction === 'down') return '-translate-y-16 opacity-0 scale-[0.985] blur-[2px]';
    return 'opacity-0 scale-[0.985] blur-[2px]';
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '950ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all will-change-transform will-change-opacity ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};
