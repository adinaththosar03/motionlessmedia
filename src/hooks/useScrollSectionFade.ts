import { useEffect } from 'react';

export function useScrollSectionFade() {
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const updateSectionFade = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
      if (sections.length === 0) return;

      const footer = document.querySelector<HTMLElement>('footer');
      const viewportHeight = window.innerHeight;
      const focalY = viewportHeight * 0.42;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY >= lastScrollY;
      lastScrollY = currentScrollY;

      // Ensure all sections have the base transition class
      sections.forEach((sec) => {
        if (!sec.classList.contains('section-scroll-fade')) {
          sec.classList.add('section-scroll-fade');
        }
      });

      // Check if user is in footer
      let isInFooter = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= viewportHeight * 0.55) {
          isInFooter = true;
        }
      }

      // Check if scrolled to bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      let currentIdx = 0;
      if (isInFooter) {
        currentIdx = sections.length;
      } else if (isAtBottom) {
        currentIdx = sections.length - 1;
      } else {
        // Find which section covers the focal line (42% down from top)
        let found = false;
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= focalY && rect.bottom > focalY) {
            currentIdx = i;
            found = true;
            break;
          }
        }
        if (!found) {
          // Fallback: pick section closest to viewport center
          const viewportCenter = viewportHeight / 2;
          let minDistance = Infinity;
          sections.forEach((sec, idx) => {
            const rect = sec.getBoundingClientRect();
            const secCenter = rect.top + rect.height / 2;
            const dist = Math.abs(secCenter - viewportCenter);
            if (dist < minDistance) {
              minDistance = dist;
              currentIdx = idx;
            }
          });
        }
      }

      // Handle fade out for sections
      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        const isAboveCurrent = idx < currentIdx;

        // When scrolling down, any section above the current section whose bottom
        // has scrolled past or is moving above the focal area fades out.
        // When scrolling up, sections re-entering the viewport fade back in.
        let shouldFadeOut = false;
        if (isAboveCurrent) {
          if (isScrollingDown) {
            // Fading out as we scroll down past it
            shouldFadeOut = rect.bottom < viewportHeight * 0.45;
          } else {
            // When scrolling up, only keep faded if it's completely off-screen above
            shouldFadeOut = rect.bottom <= 0;
          }
        }

        if (shouldFadeOut) {
          sec.classList.add('section-faded-above');
        } else {
          sec.classList.remove('section-faded-above');
        }
      });
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateSectionFade);
    };

    // Initial check
    updateSectionFade();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);
}
