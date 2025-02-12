import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedSection from '@/components/AnimatedSection';
import Banner from '@/components/Banner';
import TechnologyCard from '@/components/cards/TechnologyCard';
import ReviewSection from '@/components/sections/ReviewSection';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/ui/timeline';
import { technologyCards, timelineItems } from '@/lib/constants';
import { MobileIcon } from '@radix-ui/react-icons';
import { ArrowRight, Globe, ShoppingCart } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <div className="space-y-20">
      <div className="relative w-full md:mb-72 min-[1478px]:mb-48 space-y-5">
        <Banner image="/about_banner.png" className="bottom-10 left-4 md:bottom-1/3">
          <AnimatedSection direction={'left'} className="flex flex-col gap-4">
            <h1 className="text-4xl font-medium text-white leading-relaxed">Explore the world of Synnestra.</h1>
            <p className="text-white font-normal md:w-1/2">
              Synnestra is a leading provider of cutting-edge technology solutions that empower the world&apos;s top
              companies to achieve their goals and stay ahead of the competition.
            </p>
          </AnimatedSection>
        </Banner>
        <section className="md:absolute left-1/2 transform w-[95%] mx-auto lg:w-2/3 border border-gray-300 md:-translate-x-1/2 md:-bottom-60 xl:-bottom-56 min-[1478px]:-bottom-36 p-10 flex flex-col gap-5 items-center bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Powered by the Technologies You Trust.</h3>
          <div className="flex gap-5 items-center justify-center w-full flex-wrap">
            {technologyCards.map((techCard) => (
              <TechnologyCard technology={techCard} key={techCard.name} />
            ))}
          </div>
        </section>
      </div>
      <AnimatedSection
        direction="up"
        className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col gap-8 items-center max-w-screen-lg mx-auto"
      >
        <h2 className="text-4xl md:text-5xl text-custom-purple font-medium">Our History</h2>
        <h3 className="text-2xl font-medium text-center leading-relaxed">
          Proudly serving the <span className="text-custom-purple">world&apos;s top companies</span> with smart{' '}
          <span className="text-custom-purple">technology solutions</span> for over 3 years.
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Synnestra&apos;s legacy of innovation and unwavering dedication to client success has earned us the trust and
          loyalty of the world&apos;s leading organizations. Through our deep domain expertise, advanced technology
          capabilities, and exceptional service delivery, we have consistently helped our clients navigate complex
          challenges, seize new opportunities, and drive sustainable growth.
        </p>
        <p className="text-sm text-gray-500 text-center">
          Our commitment to excellence and innovation positions Synnestra as a trusted partner for top global companies.
          We leverage our extensive experience and cutting-edge solutions to deliver exceptional value, ensuring our
          clients achieve their strategic objectives and maintain a competitive edge in their respective industries.
        </p>
      </AnimatedSection>

      <section className="w-full px-4 py-6 sm:px-6 lg:px-12">
        <Timeline data={timelineItems} />
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-12 flex flex-col gap-8 items-center">
        <AnimatedSection direction={'up'} className="space-y-4">
          <div className=" px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-custom-purple text-sm font-medium tracking-wider uppercase">
                  PIONEERING TRUST AND INNOVATION
                </h3>
                <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                  Synnestra&apos;s Achievements
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                  At Synnestra, we simplify complex IT challenges and empower businesses with innovative solutions.
                  Guided by resilience and a commitment to excellence, we continue to expand our reach, drive growth,
                  and deliver exceptional value to our clients worldwide.
                </p>

                <Button variant="link" className="group text-black p-0 h-auto font-semibold" asChild>
                  <Link href="/contact-us">
                    Get in Touch
                    <ArrowRight className="ml-</p>2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 text-custom-purple">
                  <p className="text-2xl font-bold mb-2">
                    $
                    <AnimatedCounter from={0} to={500} />
                    K+
                  </p>
                  <p className="text-sm text-gray-600">Assets Managed Globally</p>
                </div>
                <div className="space-y-2 text-custom-purple">
                  <p className="text-2xl font-bold mb-2">
                    <AnimatedCounter from={0} to={250} />+
                  </p>
                  <p className="text-sm text-gray-600">Successful Implementations</p>
                </div>
                <div className="space-y-2 text-custom-purple">
                  <p className="text-2xl font-bold mb-2">
                    <AnimatedCounter from={0} to={100} />+
                  </p>
                  <p className="text-sm text-gray-600">Global Clients</p>
                </div>
                <div className="space-y-2 text-custom-purple">
                  <p className="text-2xl font-bold mb-2">
                    <AnimatedCounter from={0} to={20} />+
                  </p>
                  <p className="text-sm text-gray-600">Active Projects</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      <section className="bg-white space-y-20 px-4 py-6 sm:px-6 lg:px-12">
        <div className="max-w-screen-lg mx-auto space-y-8">
          <h3 className="text-3xl font-bold text-center">Domain Expertise</h3>
          <p className="text-sm text-gray-500 text-center">
            Synnestra is a trusted partner with deep domain expertise across a wide range of industries and technology
            landscapes. For many years, we have been at the forefront of innovation, delivering cutting-edge solutions
            that empower our clients to stay ahead of the curve.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <AnimatedSection
              direction={'left'}
              className="col-span-1 md:col-span-4 bg-custom-purple relative p-6 rounded-xl gap-4"
            >
              <h4 className="text-3xl font-medium mb-2 text-white">Innovative Web & Mobile Solutions</h4>
              <p className="text-sm font-medium text-white w-[80%]">
                Synnestra excels in developing high-performance web and mobile applications tailored to meet the unique
                needs of our clients. Our expertise spans across various industries, delivering intuitive and scalable
                solutions that drive engagement and efficiency. <br /> <br />
                From responsive web designs to feature-rich mobile apps, we leverage the latest technologies and best
                practices to create seamless user experiences. Our dedicated team ensures that every application is
                optimized for performance, security, and usability, providing our clients with a competitive edge in the
                digital landscape. <br /> <br />
                Our commitment to excellence extends beyond the initial development phase. We provide ongoing support
                and maintenance to ensure that our applications continue to perform at their best, adapting to evolving
                market trends and technological advancements.
              </p>
              <Globe className="absolute size-20 bottom-3 right-3 text-white opacity-60" />
              <MobileIcon className="absolute size-20 bottom-24 right-3 text-white opacity-60" />
            </AnimatedSection>
            <AnimatedSection
              direction={'left'}
              className="col-span-1 md:col-span-2 bg-gray-100 relative p-6 rounded-xl gap-4"
            >
              <h4 className="text-3xl font-medium mb-2">Revolutionizing with AI, ML, and Data Science</h4>
              <p className="text-sm font-medium w-2/3">
                At Synnestra, we harness the power of AI, ML, and Data Science to drive innovation and deliver
                actionable insights. Our solutions enable businesses to make data-driven decisions, optimize operations,
                and uncover new opportunities for growth. By leveraging advanced algorithms and cutting-edge
                technologies, we help our clients stay ahead of the competition and achieve their strategic objectives.
              </p>
              <Image
                src="/icons/eos-icons_ai.svg"
                alt="ai"
                width={120}
                height={120}
                className="absolute bottom-2 right-2 bg-purple-800 bg-clip-text"
              />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <AnimatedSection
              direction={'right'}
              className="col-span-1 md:col-span-2 bg-gray-100 relative p-6 rounded-xl gap-4"
            >
              <h4 className="text-3xl font-medium mb-2">Expert IT Consultancy Services</h4>
              <p className="text-sm font-medium w-2/3">
                Synnestra&apos;s IT consultancy services are designed to help businesses navigate the complexities of
                the modern technology landscape. Our expert consultants work closely with clients to understand their
                unique challenges and objectives, providing tailored strategies and solutions that drive efficiency,
                innovation, and growth.
              </p>
              <Image
                src="/icons/grommet-icons_services.svg"
                alt="synnestra"
                width={100}
                height={100}
                className="absolute bottom-3 right-3 bg-black bg-clip-text"
              />
            </AnimatedSection>
            <AnimatedSection
              direction={'right'}
              className="col-span-1 md:col-span-4 bg-custom-purple relative p-6 rounded-xl gap-4"
            >
              <h4 className="text-3xl font-medium mb-2 text-white">Ecommerce and Corporate Compliance Services</h4>
              <p className="text-sm font-medium text-white w-[80%]">
                Synnestra provides comprehensive ecommerce solutions and corporate compliance services to ensure your
                business operates smoothly and adheres to all regulatory standards. Our services include managing and
                optimizing ecommerce platforms such as Amazon, Shopify, Walmart, and others. We assist with setting up
                and maintaining online stores, handling product listings, inventory management, and order fulfillment.{' '}
                <br /> <br />
                Additionally, we offer corporate compliance services including registering companies for startups in the
                UK, US, and other countries, filing annual and quarterly returns, and obtaining and registering phone
                numbers. <br /> <br />
                With our deep expertise and efficient processes, we help you navigate the complexities of ecommerce and
                corporate compliance, allowing you to focus on your core business activities. Our dedicated team offers
                continuous support to ensure your business remains compliant and thrives in a competitive market.
              </p>
              <ShoppingCart className="absolute size-20 bottom-3 right-3 text-white opacity-60" />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <ReviewSection />
      {/*<NewsletterSubscription />*/}
    </div>
  );
};

export default AboutPage;
