import React from 'react';
import { marqueeItems } from '@/data/marquee';

export const MarqueeTicker: React.FC = () => {
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="border-y border-border bg-background py-6">
      <div className="marquee-paused relative overflow-hidden">
        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-4">
          {repeatedItems.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-ink"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
