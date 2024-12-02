import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import React, { PropsWithChildren } from 'react';

type Props = {
  triggerComponent: React.ReactNode;
} & PropsWithChildren;

export default function NavDropdownMenu({ triggerComponent, children }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="p-0"
            // onPointerEnter={(e) => e.preventDefault()}
            // onPointerMove={(e) => e.preventDefault()}
            // onPointerLeave={(e) => e.preventDefault()}

          >
            {triggerComponent}
          </NavigationMenuTrigger>
          <NavigationMenuContent>{children}</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
