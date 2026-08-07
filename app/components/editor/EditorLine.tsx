'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { EDITOR_LINE_HEIGHT } from '@/lib/editor';

/** One IDE row — always exactly one line-number tall */
export function EditorLine({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex h-6 min-h-6 max-h-6 items-center overflow-hidden font-mono text-[13px] font-medium leading-6',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Empty IDE rows for vertical spacing */
export function EditorBlank({ lines = 1 }: { lines?: number }) {
  return (
    <>
      {Array.from({ length: lines }, (_, i) => (
        <EditorLine key={i} aria-hidden />
      ))}
    </>
  );
}

/** Comment-style section label: <!-- label --> */
export function EditorComment({ children }: { children: ReactNode }) {
  return (
    <EditorLine className='gap-2 text-[#666]'>
      <span>&lt;!--</span>
      <span className='select-none'>{children}</span>
      <span>--&gt;</span>
    </EditorLine>
  );
}

/**
 * Pads a block (images, cards, etc.) so its total height
 * lands on the next line-number boundary — prevents drift.
 */
export function SnapToGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const snap = () => {
      el.style.paddingBottom = '0px';
      const height = el.getBoundingClientRect().height;
      const remainder = height % EDITOR_LINE_HEIGHT;
      const padding =
        remainder === 0 ? 0 : EDITOR_LINE_HEIGHT - remainder;
      el.style.paddingBottom = `${padding}px`;
    };

    snap();
    const observer = new ResizeObserver(snap);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
