import Link from 'next/link';
import { RefreshCw, Shield, Cog, Gauge } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type Props = {
  triggerComponent: React.ReactNode;
};

export default function ServicesDropdown({ triggerComponent }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{triggerComponent}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-screen bg-white shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-7 justify-between items-center">
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-lg mb-3 text-custom-black-light">Services</h3>
                    <ul className="space-y-2">
                      {[
                        'Managed Services',
                        'IT Consulting & Advisory',
                        'Cyber Security',
                        'Web Development',
                        'Mobile Development',
                        'Cloud Services',
                      ].map((service) => (
                        <li key={service}>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-sm text-gray-600 hover:text-custom-purple hover:underline">
                              {service}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
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
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-lg mb-3 text-custom-black-light">Industry Focus</h3>
                    <ul className="space-y-2">
                      {[
                        'Industry Manufacturing',
                        'Transportation Logistics',
                        'Healthcare',
                        'Web Development',
                        'Transportation Logistics',
                        'Industry Manufacturing',
                      ].map((industry) => (
                        <li key={industry}>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-sm text-gray-600 hover:text-custom-purple hover:underline">
                              {industry}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="text-sm text-custom-purple font-medium mt-3 inline-block hover:underline"
                      >
                        View All
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
