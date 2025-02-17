'use client';

import TechnologyCard from '@/components/cards/TechnologyCard';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useActiveProject } from '@/hooks/useActiveProject';
import Image from 'next/image';
import Link from 'next/link';
import Iphone15Pro from '../magicui/iphone-15-pro';
import { Safari } from '../magicui/safari';
// import { ImageViewer } from './ImageViewerModal';
// import { useState } from 'react';

const ProjectModal = () => {
  const { setActiveProject, activeProject } = useActiveProject();
  // const [selectedImage, setSelectedImage] = useState<{
  //   src: string | null;
  //   alt: string;
  // } | null>(null);

  if (!activeProject) return null;

  return (
    <Dialog
      defaultOpen={true}
      open={activeProject !== null}
      onOpenChange={() => {
        setActiveProject(null);
      }}
    >
      {activeProject && (
        <DialogContent
          className={'h-[calc(100vh-100px)] mx-auto w-[98%] rounded-lg md:w-[50%] max-w-[90%] overflow-y-scroll'}
        >
          <DialogHeader>
            <DialogTitle className="sr-only">View Project Details</DialogTitle>
            <DialogDescription className="sr-only">
              This dialog is for viewing the details of a project.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-8">
            <div className="space-y-4">
              <Image placeholder="blur"
        blurDataURL="/placeholder.jpg"
                src={activeProject.thumbnail}
                alt={activeProject.title}
                width={1000}
                height={1000}
                className="object-cover w-full rounded-xl aspect-video min-h-[300px]"
                priority
                quality={100}
                // onClick={() => setSelectedImage({ src: activeProject.thumbnail, alt: activeProject.title })}
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
                  <Link
                    href={`/project/${activeProject?.slug}`}
                    onClick={() => {
                      setActiveProject(null);
                    }}
                  >
                    Read more
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-gray-600">{activeProject.description}</p>

            <div>
              <h4 className="text-2xl font-medium mb-2">Features</h4>
              <ul className="list-disc pl-5 space-y-1">
                {activeProject.features.map((feature, index) => (
                  <li key={index} className={'text-gray-600'}>
                    {feature}
                  </li>
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

            {activeProject.images.length > 0 && (
              <div>
                <h4 className="text-2xl font-medium mb-2">Project Snapshots</h4>
                <Carousel className="w-full max-w-xl mx-auto h-fit relative ">
                  <CarouselContent className='overflow-x-hidden'>
                    {activeProject.images.map(({ src }, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          {/* <Image placeholder="blur"
        blurDataURL="/placeholder.jpg"
                            src={image.src}
                            alt={image.alt}
                            width={1000}
                            height={1000}
                            className="object-contain w-full rounded-xl aspect-square"
                            quality={100}
                            priority
                            // onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                          /> */}
                          {activeProject.type === 'mobile' ? (
                            <Iphone15Pro src={src} width={460} height={700} className="object-contain w-full" />
                          ) : (
                            <Safari imageSrc={src} className="object-contain size-full my-6" />
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className={'absolute -left-2 top-1/2 -translate-y-1/2 z-10'} />
                  <CarouselNext className={'absolute -right-2 top-1/2 -translate-y-1/2 z-10'} />
                </Carousel>
              </div>
            )}

            {/* {selectedImage && (
              <ImageViewer
                src={selectedImage.src || '/placeholder.svg'}
                alt={selectedImage.alt}
                onClose={() => setSelectedImage(null)}
                isOpen={!!selectedImage}
              />
            )} */}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ProjectModal;
