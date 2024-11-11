'use client';

import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import useInView from '@/hooks/useInView';

type Props = {
  direction: 'left' | 'right' | 'up' | 'down',
  duration?: number,
  className?: string
} & PropsWithChildren;

const AnimatedSection = ({ children, direction, duration = 0.5, className }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const variants = {
    left: {
      initial: { opacity: 0, x: inView ? -50 : -100 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: inView ? 50 : 100 },
      animate: { opacity: 1, x: 0 },
    },
    up: {
      initial: { opacity: 0, y: inView ? -50 : -100 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: inView ? 50 : 100 },
      animate: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;