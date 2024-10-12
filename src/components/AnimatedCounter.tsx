'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const animation = animate(count, to, { duration: duration });
      return animation.stop;
    }
  }, [count, to, duration, isMounted]);

  return <motion.span>{rounded}</motion.span>;
}
