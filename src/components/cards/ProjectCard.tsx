'use client';

import Image from 'next/image';

import { useActiveProject } from '@/hooks/useActiveProject';
import { cn } from '@/lib/utils';
import { Project } from '@/types';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export const ProjectCard = ({ project, className }: { project: Project; className?: string }) => {
  const { setActiveProject } = useActiveProject();

  const setActiveProjectHandler = () => {
    setActiveProject(project);
  };

  return (
    <Card className={cn('flex flex-col h-full', className)}>
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <h3 className="text-2xl text-custom-purple font-semibold tracking-tight mb-2">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-[8]">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-fit px-5 py-2 bg-custom-purple text-white hover:bg-custom-purple" onClick={setActiveProjectHandler}>
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
};
