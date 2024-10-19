import Banner from '@/components/Banner';
import SplitColorText from '@/components/SplitColorText';
import { Button } from '@/components/ui/button';
import { servicesProvided } from '@/lib/constants';
import { transformServiceSlug } from '@/lib/utils';
import { ArrowUpRight, Banknote, Lightbulb, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    service: string;
  };
};

const ServicePage = ({ params: { service } }: Props) => {
  if (!servicesProvided.includes(service)) notFound();

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

      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 space-y-8">
        <span className="inline-block bg-custom-purple text-white text-sm font-medium py-2 px-4 rounded-full mb-2">
          Why Synnestra
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="mb-8">
            <h2 className="text-4xl font-medium mb-4 leading-relaxed">
              Benefits of {transformServiceSlug(service)} provided by Synnestra
            </h2>
            <p className="text-gray-600 max-w-2xl">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Quiet quitting', icon: '/placeholder.svg' },
              { title: 'Training disparity', icon: '/placeholder.svg' },
              { title: 'Management failure', icon: '/placeholder.svg' },
              { title: 'Intensive impact', icon: '/placeholder.svg' },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-start">
                <Image src={benefit.icon} alt={benefit.title} width={40} height={40} className="mb-4" />
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

      {/* Digital Innovation Section */}
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
      </section>

      {/* Managed IT Services Section */}
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-x-20 gap-y-8">
        <div className="md:w-2/3">
          <h2 className="text-4xl font-medium mb-4 leading-relaxed">
            Our {transformServiceSlug(service)} let you concentrate on what matters
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
        <div className="md:w-1/3">
          <Image
            src="/managed_services_section.png"
            alt="Managed IT Services"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
