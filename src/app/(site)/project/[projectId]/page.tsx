import TechnologyCard from '@/components/cards/TechnologyCard';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';
import { Safari } from '@/components/magicui/safari';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { products } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const activeProjectWebsite = products.websites.find((website) => website.slug === params.projectId);
  const activeProjectMobile = products.mobileApps.find((app) => app.slug === params.projectId);

  const activeProject = activeProjectWebsite || activeProjectMobile;

  if (!activeProject) return { title: 'Not Found' };
  return {
    title: `${activeProject.title}`,
  };
}

export const generateStaticParams = () => {
  const websiteSlugs = products.websites.map((website) => ({ projectId: website.slug }));
  const mobileAppSlugs = products.mobileApps.map((app) => ({ projectId: app.slug }));

  return [...websiteSlugs, ...mobileAppSlugs];
};

const ProjectPage = async (props: Props) => {
  const params = await props.params;
  const activeProjectWebsite = products.websites.find((website) => website.slug === params.projectId);
  const activeProjectMobile = products.mobileApps.find((app) => app.slug === params.projectId);

  const activeProject = activeProjectWebsite || activeProjectMobile;

  if (!activeProject) notFound();

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-12">
        <Image
          src={activeProject.thumbnail}
          alt={activeProject.title}
          width={1000}
          height={1000}
          className="object-cover aspect-video w-full rounded-xl min-h-[300px] max-w-screen-lg mx-auto"
          priority
          quality={100}
        />
        <div className="flex gap-4 items-center justify-between">
          <h2 className="text-3xl font-medium">{activeProject.title}</h2>
        </div>
      </div>

      <p className="text-gray-600 px-4 sm:px-6 lg:px-12">{activeProject.description}</p>

      <div className="px-4 py-6 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-medium mb-2">Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          {activeProject.features.map((feature, index) => (
            <li key={index} className={'text-gray-600'}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={'px-4 py-6 sm:px-6 lg:px-12'}>
        <h2 className="text-3xl font-medium mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {activeProject.technologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} />
          ))}
        </div>
      </div>

      {activeProject.images.length > 0 && (
        <div className={'px-4 py-6 sm:px-6 lg:px-12'}>
          <h2 className="text-3xl font-medium mb-2">Project Snapshots</h2>
          <Carousel className="w-full max-w-screen-lg mx-auto relative">
            <CarouselContent>
              {activeProject.images.map(({ src }, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    {/* <Image
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className="object-contain max-h-[450px] w-full rounded-xl"
                      priority
                    /> */}
                    {activeProject.type === 'mobile' ? (
                      <Iphone15Pro src={src} width={400} height={900} className="object-contain w-full" />
                    ) : (
                      <Safari imageSrc={src} className="object-contain size-full my-6" />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={'max-md:absolute max-md:-left-2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:z-10'}
            />
            <CarouselNext
              className={'max-md:absolute max-md:-right-2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:z-10'}
            />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
