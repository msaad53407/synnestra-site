import AnimatedSection from '@/components/AnimatedSection';
import { Crosshair, LucideCodeSquare, TrendingUp } from 'lucide-react';

export default function CompanyImpact() {
  return (
    <AnimatedSection direction={'up'} className="relative min-h-[700px] w-full px-4 py-6 sm:px-6 lg:px-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mx-4 sm:mx-6 lg:mx-12"
        style={{
          backgroundImage: `url("/impact_section_background.png")`,
        }}
      />
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-custom-purple opacity-70 mx-4 sm:mx-6 lg:mx-12" />

      {/* Content */}
      <div className="relative z-10 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 items-center justify-between">
          <div className="space-y-8">
            <p className="text-sm font-medium uppercase tracking-wider">The value we deliver</p>
            <h2 className="mx-auto max-w-4xl text-4xl font-medium  sm:text-5xl md:text-6xl">
              Assisting Synnestra in transforming and redefining the IT industry
            </h2>
          </div>

          {/* Stats Grid with Timeline Styling */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3 w-full">
            <div className="flex flex-col items-center space-y-4">
              <Crosshair className='size-12'/>
              <p className="text-sm max-w-[200px] mx-auto">Tailored strategies that scale seamlessly</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <TrendingUp className='size-12'/>
              <p className="text-sm max-w-[200px] mx-auto">Innovation that keeps you ahead of the curve</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <LucideCodeSquare className='size-12'/>
              <p className="text-sm max-w-[200px] mx-auto">Transformative solutions, not just prototypes</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
