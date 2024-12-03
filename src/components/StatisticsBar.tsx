import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';

export default function StatisticsBar() {
  return (
    <div className="bg-white px-4 py-6 sm:px-6 lg:px-12">
      <div className="flex flex-wrap gap-4 justify-between items-center -mx-4">
        <div className="w-full md:w-auto px-4 mb-4 md:mb-0">
          <div className="flex items-center gap-5">
            <div className="mr-3 space-y-3">
              <p className="text-xs font-semibold">REVIEWED ON</p>
              <Image
                src="/company_logos/clutch-logo.svg"
                alt="clutch-logo"
                width={100}
                height={100}
                className="w-20 h-auto"
              />
            </div>
            <div className="space-y-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">31 REVIEWS</p>
            </div>
          </div>
        </div>
        <StatItem value={20} unit="Years" description="Proven Track Record" />
        <StatItem value={98} unit="%" description="Customer Satisfaction" />
        <StatItem value={1500} unit="Projects" description="We Have Completed" />
        <StatItem value={3} unit="Mins" description="Average Answer Time" />
      </div>
    </div>
  );
}

export function StatItem({ value, unit, description }: { value: number; unit: string; description: string }) {
  return (
    <div className="w-full sm:w-1/2 md:w-auto px-4 mb-4 md:mb-0 flex items-center">
      <div className="hidden md:block w-px h-12 bg-gray-300 mr-4"></div>
      <div>
        <p className="text-2xl font-bold">
          <AnimatedCounter from={0} to={value} duration={3} /> <span className="text-gray-600 text-base">{unit}</span>
        </p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
