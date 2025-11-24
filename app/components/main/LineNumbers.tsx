'use client';

import { useEffect, useState } from 'react';

interface LineNumbersProps {
  contentRef?: React.RefObject<HTMLDivElement | null>;
}

export function LineNumbers({ contentRef }: LineNumbersProps) {
  const [lineCount, setLineCount] = useState(354);

  useEffect(() => {
    const calculateLines = () => {
      const scrollableContent = contentRef?.current;
      if (scrollableContent) {
        const height = scrollableContent.scrollHeight;
        const lines = Math.ceil(height / 22);
        setLineCount(lines);
      } else {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          const height = mainElement.scrollHeight;
          const lines = Math.ceil(height / 22);
          setLineCount(lines);
        }
      }
    };

    calculateLines();

    const resizeObserver = new ResizeObserver(() => {
      calculateLines();
    });

    const targetElement = contentRef?.current || document.querySelector('main');
    if (targetElement) {
      resizeObserver.observe(targetElement);
    }

    window.addEventListener('resize', calculateLines);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateLines);
    };
  }, [contentRef]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowY: 'hidden',
        background: 'transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: '8px',
          boxSizing: 'border-box',
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <span
            key={i + 1}
            style={{
              height: '22px',
              lineHeight: '22px',
              color: 'rgb(157, 157, 157)',
              whiteSpace: 'pre',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px',
              letterSpacing: '0em',
              fontWeight: 400,
              fontStyle: 'normal',
              textAlign: 'right',
              userSelect: 'none',
            }}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

