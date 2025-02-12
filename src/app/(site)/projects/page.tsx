import AnimatedSection from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/cards/ProjectCard';
import LogosCarousel from '@/components/LogosCarousel';
import { CarouselItem } from '@/components/ui/carousel';
import { companies, products } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-20 pb-8 w-full">
      {/* Hero Section */}
      <section className="flex items-center flex-col lg:flex-row px-4 py-6 sm:px-6 lg:px-12 pt-28">
        <AnimatedSection direction={'left'} className="lg:w-1/2 lg:pr-16">
          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-custom-purple mb-4">
            The Ultimate
            <br />
            development studio
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-500">
            We build beautiful products with the latest technologies and frameworks. We are a team of passionate
            developers and designers that love to build amazing products.
          </p>
        </AnimatedSection>
        <AnimatedSection direction={'right'} className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="aspect-w-16 aspect-h-9 rounded-lg">
            <Image
              src="/illustrations/projects_hero_section.png"
              alt="Projects Hero Section"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* <InfiniteMovingCards direction="left" speed="very-slow" className="px-4 py-6 sm:px-6 lg:px-12">
        {[...companies, ...companies].map((item, index) => (
          <li key={item.title + ' ' + index} className="size-24 flex items-center justify-center">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={100}
              height={100}
              className="object-cover"
            />
          </li>
        ))}
      </InfiniteMovingCards> */}

      <LogosCarousel speed={2}>
        {[...companies, ...companies].map((item, index) => (
          <CarouselItem key={item.title + ' ' + index} className="basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-[12.5%]">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={120}
              height={120}
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </LogosCarousel>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <AnimatedSection direction="left" className="px-4 py-6 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-purple mb-8">
            Web Applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.websites.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Mobile Apps Section */}
      <section className="w-full py-12 md:py-24">
        <AnimatedSection direction="right" className="px-4 py-6 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-purple mb-8">
            Mobile Applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.mobileApps.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
