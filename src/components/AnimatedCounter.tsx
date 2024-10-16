'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
  formatValue?: (value: number) => string;
};

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  formatValue = (value) => value.toFixed(0),
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => formatValue(latest));
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMounted(true);
        }
      },
      { rootMargin: '100px' },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (isMounted) {
      const animation = animate(count, to, { duration: duration });
      return animation.stop;
    }
  }, [count, to, duration, isMounted]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
