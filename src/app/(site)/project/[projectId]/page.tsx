import { products } from '@/lib/constants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TechnologyCard from '@/components/cards/TechnologyCard';
import GradientText from '@/components/GradientText';

type Props = {
  params: {
    projectId: string;
  };
};

const ProjectPage = ({ params }: Props) => {
  const activeProject = products.find((project) => project.slug === params.projectId);

  if (!activeProject) notFound();

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="space-y-4">
        <Image
          src={activeProject.thumbnail}
          alt={activeProject.title}
          width={1000}
          height={1000}
          className="object-cover w-full rounded-xl max-w-screen-lg mx-auto"
          priority
          quality={100}
        />
        <div className="flex gap-4 items-center justify-between">
          <GradientText className="text-3xl font-medium">{activeProject.title}</GradientText>
          {activeProject.link && <a
            href={activeProject.link}
            className="flex items-center bg-custom-purple text-white px-4 py-2 rounded-full"
          >
            <span>Live Preview</span> <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>}
        </div>
      </div>

      <p className="text-gray-600">{activeProject.description}</p>

      <div>
        <GradientText className="text-3xl font-medium mb-2">Features</GradientText>
        <ul className="list-disc pl-5 space-y-1">
          {activeProject.features.map((feature, index) => (
            <li key={index} className={'text-gray-600'}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <GradientText className="text-3xl font-medium mb-2">Technologies Used</GradientText>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {activeProject.technologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} />
          ))}
        </div>
      </div>

      {activeProject.images.length > 0 && <div>
        <GradientText className="text-3xl font-medium mb-2">Project Snapshots</GradientText>
        <Carousel className="w-full max-w-screen-lg mx-auto relative">
          <CarouselContent>
            {activeProject.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="object-cover w-full rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={'max-md:absolute max-md:-left-2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:z-10'} />
          <CarouselNext
            className={'max-md:absolute max-md:-right-2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:z-10'} />
        </Carousel>
      </div>}
    </div>
  );
};

export default ProjectPage;
