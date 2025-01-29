import AnimatedCounter from '../AnimatedCounter';
import AnimatedSection from '@/components/AnimatedSection';

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
            <p className="text-sm font-medium uppercase tracking-wider">Our Impact</p>
            <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-relaxed sm:text-5xl md:text-6xl">
              Helping the Synnestra Industry redefine itself
            </h2>
          </div>

          {/* Stats Grid with Timeline Styling */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3 w-full">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
                  <AnimatedCounter from={0} to={10} duration={3} />
                </span>
                <span className="text-sm font-bold tracking-wider mt-2">PARTNERSHIPS</span>
              </div>
              <p className="text-sm max-w-[200px] mx-auto">Strategic Partnership with leading Synnestra Operator</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
                  <AnimatedCounter from={0} to={39} duration={3} />%
                </span>
                <span className="text-sm font-bold tracking-wider mt-2">INCREASE</span>
              </div>
              <p className="text-sm max-w-[200px] mx-auto">
                Increase in Customer Loyalty & Retention for a leading Synnestra
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
                  <AnimatedCounter from={0} to={30} duration={3} />+
                </span>
                <span className="text-sm font-bold tracking-wider mt-2">CHANNELS</span>
              </div>
              <p className="text-sm max-w-[200px] mx-auto">
                Channels Unification enabled for a leading Synnestra Operator
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
