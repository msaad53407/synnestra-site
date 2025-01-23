'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  pause = false,
  className,
  children,
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow' | 'very-slow';
  pause?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === 'left') {
          containerRef.current.style.setProperty('--animation-direction', 'forwards');
        } else {
          containerRef.current.style.setProperty('--animation-direction', 'reverse');
        }
      }
    };
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === 'fast') {
          containerRef.current.style.setProperty('--animation-duration', '20s');
        } else if (speed === 'normal') {
          containerRef.current.style.setProperty('--animation-duration', '40s');
        } else if (speed === 'slow') {
          containerRef.current.style.setProperty('--animation-duration', '80s');
        } else {
          containerRef.current.style.setProperty('--animation-duration', '120s');
        }
      }
    };
    addAnimation();
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  return (
    <div ref={containerRef} className={cn('scroller relative z-20 overflow-hidden', className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap space-x-10 gradient-3',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          pause && '[animation-play-state:paused]',
        )}
        style={{
          background: 'linear-gradient(180deg, rgba(224,226,255,1) 0%, rgba(255,255,255,1) 100%)',
          backgroundColor: 'rgb(224,226,255)',
        }}
      >
        {children}
      </ul>
    </div>
  );
};
