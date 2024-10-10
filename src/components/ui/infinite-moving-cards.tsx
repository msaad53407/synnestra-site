'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../cards/ProjectCard';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

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
        } else {
          containerRef.current.style.setProperty('--animation-duration', '80s');
        }
      }
    };
    addAnimation();
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  return (
    <div ref={containerRef} className={cn('scroller relative z-20  max-w-7xl overflow-hidden', className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <li
            className="w-max max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-max"
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.title}
          >
            <ProjectCard product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
