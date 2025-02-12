'use client';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/lib/constants';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden bg-white w-fit h-fit relative rounded-none rounded-bl-3xl px-4 py-4 sm:px-6 hover:bg-white"
        >
          <Menu className="h-6 w-6 bg-white" />
          <span className="sr-only">Open menu</span>
          <span className="shape-top-right h-10 w-10 bg-transparent absolute -left-[39px] mr-2.5 top-[10px] rounded-se-2xl z-[99]"></span>
          <span className="shape-top-right h-10 w-10 bg-transparent absolute top-[46px] right-0 rounded-se-2xl mt-2.5 z-[99]"></span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="text-3xl font-normal text-custom-purple">Synnestra</SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subitems ? (
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg hover:text-custom-purple transition-colors">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="my-2 space-y-6">
                        {item.subitems.map((subitem) => (
                          <li key={subitem.name}>
                            <ul>
                              <h4 className="text-2xl font-semibold">{subitem.name}</h4>
                              {subitem.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block py-1 text-base hover:text-custom-purple transition-colors"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-lg hover:text-custom-purple transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">
          <Button className="w-full bg-custom-purple hover:bg-custom-purple text-white">
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              Contact us
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
