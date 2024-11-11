'use client';

import GradientText from '@/components/GradientText';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useState } from 'react';
import useInView from '@/hooks/useInView';

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
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef);

  const { scrollYProgress } = useScroll({
    target: contentRef,
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
      ref={sectionRef}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-10 relative">
        <div className={'left-0 h-fit md:h-screen flex bg-background px-4 md:px-12'}>
          <div
            className={cn(
              `top-28 lg:top-44 h-fit space-y-5 max-w-xl transition`,
              isInView && 'md:fixed -translate-y-10 md:w-1/3',
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Our Offerings</p>
            <GradientText className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-relaxed">
              {mainHeading}
            </GradientText>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
            <Button className="mt-8 gap-2 bg-custom-purple text-white rounded-full hover:bg-custom-purple" size="lg">
              Get in Touch
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
        <div ref={contentRef} className={cn('relative flex items-start px-4')}>
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
                viewport={{ once: true, margin: '-100px' }}
                className="rounded-xl border bg-card p-8 shadow-sm"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-4 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
            <div className="h-40" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
