import AnimatedSection from '@/components/AnimatedSection';
import Banner from '@/components/Banner';
import GradientText from '@/components/GradientText';
import CompanyImpact from '@/components/sections/CompanyImpact';
import SplitColorText from '@/components/SplitColorText';
import { Button } from '@/components/ui/button';
import { servicesProvided } from '@/lib/constants';
import { ArrowUpRight, Code2, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    service: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const selectedService = servicesProvided.find((s) => s.slug === params.service);
  return {
    title: selectedService?.title,
  };
}

export const generateStaticParams = () => servicesProvided.map((service) => ({ service: service.slug }));

const ServicePage = async (props: Props) => {
  const params = await props.params;

  const { service } = params;

  const selectedService = servicesProvided.find((s) => s.slug === service);
  if (!selectedService) notFound();

  return (
    <div className="space-y-12">
      <div className="mb-44 md:mb-52">
        <Banner
          image="/services_banner.png"
          className="left-6 -bottom-[8.5rem] min-[550px]:-bottom-24 md:-bottom-32 lg:-bottom-40 w-max sm:w-screen max-w-full sm:max-w-screen-2xl"
          minHeight="min-h-[350px]"
        >
          <AnimatedSection direction={'left'} className="flex flex-col gap-4">
            <h3 className="text-wrap text-3xl md:text-4xl w-full text-center font-bold text-gray-100 leading-relaxed">
              {selectedService.title}
            </h3>
            <p className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-2">From a</p>
            <SplitColorText
              text="concept to"
              className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-black font-medium mb-2"
              firstColor="from-white"
              secondColor="to-black"
              viaColor="via-black"
            />
            <div className="flex flex-col min-[550px]:flex-row gap-4 min-[550px]:items-center">
              <p className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-black font-medium">
                digital reality
              </p>
              <Button asChild className="bg-custom-orange px-4 py-2 max-w-44 rounded-full hover:bg-custom-orange">
                <Link href="/contact-us">
                  Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </Banner>
      </div>
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-x-20 gap-y-8">
        <AnimatedSection direction={'left'} className="md:w-1/2">
          <GradientText className={'md:text-5xl text-4xl'}>{selectedService.introSection.title}</GradientText>
          <p className="text-gray-600 mb-4">{selectedService.introSection.description}</p>
        </AnimatedSection>
        <AnimatedSection direction={'right'} className="md:w-1/2 h-fit">
          <Image
            src={selectedService.imageSrc}
            alt="Managed IT Services"
            width={500}
            height={300}
            className="rounded-lg object-contain object-center  w-full hover:zoom-out-150 transition-all"
            quality={100}
          />
        </AnimatedSection>
      </section>
      {selectedService.techStack && (
        <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
          <span className="inline-block bg-custom-purple text-white text-sm font-medium py-2 px-4 rounded-full mb-8">
            Tech Stack
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedService.techStack.frameworks.length > 0 && (
              <AnimatedSection direction="left" className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-custom-purple-light">
                    <Code2 className="w-6 h-6 text-custom-purple" />
                  </div>
                  <h3 className="text-2xl font-semibold">Frameworks</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedService.techStack.frameworks.map((framework, index) => (
                    <li key={index} className="bg-gray-100 rounded-full p-3 text-center text-sm font-medium">
                      {framework}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            )}
            {selectedService.techStack.tools.length > 0 && (
              <AnimatedSection direction="right" className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-custom-purple-light">
                    <Wrench className="w-6 h-6 text-custom-purple" />
                  </div>
                  <h3 className="text-2xl font-semibold">Tools</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedService.techStack.tools.map((tool, index) => (
                    <li key={index} className="bg-gray-100 rounded-full p-3 text-center text-sm font-medium">
                      {tool}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 p-8">
        <div className="bg-purple-50 rounded-lg px-4 py-6 sm:px-6 lg:px-12">
          <AnimatedSection
            direction={'left'}
            className="flex flex-col sm:flex-row sm:justify-between gap-5 items-center"
          >
            <h2 className="text-4xl font-medium mb-8 text-center leading-relaxed">
              Our Approach to {selectedService.title}
            </h2>
            <Image src="/illustrations/shape-dots.svg" alt="shape-dots illustration" width={200} height={150} />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedService.ourApproach.map((approach, index) => (
              <AnimatedSection direction={'up'} duration={0.5 * (index + 1)} key={index} className="space-y-4">
                <h3 className="text-2xl font-medium">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* <StickyScroll
        content={selectedService.offers.offerings}
        mainHeading={selectedService.offers.mainHeading}
        subtitle={selectedService.offers.subtitle}
      />
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 space-y-5">
        <h3 className="text-5xl font-medium tracking-tight leading-relaxed text-center">Our Capability</h3>
        <div className="space-y-2 border-dashed border-2 p-4 rounded-lg">
          <div className="grid grid-cols-2 text-center mb-4">
            <h3 className="text-sm font-semibold">Self Service Channel</h3>
            <h3 className="text-sm font-semibold">Human Assisted Channel</h3>
          </div>
          <div className="grid grid-cols-6 gap-2 text-sm">
            <div className="rounded border p-2 text-center">Web/e-core</div>
            <div className="rounded border p-2 text-center">Kiosk</div>
            <div className="rounded border p-2 text-center">Mobile App</div>
            <div className="rounded border p-2 text-center">(IVR/USSD/SMSC)</div>
            <div className="rounded border p-2 text-center">Retail Shop/ POS</div>
            <div className="rounded border p-2 text-center">Contact Center</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
          <div className="row-span-4 hidden md:flex items-center justify-center bg-muted p-2 rounded col-span-1">
            <span className="-rotate-90 whitespace-nowrap">Infrastructure Cloud and Security</span>
          </div>

          <div className="space-y-5 col-span-8">
            <div className="flex flex-wrap gap-4 justify-center text-sm border-dashed border-2 p-4 rounded-lg">
              <div className="rounded-full border px-4 py-2">Unified Interaction Hub</div>
              <div className="rounded-full border px-4 py-2">Experience Monitor</div>
              <div className="rounded-full border px-4 py-2">Customer Interaction</div>
              <div className="rounded-full border px-4 py-2">Live Chat</div>
              <div className="rounded-full border px-4 py-2">Communication Engine</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm ">
              <div className="space-y-4 border-dashed border-2 p-4 rounded-lg">
                <h4 className="font-semibold">Marketing</h4>
                <div className="rounded bg-muted/50 p-2 text-center">Loyalty Management</div>
              </div>

              <div className="space-y-4 border-dashed border-2 p-4 rounded-lg">
                <h4 className="font-semibold">Sales</h4>
                <div className="rounded bg-muted/50 p-2 text-center">Lead & Opportunity</div>
                <div className="rounded bg-muted/50 p-2 text-center">Contract Management</div>
                <div className="rounded bg-muted/50 p-2 text-center">Quote(CPQ)</div>
              </div>

              <div className="space-y-4 border-dashed border-2 p-4 rounded-lg">
                <h4 className="font-semibold">Services</h4>
                <div className="rounded bg-muted/50 p-2 text-center">Complaint & Problem</div>
                <div className="rounded bg-muted/50 p-2 text-center">Complaint & Problem</div>
              </div>

              <div className="space-y-4 border-dashed border-2 p-4 rounded-lg">
                <h4 className="font-semibold">Partner</h4>
                <div className="rounded bg-muted/50 p-2 text-center">Partner Management</div>
              </div>
            </div>

            <div className="space-y-2 border-dashed border-2 p-4 rounded-lg">
              <h4 className="font-semibold">BSS Base Capability</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="rounded bg-muted/50 p-2 text-center">Enterprise Product Catalogue</div>
                <div className="rounded bg-muted/50 p-2 text-center">Order Management</div>
                <div className="rounded bg-muted/50 p-2 text-center">Customer Management</div>
                <div className="rounded bg-muted/50 p-2 text-center">VAS</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-dashed border-2 p-4 rounded-lg">
              <div className="space-y-2">
                <h4 className="font-semibold">OSS Base Capability</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded bg-muted/50 p-2 text-center">Rating & Charging</div>
                  <div className="rounded bg-muted/50 p-2 text-center">Billing</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Supporting Capability</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded bg-muted/50 p-2 text-center">Document Management</div>
                  <div className="rounded bg-muted/50 p-2 text-center">Data Analytics</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" row-span-4 hidden md:flex items-center justify-center bg-muted p-2 rounded col-span-1">
            <span className="-rotate-90 whitespace-nowrap">Managed Service Warranty & Maintenance</span>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-center font-semibold border-dashed border-2 p-4 rounded-lg">Our Engagement Philosophy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-dashed border-2 p-4 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full border border-red-200 p-4">
                <Settings className="size-8 text-red-400" />
              </div>
              <span className="text-sm text-center">Project / Deliverable based</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full border border-red-200 p-4">
                <Users className="size-8 text-red-400" />
              </div>
              <span className="text-sm text-center">Staff Augmentation</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full border border-red-200 p-4">
                <BarChart3 className="size-8 text-red-400" />
              </div>
              <span className="text-sm text-center">Managed Services</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full border border-red-200 p-4">
                <Building2 className="size-8 text-red-400" />
              </div>
              <span className="text-sm text-center">Global In-house Center</span>
            </div>
          </div>
        </div>
      </section>
      */}
      <CompanyImpact />
      {/*<NewsletterSubscription />;*/}
    </div>
  );
};

export default ServicePage;
