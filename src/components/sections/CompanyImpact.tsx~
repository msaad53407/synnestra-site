import AnimatedCounter from '../AnimatedCounter';

export default function CompanyImpact() {
  return (
    <section className="relative min-h-[700px] w-full px-4 py-6 sm:px-6 lg:px-12">
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

          {/* Stats Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="mx-auto max-w-xs">
              <p className="text-4xl font-medium sm:text-5xl">
                <AnimatedCounter from={0} to={10} duration={3} />
              </p>
              <p className="mt-3 text-sm">Strategic Partnership with leading Synnestra Operator</p>
            </div>
            <div className="mx-auto max-w-xs">
              <p className="text-4xl font-medium sm:text-5xl">
                <AnimatedCounter from={0} to={39} duration={3} />%
              </p>
              <p className="mt-3 text-sm">Increase in Customer Loyalty & Retention for a leading Synnestra</p>
            </div>
            <div className="mx-auto max-w-xs">
              <p className="text-4xl font-medium sm:text-5xl">
                <AnimatedCounter from={0} to={30} duration={3} />+
              </p>
              <p className="mt-3 text-sm">Channels Unification enabled for a leading Synnestra Operator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
