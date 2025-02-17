'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const AnimatedBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const arrowY = useTransform(scrollYProgress, [0, 1], ['80%', '-200%']);
  return (
    <AnimatedSection
      direction={'up'}
      className="bg-custom-purple h-fit rounded-xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden mx-4 px-4 py-6 sm:px-6 lg:px-12"
    >
      <div className="flex flex-col justify-between w-fit h-full text-white text-center md:text-left">
        <h4 className="text-xs">Our Mission</h4>
        <div className="text-3xl font-medium space-y-3">
          <h4>Enhancing and Optimizing IT</h4>
          <h4>to navigate a complex world</h4>
        </div>
      </div>
      <motion.div className="w-32 md:w-48 md:mr-10" style={{ y: arrowY }} animate={{ y: 0 }}>
        <Image placeholder="blur"
        blurDataURL="/placeholder.jpg"
          src={'/illustrations/shape-dots.svg'}
          alt="shape-dots"
          width={100}
          height={100}
          className="size-full object-contain"
        />
      </motion.div>
    </AnimatedSection>
  );
};

export default AnimatedBanner;
