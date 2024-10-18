'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useActiveProject } from '@/hooks/useActiveProject';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';

export const ProjectCard = ({ product }: { product: Project }) => {
  const { setActiveProject } = useActiveProject();
  const router = useRouter();

  const setActiveProjectHandler = () => {
    setActiveProject(product);
    router.push(`/project/${product.slug}`);
  };

  return (
    <motion.div
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer"
      onClick={setActiveProjectHandler}
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
    </motion.div>
  );
};
