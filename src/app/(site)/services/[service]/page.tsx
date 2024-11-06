import Banner from '@/components/Banner';
import CompanyImpact from '@/components/sections/CompanyImpact';
import NewsletterSubscription from '@/components/sections/EmailNewsletter';
import SplitColorText from '@/components/SplitColorText';
import { Button } from '@/components/ui/button';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { servicesProvided } from '@/lib/constants';
import { transformServiceSlug } from '@/lib/utils';
import { ArrowUpRight, Banknote, BarChart3, Building2, Lightbulb, Settings, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    service: string;
  };
};

const ServicePage = ({ params: { service } }: Props) => {
  const selectedService = servicesProvided.find((s) => s.slug === service);
  if (!selectedService) notFound();

  return (
    <div className="space-y-20">
      <div className="mb-60">
        <Banner
          image="/services_banner.png"
          className="left-6 -bottom-[8.5rem] min-[550px]:-bottom-24 md:-bottom-32 lg:-bottom-40"
          minHeight="min-h-[350px]"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-white leading-relaxed">{transformServiceSlug(service)}</h3>
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
              <Button asChild className="bg-custom-orange px-4 py-2 rounded-full hover:bg-custom-orange">
                <Link href={'#'}>
                  Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Banner>
      </div>
      {/* Managed IT Services Section */}
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-x-20 gap-y-8">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-medium mb-4 leading-normal">
            Our <span className="text-custom-purple">{transformServiceSlug(service)}</span> let you concentrate on what
            matters
          </h2>
          <p className="text-gray-600 mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={selectedService.imageSrc}
            alt="Managed IT Services"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </section>
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 space-y-8">
        <span className="inline-block bg-custom-purple text-white text-sm font-medium py-2 px-4 rounded-full mb-2">
          Why Synnestra
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="mb-8">
            <h2 className="text-5xl font-medium mb-4 leading-normal">
              Benefits of {transformServiceSlug(service)} provided by Synnestra
            </h2>
            <p className="text-gray-600 max-w-2xl">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedService.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <div className="p-2 rounded-full bg-custom-purple-light">
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AI-powered Insights Section */}
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 p-8">
        <div className="bg-purple-50 rounded-lg px-4 py-6 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <h2 className="text-4xl font-medium mb-8 text-center leading-relaxed">
              AI-powered insights on digital solutions and talent partnership services
            </h2>
            <Image src="/illustrations/shape-dots.svg" alt="shape-dots illustration" width={200} height={150} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '50% cost savings', icon: Banknote, color: 'text-pink-500', bgColor: 'bg-pink-300' },
              { title: '45% innovation ready', icon: Lightbulb, color: 'text-green-500', bgColor: 'bg-green-300' },
              { title: '8X more success', icon: Trophy, color: 'text-blue-500', bgColor: 'bg-blue-300' },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={'p-2 rounded-full ' + stat.bgColor}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium">{stat.title}</h3>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Digital Innovation Section
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 ">
        <div className="text-center mb-12">
          <span className="inline-block bg-custom-purple text-white text-sm font-medium py-2 px-4 rounded-full mb-2">
            Digital Consultancy
          </span>
          <h2 className="text-5xl font-medium mb-4 leading leading-relaxed">
            Unmatched digital <span className="text-custom-purple">innovation</span> and talent{' '}
            <span className="text-custom-purple">partnership</span> services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Digital transformation services', icon: '/placeholder.svg' },
            { title: 'Resource augmentation', icon: '/placeholder.svg' },
            { title: 'Support services', icon: '/placeholder.svg' },
            { title: 'Site migration & hosting', icon: '/placeholder.svg' },
            { title: 'Training & development', icon: '/placeholder.svg' },
            { title: 'Technical services & solutions', icon: '/placeholder.svg' },
          ].map((service, index) => (
            <div key={index} className="flex flex-col items-start">
              <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <StickyScroll
        content={selectedService.offers.offerings}
        mainHeading={selectedService.offers.mainHeading}
        subtitle={selectedService.offers.subtitle}
      />
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 space-y-5">
        <h3 className="text-5xl font-medium tracking-tight leading-relaxed text-center">Our Capability</h3>
        {/* Service Channels */}
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
          {/* Infrastructure Cloud and Security */}
          <div className="row-span-4 hidden md:flex items-center justify-center bg-muted p-2 rounded col-span-1">
            <span className="-rotate-90 whitespace-nowrap">Infrastructure Cloud and Security</span>
          </div>

          <div className="space-y-5 col-span-8">
            {/* Integration Hub Row */}
            <div className="flex flex-wrap gap-4 justify-center text-sm border-dashed border-2 p-4 rounded-lg">
              <div className="rounded-full border px-4 py-2">Unified Interaction Hub</div>
              <div className="rounded-full border px-4 py-2">Experience Monitor</div>
              <div className="rounded-full border px-4 py-2">Customer Interaction</div>
              <div className="rounded-full border px-4 py-2">Live Chat</div>
              <div className="rounded-full border px-4 py-2">Communication Engine</div>
            </div>

            {/* Main Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm ">
              {/* Main Columns */}
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

            {/* BSS Base Capability */}
            <div className="space-y-2 border-dashed border-2 p-4 rounded-lg">
              <h4 className="font-semibold">BSS Base Capability</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="rounded bg-muted/50 p-2 text-center">Enterprise Product Catalogue</div>
                <div className="rounded bg-muted/50 p-2 text-center">Order Management</div>
                <div className="rounded bg-muted/50 p-2 text-center">Customer Management</div>
                <div className="rounded bg-muted/50 p-2 text-center">VAS</div>
              </div>
            </div>

            {/* OSS and Supporting Capability */}
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

        {/* Engagement Philosophy */}
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
      <CompanyImpact />
      <NewsletterSubscription />
    </div>
  );
};

export default ServicePage;
