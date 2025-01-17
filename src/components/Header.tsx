'use client';

import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import NavDropdownMenu from '@/components/NavDropdownMenu';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="flex items-center justify-between bg-white w-full max-w-screen-2xl mx-auto px-4 py-6 sm:px-6 lg:px-12 sticky
       top-0 z-50"
    >
      <Link href="/" className="text-3xl font-normal text-custom-purple">
        Synnestra
      </Link>
      <div className="hidden lg:flex items-center space-x-8">
        <nav>
          <ul className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subitems ? (
                  <NavDropdownMenu
                    triggerComponent={
                      <span
                        className={
                          pathname === item.href
                            ? 'text-custom-purple text-base font-medium'
                            : 'text-custom-black-light hover:text-custom-purple text-base font-medium'
                        }
                      >
                        {item.name}
                      </span>
                    }
                  >
                    <div className="w-screen bg-white shadow-lg">
                      <div className="container mx-auto px-4 py-6">
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-6 justify-between items-center">
                          {item.subitems.map((service) => (
                            <div className="md:col-span-2" key={service.name}>
                              <h3 className="font-bold text-lg mb-3 text-custom-black-light">{service.name}</h3>
                              <ul className="space-y-2">
                                {service.items.map((item) => (
                                  <li key={item.href}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-custom-purple hover:underline"
                                      >
                                        {item.name}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavDropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-2 text-base hover:text-custom-purple transition-colors',
                      pathname === item.href ? 'text-custom-purple' : 'text-black',
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Button className="bg-custom-purple hover:bg-custom-purple text-white" asChild>
          <Link href="/contact-us">Contact us</Link>
        </Button>
      </div>
      <MobileNav />
    </header>
  );
}
