'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useActiveProject } from '@/hooks/useActiveProject';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

const ProjectModal = ({ children }: PropsWithChildren) => {
  const { setActiveProject, activeProject } = useActiveProject();
  const router = useRouter();

  return (
    <Dialog
      defaultOpen={true}
      open={activeProject !== null}
      onOpenChange={() => {
        setActiveProject(null);
        router.back();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">View Project Details</DialogTitle>
          <DialogDescription className="sr-only">
            This dialog is for viewing the details of a project.
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
