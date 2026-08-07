'use client';

import { useRef, useEffect } from 'react';
import { LineNumbers } from './main/LineNumbers';
import Lenis from 'lenis';

export default function Main({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    let rafId = 0;
    let lenis: Lenis | null = null;

    const enableLenis = () => {
      if (lenis || window.matchMedia('(max-width: 1023px)').matches) return;

      lenis = new Lenis({
        wrapper,
        content,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 2,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const disableLenis = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      lenis?.destroy();
      lenis = null;
      lenisRef.current = null;
      // Reset any Lenis transform so native scroll works
      content.style.removeProperty('transform');
      content.style.removeProperty('height');
      wrapper.scrollTop = 0;
    };

    const syncScrollMode = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        enableLenis();
      } else {
        disableLenis();
      }
    };

    syncScrollMode();

    const media = window.matchMedia('(min-width: 1024px)');
    const onChange = () => syncScrollMode();
    media.addEventListener('change', onChange);

    return () => {
      media.removeEventListener('change', onChange);
      disableLenis();
    };
  }, []);

  return (
    <main className='relative h-full min-h-0 overflow-hidden bg-[#1f1f1f]'>
      <div
        ref={wrapperRef}
        className='h-full overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch]'
      >
        <div ref={contentRef} data-lenis-content className='relative'>
          <div className='pointer-events-none absolute bottom-0 left-0 top-0 w-8 overflow-hidden md:w-[50px]'>
            <LineNumbers measureRef={bodyRef} />
          </div>
          <div
            ref={bodyRef}
            className='editor-content pl-8 font-mono md:pl-[50px]'
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
