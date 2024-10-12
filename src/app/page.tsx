import AnimatedBanner from '@/components/AnimatedBanner';
import AppShowcaseCard from '@/components/cards/AppShowcaseCard';
import NewsletterSubscription from '@/components/sections/EmailNewsletter';
import StatisticsBar from '@/components/StatisticsBar';
import { Button } from '@/components/ui/button';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { companies, perks, projectsShowcase, solutions } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-20 py-8">
      <section className="flex items-center flex-col lg:flex-row px-4 py-6 sm:px-6 lg:px-12">
        <div className="lg:w-1/2 lg:pr-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-custom-purple mb-6">
            <span className="inline-block pb-3">Simplifying Complex</span>
            <br />
            <span className="inline-block pb-3">Challenges with Smart</span>
            <br />
            <span className="inline-block pb-1">Software Solutions</span>
          </h1>
          <p className="text-gray-400 mb-8 text-sm">
            Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus sed fames arcu sed aliquor. Euismod
            habitant turpis pellentesque posuere et amet sagittis velit. Diam tortor sed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-5">Read more</Button>
            <Button className="bg-custom-purple hover:bg-custom-purple-light rounded-full px-5">
              Let&apos;s Talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
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
        </div>
      </section>
      <InfiniteMovingCards direction="left" speed="fast" className="px-4 py-6 sm:px-6 lg:px-12">
        {companies.map((item) => (
          <div key={item.title} className="size-36 flex items-center justify-center">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={100}
              height={100}
              className="size-full object-contain"
            />
          </div>
        ))}
      </InfiniteMovingCards>
      <StatisticsBar />
      <AnimatedBanner />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4 py-6 sm:px-6 lg:px-12">
        {perks.map(({ description, image, title }) => (
          <div key={title} className="flex flex-col gap-5">
            <Image src={image} alt={title} width={100} height={100} className="size-16 object-contain" quality={100} />
            <h4 className="font-medium text-xl">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        ))}
      </section>
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <h2 className="text-4xl md:text-4xl font-medium text-center text-custom-purple my-12">
          Apps we built been
          <br />
          trending on the App Store
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {projectsShowcase.map((project, index) => (
            <AppShowcaseCard index={index} key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-custom-purple hover:underline">
            View all Case studies
          </a>
        </div>
      </section>
      <section className="bg-blue-100 px-4 py-6 sm:px-6 lg:px-12 relative">
        <div className="my-8">
          <span className="inline-block bg-white text-sm font-semibold py-1 px-3 rounded-xl">HOW WE DO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-8">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm relative min-h-80">
              <Image
                src={solution.icon}
                alt={`${solution.title} icon`}
                width={200}
                height={200}
                className="mb-4 size-10"
                quality={100}
              />
              <h3 className="text-2xl font-medium text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <a
                href="#"
                className="text-custom-purple w-full py-2 px-4 hover:underline absolute bottom-2 left-0 border-t border-t-custom-purple-light"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 w-full">
          <Button className="bg-custom-purple hover:bg-custom-purple text-white">View All Solutions</Button>
        </div>
      </section>
      <NewsletterSubscription />
    </div>
  );
}
