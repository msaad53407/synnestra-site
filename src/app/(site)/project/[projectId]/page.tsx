import { products } from '@/lib/constants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    projectId: string;
  };
};

const ProjectPage = ({ params }: Props) => {
  const activeProject = products.find((project) => project.slug === params.projectId);

  if (!activeProject) notFound();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-custom-purple mb-8">{activeProject.title}</h1>
      {/* <div className="text-center mb-8">{activeProject.description}</div> */}
      <Image src={activeProject.thumbnail} alt={activeProject.title} width={800} height={600} />
    </div>
  );
};

export default ProjectPage;
