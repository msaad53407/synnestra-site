'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Cog, Gauge, RefreshCw, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import NavDropdownMenu from './NavDropdownMenu';
import { industries, servicesProvided } from '@/lib/constants';
import { NavigationMenuLink } from './ui/navigation-menu';
import { transformSlug } from '@/lib/utils';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between bg-white w-full max-w-screen-2xl mx-auto px-4 py-6 sm:px-6 lg:px-12">
      <Link href="/" className="text-3xl font-normal text-custom-purple">
        Synnestra
      </Link>
      <div className="hidden lg:flex items-center space-x-8">
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'text-custom-purple' : 'text-custom-black-light hover:text-custom-purple'}
              >
                Home
              </Link>
            </li>
            <li>
              <NavDropdownMenu
                triggerComponent={
                  <Link
                    href="/services"
                    className={
                      pathname === '/services'
                        ? 'text-custom-purple text-base'
                        : 'text-custom-black-light hover:text-custom-purple text-base'
                    }
                  >
                    Services
                  </Link>
                }
              >
                <div className="w-screen bg-white shadow-lg">
                  <div className="container mx-auto px-4 py-6">
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-7 justify-between items-center">
                      <div className="md:col-span-2">
                        <h3 className="font-bold text-lg mb-3 text-custom-black-light">Services</h3>
                        <ul className="space-y-2">
                          {servicesProvided.map((service) => (
                            <li key={service.slug}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="text-sm text-gray-600 hover:text-custom-purple hover:underline"
                                >
                                  {transformSlug(service.slug)}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-5">
                        <h3 className="font-bold text-lg mb-3 text-custom-black-light">Business Challenges</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: RefreshCw, label: 'Digital Transformation' },
                            { icon: Shield, label: 'Security' },
                            { icon: Cog, label: 'Automation' },
                            { icon: Gauge, label: 'Gaining Efficiency' },
                          ].map(({ icon: Icon, label }) => (
                            <NavigationMenuLink asChild key={label}>
                              <Link
                                href="#"
                                className="flex flex-col justify-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 shadow-md"
                              >
                                <Icon className="mb-2 h-6 w-6 text-custom-purple" />
                                <span className="text-sm text-gray-600">{label}</span>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdownMenu>
            </li>
            <li>
              <NavDropdownMenu
                triggerComponent={
                  <Link
                    href="/industries"
                    className={
                      pathname === '/industries'
                        ? 'text-custom-purple text-base'
                        : 'text-custom-black-light hover:text-custom-purple text-base'
                    }
                  >
                    Industries
                  </Link>
                }
              >
                <div className="w-screen bg-white shadow-lg">
                  <div className="container mx-auto px-4 py-6">
                    <div className="grid gap-20 grid-cols-1 md:grid-cols-7 justify-between">
                      <div className="md:col-span-3">
                        <Image
                          width={1000}
                          height={1000}
                          quality={100}
                          className="mb-3"
                          src="/industries_dropdown_image.png"
                          alt="hero"
                        />
                        <p className="font-medium text-lg mb-3 text-custom-black-light">
                          Embarking on the GenAI odyssey - Transforming the human potential
                        </p>
                        <Link href="#" className="text-custom-purple text-lg font-medium flex items-center">
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                      <div className="md:col-span-4 space-y-5">
                        <h3 className="font-bold text-lg mb-3 text-custom-black-light">Industries</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <ul className="space-y-2">
                            {industries.slice(0, 3).map((industry) => (
                              <li key={industry.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/industries/${industry.slug}`}
                                    className="text-lg text-gray-600 hover:text-custom-purple hover:underline"
                                  >
                                    {transformSlug(industry.slug)}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-2">
                            {industries.slice(3, 5).map((industry) => (
                              <li key={industry.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/industries/${industry.slug}`}
                                    className="text-lg text-gray-600 hover:text-custom-purple hover:underline"
                                  >
                                    {transformSlug(industry.slug)}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdownMenu>
            </li>
            <li>
              <Link
                href="/projects"
                className={
                  pathname === '/projects' ? 'text-custom-purple' : 'text-custom-black-light hover:text-custom-purple'
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === '/about' ? 'text-custom-purple' : 'text-custom-black-light hover:text-custom-purple'
                }
              >
                About Company
              </Link>
            </li>
          </ul>
        </nav>
        <Button className="bg-custom-purple hover:bg-custom-purple text-white">
          Contact us
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <MobileNav />
    </header>
  );
}
