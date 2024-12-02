'use client';

import { motion, MotionProps, useInView } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

type Props = {
  direction: 'left' | 'right' | 'up' | 'down',
  duration?: number,
} & PropsWithChildren & MotionProps & React.HTMLAttributes<HTMLDivElement>;

const AnimatedSection = ({ children, direction, duration = 0.5, ...props }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;