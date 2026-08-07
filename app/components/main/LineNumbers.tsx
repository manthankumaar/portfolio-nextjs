'use client';

import { useEffect, useState } from 'react';
import { EDITOR_LINE_HEIGHT } from '@/lib/editor';

interface LineNumbersProps {
  measureRef?: React.RefObject<HTMLDivElement | null>;
}

export function LineNumbers({ measureRef }: LineNumbersProps) {
  const [lineCount, setLineCount] = useState(50);

  useEffect(() => {
    const calculateLines = () => {
      const measureTarget = measureRef?.current;
      if (!measureTarget) return;

      const height = measureTarget.offsetHeight;
      const lines = Math.max(1, Math.ceil(height / EDITOR_LINE_HEIGHT));
      setLineCount(lines);
    };

    calculateLines();

    const resizeObserver = new ResizeObserver(() => {
      calculateLines();
    });

    const measureTarget = measureRef?.current;
    if (measureTarget) {
      resizeObserver.observe(measureTarget);
    }

    window.addEventListener('resize', calculateLines);

    const timeoutId = window.setTimeout(calculateLines, 100);
    const timeoutId2 = window.setTimeout(calculateLines, 500);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateLines);
      window.clearTimeout(timeoutId);
      window.clearTimeout(timeoutId2);
    };
  }, [measureRef]);

  return (
    <div
      aria-hidden
      className='h-full w-full bg-transparent font-mono'
      style={{ fontSize: 11 }}
    >
      <div className='box-border flex flex-col items-end pr-1 md:pr-2'>
        {Array.from({ length: lineCount }, (_, i) => (
          <span
            key={i + 1}
            className='select-none whitespace-pre text-right font-mono text-[10px] font-normal text-[#9d9d9d] md:text-[11px]'
            style={{
              height: EDITOR_LINE_HEIGHT,
              lineHeight: `${EDITOR_LINE_HEIGHT}px`,
            }}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
