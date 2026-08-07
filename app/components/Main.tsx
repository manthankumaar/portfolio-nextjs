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
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <main className='relative min-h-0 h-full overflow-hidden bg-[#1f1f1f]'>
      <div ref={wrapperRef} className='h-full overflow-hidden'>
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
