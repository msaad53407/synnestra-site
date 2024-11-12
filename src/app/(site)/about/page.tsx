import AnimatedCounter from '@/components/AnimatedCounter';
import Banner from '@/components/Banner';
import TechnologyCard from '@/components/cards/TechnologyCard';
import NewsletterSubscription from '@/components/sections/EmailNewsletter';
import ReviewSection from '@/components/sections/ReviewSection';
import { Timeline } from '@/components/ui/timeline';
import { technologyCards, timelineItems } from '@/lib/constants';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const AboutPage = () => {
  return (
    <div className="space-y-20">
      <div className="relative w-full mb-32 space-y-5">
        <Banner image="/about_banner.png" className="bottom-10 left-4 md:bottom-1/3 md:w-1/2">
          <AnimatedSection direction={'left'} className="flex flex-col gap-4">
            <h1 className="text-4xl font-medium text-white leading-relaxed">
              Explore the world of Synnestra Technologies.
            </h1>
            <p className="text-white font-normal">
              Synnestra Technologies is a leading provider of cutting-edge technology solutions that empower the
              world&apos;s
              top companies to achieve their goals and stay ahead of the competition.
            </p>
          </AnimatedSection>
        </Banner>
        <section
          className="md:absolute left-1/2 transform w-[95%] mx-auto lg:w-max border border-gray-300 md:-translate-x-1/2 -bottom-32 lg:-bottom-20 p-10 flex flex-col gap-5 items-center bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">The World&apos;s leading technologies are powered by Synnestra.</h3>
          <div className="flex gap-5 items-center justify-center w-full flex-wrap">
            {technologyCards.map((techCard) => (
              <TechnologyCard technology={techCard} key={techCard.name} />
            ))}
          </div>
        </section>
      </div>
      <AnimatedSection direction={'up'}
                       className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col gap-8 items-center max-w-screen-lg mx-auto">
        <div className="bg-custom-purple w-fit px-6 py-4 rounded-full flex items-center justify-center">
          <h4 className="text-xl text-white font-medium ">Our History</h4>
        </div>
        <h3 className="text-3xl font-medium text-center leading-relaxed">
          Proudly serving the <span className="text-custom-purple">world&apos;s top companies</span> with smart{' '}
          <span className="text-custom-purple">technology solutions</span> for over four decades
        </h3>
        <p className="text-sm text-gray-400 text-center">
          Synnestra&apos;s legacy of innovation and unwavering dedication to client success has earned us the trust and
          loyalty of the world&apos;s leading organizations. Through our deep domain expertise, advanced technology
          capabilities, and exceptional service delivery, we have consistently helped our clients navigate complex
          challenges, seize new opportunities, and drive sustainable growth.
        </p>
        <p className="text-sm text-gray-400 text-center">
          The proposed content highlights Synnestra&apos;s unique positioning as a leading provider of cutting-edge
          technology solutions, its extensive experience and proven track record of serving top global companies, and
          its commitment to innovation, quality, and customer satisfaction. This information is tailored to be relevant,
          informative, and appropriate for the context of the page.
        </p>
      </AnimatedSection>

      <section className="w-full px-4 py-6 sm:px-6 lg:px-12">
        <Timeline data={timelineItems} />
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-12 flex flex-col gap-8 items-center">
        <div className="text-center mb-12 flex flex-col items-center gap-5">
          <div className="bg-custom-purple w-fit px-4 py-2 rounded-full flex items-center justify-center">
            <h4 className="text-xl text-white font-medium ">Track Record</h4>
          </div>
          <h3 className="text-3xl">Proven track record</h3>
          <p className="text-gray-600 text-sm">
            Synnestra&apos;s track record of success is a testament to our commitment to excellence, innovation, and
            client satisfaction.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Row 1 */}
          <AnimatedSection direction={'up'} className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <div className="bg-white  flex-1 w-full">
              <h3 className="font-semibold mb-4 text-2xl">Focused</h3>
              <div className="min-h-60 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl border border-black">
                <div className="md:border-r md:border-r-black max-md:border-b max-md:border-b-black">
                  <h4 className="font-semibold mb-2">Retails</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc p-1">
                    <li>Rent-to-Own</li>
                    <li>Subscription</li>
                    <li>Service Contract</li>
                    <li>Value-added Services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whole Sale</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc p-1">
                    <li>Wholesale</li>
                    <li>Floor Plan</li>
                    <li>Capital loan</li>
                    <li>Cash advance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white  flex-1 w-full">
              <h3 className="font-semibold mb-4 text-2xl">Product & Services</h3>
              <div
                className="min-h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-xl border border-black">
                <div className="md:border-r md:border-r-black max-md:border-b max-md:border-b-black">
                  <h4 className="font-semibold mb-2">Mobility</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc p-1">
                    <li>Subscription</li>
                    <li>Rental</li>
                    <li>Car-Sharing</li>
                  </ul>
                </div>
                <div className="md:border-r md:border-r-black max-md:border-b max-md:border-b-black">
                  <h4 className="font-semibold mb-2">Api First Ecosystem</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc p-1">
                    <li>Origination</li>
                    <li>Servicing</li>
                    <li>Dealer management</li>
                    <li>Plug & Play</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc p-1">
                    <li>Cloud Services</li>
                    <li>Information Tech</li>
                    <li>Custom Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white  flex-1 w-full">
              <h3 className="font-semibold mb-4 text-2xl">Customers</h3>
              <div className="min-h-60 grid grid-cols-3 place-items-center gap-4 p-4 rounded-xl border border-black">
                <div>
                  <h4 className="font-medium mb-2">Auto</h4>
                  <div className="flex space-x-2">
                    <Image src="/icons/car.svg" alt="Auto icon" width={24} height={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Equipment</h4>
                  <Image src="/icons/equipment.svg" alt="Equipment icon" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Bank</h4>
                  <Image src="/icons/mingcute_bank-fill.svg" alt="Bank icon" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Captive</h4>
                  <div className="flex space-x-2">
                    <Image src="/icons/car.svg" alt="Car icon" width={24} height={24} />
                    <Image src="/icons/mingcute_bank-fill.svg" alt="Bank icon" width={24} height={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Wholesale</h4>
                  <div className="flex space-x-2">
                    <Image src="/icons/car.svg" alt="Car Icon" width={24} height={24} />
                    <Image src="/icons/car.svg" alt="Car Icon" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Row 2 */}
          <AnimatedSection direction={'up'} className="min-h-60 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg w-full md:col-span-2">
              <h3 className="font-semibold mb-4 text-2xl">Proven Market Experience and Footprint</h3>
              <div className="space-y-4 min-h-60 grid grid-cols-1 md:grid-cols-3 p-4 rounded-xl border border-black">
                <div
                  className="flex flex-col justify-center md:border-r md:border-r-black max-md:border-b max-md:border-b-black px-4">
                  <h4 className="font-medium text-2xl">Americas</h4>
                  <p className="text-2xl font-bold">
                    <AnimatedCounter from={0} to={40} />+
                    <span className="text-sm font-normal text-gray-600 ml-1">years</span>
                  </p>
                  <p className="text-sm text-gray-600">Austin | Los Angeles</p>
                </div>
                <div
                  className="flex flex-col justify-center md:border-r md:border-r-black max-md:border-b max-md:border-b-black px-4">
                  <h4 className="font-medium text-2xl">Europe & UK</h4>
                  <p className="text-2xl font-bold">
                    <AnimatedCounter from={0} to={30} />+
                    <span className="text-sm font-normal text-gray-600 ml-1">years</span>
                  </p>
                  <p className="text-sm text-gray-600">Horsham | London</p>
                </div>
                <div className="flex flex-col justify-center px-4">
                  <h4 className="font-medium text-2xl">APAC</h4>
                  <p className="text-2xl font-bold">
                    <AnimatedCounter from={0} to={25} />+
                    <span className="text-sm font-normal text-gray-600 ml-1">years</span>
                  </p>
                  <p className="text-sm text-gray-600">Beijing | Jakarta | Tianjin | Sydney | Shanghai</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg w-full md:col-span-1">
              <h3 className="font-semibold mb-4 text-2xl">Accreditations</h3>
              <div className="min-h-60 grid grid-cols-3 gap-4 border border-black rounded-xl p-4 place-items-center">
                {[
                  '/icons/iso_9001.svg',
                  '/icons/iso_27001.svg',
                  '/icons/iso.svg',
                  '/icons/cmmi_dev.svg',
                  '/icons/iso_27001.svg',
                ].map((imageSrc, index) => (
                  <Image key={index} src={imageSrc} alt={`Accreditation ${index + 1}`} width={120} height={120} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Row 3 */}
          <AnimatedSection direction={'up'} className="space-y-4">
            <h3 className="font-semibold text-2xl">Trusted</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-black text-center">
                <p className="text-2xl font-bold mb-2">
                  $
                  <AnimatedCounter from={0} to={500} />
                  B+
                </p>
                <p className="text-sm text-gray-600">Assets Managed Globally</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-black text-center">
                <p className="text-2xl font-bold mb-2">
                  <AnimatedCounter from={0} to={300} />+
                </p>
                <p className="text-sm text-gray-600">Successful Implementations</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-black text-center">
                <p className="text-2xl font-bold mb-2">
                  <AnimatedCounter from={0} to={200} />+
                </p>
                <p className="text-sm text-gray-600">Global Clients</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-black text-center">
                <p className="text-2xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} />+
                </p>
                <p className="text-sm text-gray-600">Automative Projects</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="bg-white space-y-20 px-4 py-6 sm:px-6 lg:px-12">
        <div className="max-w-screen-lg mx-auto space-y-8">
          <h3 className="text-3xl font-bold text-center">Domain Expertise</h3>
          <p className="text-sm text-gray-400 text-center">
            Synnestra Technologies is a trusted partner with deep domain expertise across a wide range of industries and
            technology landscapes. For over four decades, we have been at the forefront of innovation, delivering
            cutting-edge solutions that empower our clients to stay ahead of the curve.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <AnimatedSection direction={"left"} className="col-span-1 md:col-span-4 bg-custom-purple relative p-6 rounded-xl gap-4">
              <h4 className="text-3xl font-medium leading-relaxed text-white">Committed to Quality Excellence</h4>
              <p className="text-sm font-medium text-white w-[80%]">
                At the heart of Synnestra&apos;s ethos lies an unwavering commitment to quality and excellence. We have
                built
                a reputation for delivering exceptional results by adhering to the highest standards of engineering,
                project management, and customer service. <br />
                Our quality assurance processes are rigorous and multi-layered, ensuring that every solution we provide
                meets the strictest criteria for performance, reliability, and security. We invest heavily in research
                and development to stay at the forefront of technological advancements, continuously enhancing our
                capabilities to better serve our clients.
              </p>
              <Image
                src="/icons/grommet-icons_services.svg"
                alt="services"
                width={120}
                height={120}
                className="absolute bottom-2 right-2"
              />
            </AnimatedSection>
            <AnimatedSection direction={"left"} className="col-span-1 md:col-span-2 bg-gray-100 relative p-6 rounded-xl gap-4">
              <h4 className="text-3xl font-medium leading-relaxed">Committed to Quality Excellence</h4>
              <p className="text-sm font-medium w-1/2">
                Synnestra&apos;s clients can count on consistently high levels of service and support, backed by robust
                service-level agreements and a customer-centric approach. Our teams are dedicated to proactively
                identifying and addressing any potential issues, delivering prompt, effective resolutions that minimize
                downtime and disruption.
              </p>
              <Image
                src="/icons/Syn..svg"
                alt="synnestra"
                width={200}
                height={200}
                className="absolute bottom-2 right-2"
              />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <AnimatedSection direction={"right"} className="col-span-1 md:col-span-2 bg-gray-100 relative p-6 rounded-xl gap-4">
              <h4 className="text-3xl font-medium leading-relaxed">Ensured Service Levels</h4>
              <p className="text-sm font-medium w-1/2">
                Synnestra&apos;s clients can count on consistently high levels of service and support, backed by robust
                service-level agreements and a customer-centric approach. Our teams are dedicated to proactively
                identifying and addressing any potential issues, delivering prompt, effective resolutions that minimize
                downtime and disruption.
              </p>
              <Image
                src="/icons/material-symbols_rewarded-ads-sharp.svg"
                alt="synnestra"
                width={150}
                height={150}
                className="absolute bottom-2 right-2"
              />
            </AnimatedSection>
            <AnimatedSection direction={"right"} className="col-span-1 md:col-span-4 bg-custom-purple relative p-6 rounded-xl gap-4">
              <h4 className="text-3xl font-medium leading-relaxed text-white">Harnessing the Power of AI</h4>
              <p className="text-sm font-medium text-white w-[80%]">
                Synnestra&apos;s solutions leverage the transformative power of artificial intelligence to unlock new
                frontiers of efficiency, innovation, and competitive advantage for our clients. Our AI-driven
                capabilities span a diverse range of applications, from intelligent automation and predictive analytics
                to natural language processing and computer vision. <br />
                By embedding AI and machine learning at the core of our offerings, we empower our clients to make more
                informed decisions, optimize critical processes, and unleash new possibilities for growth. Our team of
                AI experts works closely with clients to identify high-impact use cases and implement robust, scalable
                AI-powered solutions that deliver tangible, long-lasting benefits.
              </p>
              <Image
                src="/icons/eos-icons_ai.svg"
                alt="services"
                width={120}
                height={120}
                className="absolute bottom-2 right-2"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <ReviewSection />
      <NewsletterSubscription />
    </div>
  );
};

export default AboutPage;
