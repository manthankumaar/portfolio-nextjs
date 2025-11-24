'use client';

import { ReactLenis } from 'lenis/react';

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 2,
        autoRaf: true,
        autoResize: true,
        autoToggle: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
