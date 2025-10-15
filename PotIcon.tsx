'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function PotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const lastStateRef = useRef(false); // for hysteresis & avoiding extra re-renders

  useEffect(() => {
    const home = document.getElementById('home');
    if (!home) return;

    // Hysteresis: open when >= 55% in view, close when <= 35% in view
    const OPEN_THRESHOLD = 0.55;
    const CLOSE_THRESHOLD = 0.35;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const ratio = entry.intersectionRatio;

        if (!lastStateRef.current && ratio >= OPEN_THRESHOLD) {
          lastStateRef.current = true;
          setIsOpen(true);
        } else if (lastStateRef.current && ratio <= CLOSE_THRESHOLD) {
          lastStateRef.current = false;
          setIsOpen(false);
        }
      },
      {
        // multiple thresholds for smoother ratio reporting
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0.0 → 1.0
      }
    );

    io.observe(home);
    return () => io.disconnect();
  }, []);

  const handleClick = () => {
    const home = document.getElementById('home');
    if (home) home.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 left-4 z-50 p-2"
      aria-label="Scroll to home"
    >
      {/* Stacked images that crossfade; no src swapping */}
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        {/* Closed (base) */}
        <Image
          src="/closed-pot.png"
          alt="Pot closed"
          fill
          sizes="100px"
          className={`absolute inset-0 object-contain transition-opacity duration-700 ease-[cubic-bezier(.2,.8,.2,1)]
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          priority
        />

        {/* Open (on top) */}
        <Image
          src="/open-pot.png"
          alt="Pot open"
          fill
          sizes="70px"
          className={`absolute inset-0 object-contain transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)]
            ${isOpen ? 'opacity-100 scale-100 rotate-3' : 'opacity-0 scale-100 rotate-0'}`}
          priority
        />
      </div>
    </button>
  );
}

