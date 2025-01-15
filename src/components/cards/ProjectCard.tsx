'use client';

import Image from 'next/image';

import { useActiveProject } from '@/hooks/useActiveProject';
import { cn } from '@/lib/utils';
import { Project } from '@/types';
import { motion } from 'framer-motion';

export const ProjectCard = ({ product, className }: { product: Project; className?: string }) => {
  const { setActiveProject } = useActiveProject();

  const setActiveProjectHandler = () => {
    setActiveProject(product);
  };

  return (
    <motion.div
      key={product.title}
      className={cn('group/product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer', className)}
      onClick={setActiveProjectHandler}
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-contain object-center absolute h-full w-full inset-0"
        alt={product.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
    </motion.div>
  );
};
