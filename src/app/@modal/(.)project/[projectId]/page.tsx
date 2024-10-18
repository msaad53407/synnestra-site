'use client';

import ProjectModal from '@/components/modals/ProjectModal';
import { useActiveProject } from '@/hooks/useActiveProject';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const ProjectPage = () => {
  const { activeProject } = useActiveProject();
  if (!activeProject) notFound();

  return (
    <ProjectModal>
      <div className="space-y-4">
        <Image
          src={activeProject.thumbnail}
          alt={activeProject.title}
          width={1000}
          height={1000}
          className="object-cover w-full rounded-xl"
          priority
          quality={100}
        />
        <div className="flex gap-4 items-center justify-between">
          <h3 className="text-2xl font-medium">{activeProject?.title}</h3>
          <a
            href={activeProject?.link}
            className="flex items-center bg-custom-purple text-white px-4 py-2 rounded-full"
          >
            <span>Live Preview</span> <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </ProjectModal>
  );
};

export default ProjectPage;
