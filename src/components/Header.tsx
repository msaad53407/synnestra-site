'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ServicesDropdown from './ServicesDropdown';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-4 py-6 flex items-center justify-between bg-white">
      <Link href="/" className="text-3xl font-normal text-custom-purple">
        Synnestra
      </Link>
      <div className="flex items-center space-x-8">
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
                href="/project"
                className={
                  pathname === '/project' ? 'text-custom-purple' : 'text-custom-black-light hover:text-custom-purple'
                }
              >
                Project
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
