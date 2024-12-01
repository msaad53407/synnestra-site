'use client';
import { useActiveProject } from '@/hooks/useActiveProject';
import { ProjectCatalog } from '@/types';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from './cards/ProjectCard';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export const InfiniteScrollingProjects = ({ products }: { products: ProjectCatalog }) => {
  const firstRow = products.websites;
  const secondRow = products.mobileApps;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const { activeProject } = useActiveProject();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div ref={ref} className={`h-full pb-[500px] overflow-hidden antialiased relative flex flex-col self-auto`}>
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          <InfiniteMovingCards speed="slow" pause={activeProject ? firstRow.includes(activeProject) : false}>
            {firstRow.map((product) => (
              <ProjectCard key={product.title} product={product} />
            ))}
          </InfiniteMovingCards>
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20">
          <InfiniteMovingCards speed="slow" pause={activeProject ? secondRow.includes(activeProject) : false}>
            {secondRow.map((product) => (
              <ProjectCard key={product.title} product={product} />
            ))}
          </InfiniteMovingCards>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-custom-purple">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers
        and designers that love to build amazing products.
      </p>
    </div>
  );
};
