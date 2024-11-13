'use client';

import ProjectModal from '@/components/modals/ProjectModal';
import { useActiveProject } from '@/hooks/useActiveProject';
import { notFound } from 'next/navigation';

const ProjectPage = () => {
  const { activeProject } = useActiveProject();
  if (!activeProject) notFound();

  return (
    <ProjectModal />
  );
};

export default ProjectPage;
