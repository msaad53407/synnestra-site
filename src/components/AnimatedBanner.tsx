'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const AnimatedBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const arrowY = useTransform(scrollYProgress, [0, 1], ['80%', '-200%']);
  return (
    <section className="bg-custom-purple h-60 rounded-xl flex items-center justify-between relative overflow-hidden mx-4 sm:mx-6 lg:mx-6 px-4 py-6 sm:px-6 lg:px-12">
      <div className="flex flex-col justify-between w-fit h-full text-white">
        <h4 className="text-xs">WHAT WE DO</h4>
        <div className="text-3xl font-medium space-y-3">
          <h4>Simplifying IT</h4>
          <h4>for a complex world</h4>
        </div>
      </div>
      <motion.div className="w-32 md:w-48 mr-10" style={{ y: arrowY }} animate={{ y: 0 }}>
        <Image
          src={'/illustrations/shape-dots.svg'}
          alt="shape-dots"
          width={100}
          height={100}
          className="size-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default AnimatedBanner;