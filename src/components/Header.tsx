'use client';

import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between bg-white w-full max-w-screen-2xl mx-auto px-4 py-4 sm:px-6 lg:px-12 sticky
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
                  <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
                    <DropdownMenuTrigger className="flex gap-2 items-center">
                      <span
                        className={
                          pathname === item.href
                            ? 'text-custom-purple text-base font-medium'
                            : 'text-custom-black hover:text-custom-purple text-base font-medium'
                        }
                      >
                        {item.name}
                      </span>
                      <ChevronDownIcon
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0 mt-3">
                      <div
                        className="w-screen shadow-lg"
                        style={{
                          background: 'linear-gradient(180deg, rgba(231,232,253,1) 0%, rgba(255,255,255,1) 100%)',
                          backgroundColor: 'rgb(231,232,253)',
                        }}
                      >
                        <div className="container mx-auto px-4 py-6">
                          <div className="grid gap-10 grid-cols-1 md:grid-cols-6 justify-between">
                            {item.subitems.map((service) => (
                              <DropdownMenuGroup className="md:col-span-2" key={service.name}>
                                <DropdownMenuLabel className="font-bold text-lg mb-3 text-custom-black-light">
                                  {service.name}
                                </DropdownMenuLabel>
                                <ul className="space-y-2">
                                  {service.items.map((item) => (
                                    <DropdownMenuItem key={item.href} className="focus:bg-inherit">
                                      <Link
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-custom-purple hover:underline"
                                        onClick={() => setOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </ul>
                              </DropdownMenuGroup>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
