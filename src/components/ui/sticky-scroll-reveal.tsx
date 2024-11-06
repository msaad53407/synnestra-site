/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from './button';

export const StickyScroll = ({
  content,
  mainHeading,
  subtitle,
}: {
  mainHeading: string;
  subtitle: string;
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[800px] overflow-y-auto grid grid-cols-2 justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="sticky left-0 top-0 flex h-screen bg-background px-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Our Offerings</p>
          <h2 className="mt-4 text-5xl font-medium tracking-tight leading-relaxed">{mainHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          <Button className="mt-8 gap-2 bg-custom-purple text-white rounded-full hover:bg-custom-purple" size="lg">
            Get in Touch
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl space-y-10">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              viewport={{ margin: '-100px' }}
              className="mr-12 rounded-xl border bg-card p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
