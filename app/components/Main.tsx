'use client';

import { useRef, useEffect } from 'react';
import { LineNumbers } from './main/LineNumbers';
import Lenis from 'lenis';

export default function Main({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const lenis = new Lenis({
      wrapper: contentRef.current,
      content: contentRef.current.querySelector(
        '[data-lenis-content]'
      ) as HTMLElement,
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
    <main className='h-[calc(100vh-30px)] bg-[#1f1f1f] relative overflow-hidden'>
      <div className='absolute left-0 top-0 bottom-0 w-[50px]'>
        <LineNumbers contentRef={contentRef} />
      </div>
      <div ref={contentRef} className='pl-[50px] h-full overflow-hidden'>
        <div data-lenis-content className='h-full'>
          <>{children}</>
        </div>
      </div>
    </main>
  );
}
