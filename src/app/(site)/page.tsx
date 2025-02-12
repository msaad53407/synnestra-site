import AnimatedBanner from '@/components/AnimatedBanner';
import AnimatedSection from '@/components/AnimatedSection';
import AppShowcaseCard from '@/components/cards/AppShowcaseCard';
import LogosCarousel from '@/components/LogosCarousel';
import ReviewSection from '@/components/sections/ReviewSection';
import StatisticsBar from '@/components/StatisticsBar';
import { Button } from '@/components/ui/button';
import { CarouselItem } from '@/components/ui/carousel';
import { companies, perks, projectsShowcase, solutions, technologyCards } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20 pb-8">
      <section
        className="flex items-center flex-col lg:flex-row pt-20 px-4 py-6 sm:px-6 lg:px-12 bg-custom-purple-light"
        style={{
          background: 'linear-gradient(180deg, rgba(224,226,255,1) 0%, rgba(255,255,255,1) 100%)',
          backgroundColor: 'rgb(224,226,255)',
        }}
      >
        <AnimatedSection direction={'left'} className="lg:w-1/2 lg:pr-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-custom-purple mb-6">
            <span className="inline-block pb-3">Simplifying Complex</span>
            <br />
            <span className="inline-block pb-3">Challenges with Smart</span>
            <br />
            <span className="inline-block pb-1">Software Solutions</span>
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            At Synnestra, we empower businesses to navigate the digital landscape with ease. Our innovative software
            solutions are designed to streamline your operations, enhance productivity, and unlock new opportunities for
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-5" asChild>
              <Link href="/about">Read More</Link>
            </Button>
            <Button className="bg-custom-purple hover:bg-custom-purple hover:bg-opacity-90 rounded-full px-5" asChild>
              <Link href="/contact-us">
                Let&apos;s Talk
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection direction={'right'} className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="aspect-w-16 aspect-h-9 rounded-lg">
            <Image
              src="/illustrations/hero_illustration.svg"
              alt="hero_illustrations"
              width={1000}
              height={1000}
              className="object-cover rounded-lg"
              quality={100}
            />
          </div>
        </AnimatedSection>
      </section>
      {/* <InfiniteMovingCards direction="left" speed="very-slow" className="px-4 py-6 sm:px-6 lg:px-12">
        {[...companies, ...companies].map((item, index) => (
          <li key={item.title + ' ' + index} className="size-24 flex items-center justify-center">
            <Image src={item.thumbnail} alt={item.title} width={100} height={100} className="object-contain" />
          </li>
        ))}
      </InfiniteMovingCards> */}
      <LogosCarousel speed={2}>
        {[...companies, ...companies].map((item, index) => (
          <CarouselItem key={item.title + ' ' + index} className="basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-[12.5%]">
            <Image src={item.thumbnail} alt={item.title} width={120} height={120} className="object-cover" />
          </CarouselItem>
        ))}
      </LogosCarousel>
      <StatisticsBar />
      <AnimatedBanner />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4 py-6 sm:px-6 lg:px-12">
        {perks.map(({ description, image, title }, indx) => (
          <AnimatedSection direction={'up'} key={title} duration={0.5 * (indx + 1)} className="flex flex-col gap-5">
            <Image src={image} alt={title} width={100} height={100} className="size-16 object-contain" quality={100} />
            <h4 className="font-medium text-xl">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
          </AnimatedSection>
        ))}
      </section>
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <h2 className="text-4xl md:text-4xl font-medium text-center text-custom-purple mb-12">
          Apps we&apos;ve developed are trending on the App Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {projectsShowcase.map((project, index) => (
            <AppShowcaseCard index={index} key={index} project={project} />
          ))}
        </div>
        {/*<div className="text-center mt-8">*/}
        {/*  <a href="#" className="text-custom-purple hover:underline">*/}
        {/*    View all Case studies*/}
        {/*  </a>*/}
        {/*</div>*/}
      </section>
      <section className="bg-blue-100 px-4 py-6 sm:px-6 lg:px-12 relative">
        <div className="my-8">
          <span className="inline-block bg-white text-sm font-semibold py-1 px-3 rounded-xl">WHAT WE OFFER</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-6">
          {solutions.map((solution, index) => (
            <AnimatedSection
              direction={'up'}
              duration={0.3 * (index + 1)}
              key={index}
              className="bg-white rounded-lg space-y-3 p-6 shadow-sm relative min-h-[23rem]"
            >
              <Image
                src={solution.icon}
                alt={`${solution.title} icon`}
                width={200}
                height={200}
                className="mb-4 size-10"
                quality={100}
              />
              <h3 className="text-2xl font-medium text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-6">{solution.description}</p>
              {solution.link && (
                <Link
                  href={solution.link}
                  className="text-custom-purple w-full mt-3 py-2 px-4 hover:underline border-t absolute bottom-2 border-t-custom-purple-light"
                >
                  Learn more
                </Link>
              )}
            </AnimatedSection>
          ))}
        </div>
        {/*<div className="text-center mt-12 w-full">*/}
        {/*  <Button className="bg-custom-purple hover:bg-custom-purple text-white">View All Solutions</Button>*/}
        {/*</div>*/}
      </section>
      <section className="px-4 py-6 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {/* Organizations recognized our work */}
          <AnimatedSection direction={'left'} className="bg-custom-purple text-white p-6 rounded-lg">
            <h2 className="text-4xl font-medium mb-4 leading-relaxed md:leading-loose">
              Organizations recognized our work
            </h2>
            <div className="flex space-x-4 mb-4 items-center gap-3">
              <div className="space-y-3">
                <Image src="/company_logos/fiverr-logo-purple.png" alt="Fiverr" width={80} height={30} />
                <p className="text-sm text-custom-purple-light text-center">Fiverr</p>
              </div>
              {/* <div className="space-y-3">
                <Image src="/company_logos/Google.svg" alt="google" width={80} height={30} />
                <p className="text-sm text-custom-purple-light text-center">Google</p>
              </div> */}
              <div className="space-y-3">
                <Image src="/company_logos/upwork-logo.png" alt="Upwork" width={80} height={30} />
                <p className="text-sm text-custom-purple-light text-center">Upwork</p>
              </div>
            </div>
          </AnimatedSection>

          {/* We use latest technologies */}
          <AnimatedSection direction={'left'} className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-4xl font-medium mb-4 leading-relaxed md:leading-loose">
              We use latest technologies to run your project smoothly
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologyCards.map((tech) => (
                <span key={tech.name} className="bg-white px-3 py-1 rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="flex flex-col gap-6 md:mt-20 w-full md:w-1/2">
          {/* Synnestra has been recognized */}
          <AnimatedSection direction={'right'} className="bg-gray-100 p-6 rounded-lg relative row-span-2">
            <h2 className="text-4xl font-medium mb-4 leading-relaxed md:leading-loose">
              Synnestra has been recognized as a leader in the industry
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-5 justify-between relative min-h-36">
              <div className="size-full md:size-48 md:absolute md:right-0">
                <Image
                  src="/illustrations/shape-dots-black.svg"
                  alt="Decorative triangle"
                  width={400}
                  height={400}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </AnimatedSection>
          {/* Create a great career */}
          <AnimatedSection direction={'right'} className="bg-custom-purple text-white p-6 rounded-lg relative">
            <h2 className="text-4xl font-medium mb-4 leading-relaxed md:leading-loose">
              Develop your career and unlock future growth with Synnestra
            </h2>
          </AnimatedSection>
        </div>
      </section>
      <ReviewSection />
      {/*<NewsletterSubscription />*/}
    </div>
  );
}
