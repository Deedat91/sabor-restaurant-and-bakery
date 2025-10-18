'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function PotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const lastStateRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on the homepage
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // Original homepage behavior - watch for #home section
      const home = document.getElementById('home');
      if (!home) return;

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
          threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        }
      );

      io.observe(home);
      return () => io.disconnect();
    } else {
      // Other pages behavior - watch scroll position
      const handleScroll = () => {
        const scrollY = window.scrollY;
        
        if (!lastStateRef.current && scrollY >= 200) {
          lastStateRef.current = true;
          setIsOpen(true);
        } else if (lastStateRef.current && scrollY <= 100) {
          lastStateRef.current = false;
          setIsOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const handleClick = () => {
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // On homepage, scroll to #home section
      const home = document.getElementById('home');
      if (home) home.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On other pages, navigate to homepage
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 left-4 z-50 p-2 hover:scale-110 transition-transform"
      aria-label="Go to home"
    >
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