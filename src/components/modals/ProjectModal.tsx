'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useActiveProject } from '@/hooks/useActiveProject';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TechnologyCard from '@/components/cards/TechnologyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProjectModal = () => {
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
      {activeProject && <DialogContent className={'h-[calc(100vh-100px)]  mx-auto sm:w-full overflow-y-scroll'}>
        <DialogHeader>
          <DialogTitle className="sr-only">View Project Details</DialogTitle>
          <DialogDescription className="sr-only">
            This dialog is for viewing the details of a project.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8">
          <div className="space-y-4">
            <Image
              src={activeProject.thumbnail}
              alt={activeProject.title}
              width={1000}
              height={1000}
              className="object-contain w-full rounded-xl max-h-[450px]"
              priority
              quality={100}
            />
            <div className="flex gap-4 items-center justify-between">
              <h3 className="text-2xl font-medium">{activeProject.title}</h3>
              {/*{activeProject.link && <a*/}
              {/*  href={activeProject.link}*/}
              {/*  className="flex items-center bg-custom-purple text-white px-4 py-2 rounded-full"*/}
              {/*>*/}
              {/*  <span>Live Preview</span> <ArrowUpRight className="ml-2 h-4 w-4" />*/}
              {/*</a>}*/}
              <Button
                className="flex items-center bg-custom-purple hover:bg-custom-purple text-white px-4 py-2 rounded-full"
                asChild
              >
                <a href={`/project/${activeProject?.slug}`}>Read more</a>
              </Button>
            </div>
          </div>

          <p className="text-gray-600">{activeProject.description}</p>

          <div>
            <h4 className="text-2xl font-medium mb-2">Features</h4>
            <ul className="list-disc pl-5 space-y-1">
              {activeProject.features.map((feature, index) => (
                <li key={index} className={'text-gray-600'}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {activeProject.technologies.map((tech, index) => (
                <TechnologyCard key={index} technology={tech} />
              ))}
            </div>
          </div>

          {activeProject.images.length > 0 && <div>
            <h4 className="text-2xl font-medium mb-2">Project Snapshots</h4>
            <Carousel className="w-full max-w-xl mx-auto relative ">
              <CarouselContent>
                {activeProject.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1000}
                        height={1000}
                        className="object-contain w-full rounded-xl max-h-[450px]"
                        quality={100}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={'absolute -left-2 top-1/2 -translate-y-1/2 z-10'} />
              <CarouselNext className={'absolute -right-2 top-1/2 -translate-y-1/2 z-10'} />
            </Carousel>
          </div>}
        </div>
      </DialogContent>}
    </Dialog>
  );
};

export default ProjectModal;
