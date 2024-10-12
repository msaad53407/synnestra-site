'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ServicesDropdown from './ServicesDropdown';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between bg-white w-full max-w-screen-2xl mx-auto px-4 py-6 sm:px-6 lg:px-12">
      <Link href="/" className="text-3xl font-normal text-custom-purple">
        Synnestra
      </Link>
      <div className="flex items-center space-x-8">
        <nav className='md:block hidden'>
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
              <ServicesDropdown
                triggerComponent={
                  <Link
                    href="/services"
                    className={
                      pathname === '/services'
                        ? 'text-custom-purple'
                        : 'text-custom-black-light hover:text-custom-purple'
                    }
                  >
                    Services
                  </Link>
                }
              />
            </li>
            <li>
              <Link
                href="/industries"
                className={
                  pathname === '/industries' ? 'text-custom-purple' : 'text-custom-black-light hover:text-custom-purple'
                }
              >
                Industries
              </Link>
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
        <Button className="bg-custom-purple hover:bg-custom-purple-light text-white">
          Contact us
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
