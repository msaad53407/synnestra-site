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
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto fixed left-1/2 transform -translate-x-1/2 top-0 z-50">
      <span className="h-4 bg-white w-full absolute top-0"></span>
      <Link
        href="/"
        className="text-3xl font-normal text-custom-purple bg-white my-0 px-4 py-4 sm:px-6 rounded-ee-3xl relative"
      >
        <span className="shape-top-left h-10 w-10 bg-transparent absolute -right-10 top-[14px] rounded-ss-2xl z-[99]"></span>
        <span className="shape-top-left h-10 w-10 bg-transparent absolute top-[58px] left-0 rounded-ss-2xl z-[99] mt-2.5"></span>
        Synnestra
      </Link>
      <div className="hidden lg:flex items-center space-x-8 bg-white px-4 py-4 sm:px-6 rounded-es-3xl relative">
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
        <span className="shape-top-right h-10 w-10 bg-transparent absolute -left-[72px] mr-2.5 top-[16px] rounded-se-2xl z-[99]"></span>
        <span className="shape-top-right h-10 w-10 bg-transparent absolute top-[62px] right-0 rounded-se-2xl mt-2.5 z-[99]"></span>
      </div>
      <MobileNav />
    </header>
  );
}
