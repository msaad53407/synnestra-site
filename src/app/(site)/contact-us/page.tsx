import AnimatedSection from '@/components/AnimatedSection';
import OfficeLocations from '@/components/sections/OfficesMaps';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import '../../../../node_modules/flag-icons/css/flag-icons.min.css';
// import { countriesWithPhoneNumberCodes } from '@/lib/constants';

import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default async function ContactPage() {
  // const countries = await countriesWithPhoneNumberCodes();

  return (
    <div className="min-h-screen space-y-14 bg-background pb-8">
      {/* Hero Section */}
      <section className="relative px-4 py-6 sm:px-6 lg:px-12 pt-24">
        <AnimatedSection direction="up" className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-purple">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Have a question or want to discuss a project? We&apos;re here to help. Contact our team for expert
            assistance.
          </p>
        </AnimatedSection>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)] pointer-events-none" />
      </section>

      {/* Contact Information */}
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedSection direction={'up'}>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-[350px] justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-center text-gray-500">
                  Mon-Fri from 9am to 6pm <br /> (GMT+5 - Pakistan Standard Time)
                </p>
                <div className="w-fit space-y-4">
                  <a href="https://wa.me/+17372825335" className="flex gap-3 items-center hover:underline">
                    <span className="fi fi-us"></span>
                    <p className="text-center font-medium">+1 (737) 282-5335</p>
                  </a>
                  <a href="https://wa.me/+4474771176460" className="flex gap-3 items-center hover:underline">
                    <span className="fi fi-gb"></span>
                    <p className="text-center font-medium">+44 7477 176460</p>
                  </a>
                  <a href="https://wa.me/+923080480489" className="flex gap-3 items-center hover:underline">
                    <span className="fi fi-pk"></span>
                    <p className="text-center font-medium">+92 30 804 804 89</p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection direction={'up'}>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-[350px] justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-center text-gray-500">We&apos;ll respond within 24 hours</p>
                <a href="mailto:contact@synnestra.com" className="text-center font-medium hover:underline">
                  contact@synnestra.com
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection direction={'up'} className="md:col-span-2 lg:col-span-1">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-[350px] justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Office</h3>
                <p className="text-center text-gray-500">Visit us at our headquarters</p>
                <div className="w-fit space-y-4">
                  <div className="flex gap-3">
                    <span className="fi fi-us" style={{ width: 28, height: 28 }}></span>
                    <a
                      href="https://maps.app.goo.gl/oV1HUaMNmiq4RnpX6"
                      className="text-center font-medium hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      5900 Balcones Dr, Austin, TX 78731, USA
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="fi fi-gb" style={{ width: 28, height: 28 }}></span>
                    <a
                      href="https://maps.app.goo.gl/v5ekDhWBYGy54FUz5"
                      className="text-center font-medium hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Office 5965 182-184 High Street North, <br /> East Ham London E6 2JA United Kingdom
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="fi fi-pk" style={{ width: 28, height: 28 }}></span>
                    <a
                      href="https://maps.app.goo.gl/uUYzCryRS4UPyEFz6"
                      className="text-center font-medium hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sector B1, Township Lahore, Pakistan
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <OfficeLocations />
    </div>
  );
}
