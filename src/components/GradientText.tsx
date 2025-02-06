'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export default function GradientText({ className, children }: Props) {
  const defaultRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: defaultRef,
    offset: ['start end', 'end start'],
  });

  // Create a smooth animation for the gradient position
  const gradientProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to gradient positions
  const gradientX = useTransform(gradientProgress, [0, 1], ['0%', '200%']);

  return (
    <div ref={defaultRef}>
      <motion.div
        className="relative h-max"
        style={{
          background: `linear-gradient(
              to right,
              #000 0%,
              #3b82f6 25%,
              #ec4899 50%,
              #3b82f6 75%,
              #000 100%
            )`,
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          backgroundPosition: gradientX,
        }}
      >
        <h2 className={cn('text-5xl h-full font-medium mb-4 leading-normal', className)}>{children}</h2>
      </motion.div>
    </div>
  );
}
