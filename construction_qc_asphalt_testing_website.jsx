export default function ConstructionQCWebsite() {
  const services = [
    {
      title: 'Asphalt Mix Design Testing',
      description:
        'Comprehensive laboratory testing for hot mix asphalt designs, aggregate gradation, binder content, and performance validation.',
    },
    {
      title: 'Field Density Testing',
      description:
        'On-site compaction verification and density testing to ensure asphalt pavement meets project specifications.',
    },
    {
      title: 'Core Sampling & Analysis',
      description:
        'Professional asphalt core extraction and laboratory evaluation for thickness, density, and quality assurance.',
    },
    {
      title: 'Pavement Inspections',
      description:
        'Detailed inspections for highways, parking lots, roadways, airports, and commercial paving projects.',
    },
    {
      title: 'Quality Control Monitoring',
      description:
        'Full-time QC oversight during paving operations to maintain compliance and project performance standards.',
    },
    {
      title: 'Material Certification',
      description:
        'Verification and documentation of asphalt materials, aggregates, and binders for municipal and DOT projects.',
    },
  ];

  const projects = [
    'DOT Highway Projects',
    'Commercial Parking Lots',
    'Airport Runways',
    'Residential Roadways',
    'Industrial Facilities',
    'Municipal Infrastructure',
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-yellow-400/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                Construction Quality Control Specialists
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                Asphalt Testing & Inspection Services You Can Trust
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
                Delivering reliable construction quality control solutions for asphalt paving projects throughout highways,
                commercial developments, airports, and municipal infrastructure.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-orange-400">
                  Request Inspection
                </button>

                <button className="rounded-2xl border border-gray-700 px-8 py-4 text-lg font-semibold text-gray-200 transition hover:border-orange-400 hover:text-orange-300">
                  View Services
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                <div>
                  <p className="text-3xl font-bold text-orange-400">20+</p>
                  <p className="mt-1 text-sm text-gray-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-400">500+</p>
                  <p className="mt-1 text-sm text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-400">24/7</p>
                  <p className="mt-1 text-sm text-gray-400">Field Support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Certified Asphalt QC</h3>
                    <p className="text-gray-400">Inspection & Laboratory Services</p>
                  </div>
                  <div className="rounded-2xl bg-orange-500/20 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-10 w-10 text-orange-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h3.75c.621 0 1.125.504 1.125 1.125v6.75C9 20.496 8.496 21 7.875 21h-3.75A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125C16.5 3.504 17.004 3 17.625 3h3.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    'DOT Compliance Testing',
                    'Asphalt Core Sampling',
                    'Nuclear Density Testing',
                    'Aggregate & Binder Analysis',
                    'On-Site Pavement Inspection',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-950/60 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                        ✓
                      </div>
                      <p className="font-medium text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Complete Asphalt Quality Control Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We provide dependable testing, inspection, and compliance services for every phase of asphalt construction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-1 hover:border-orange-500/40"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-2xl text-orange-400">
                🛣️
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-gray-400">{service.description}</p>

              <button className="mt-6 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Precision Testing Backed by Industry Expertise
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Our certified technicians and inspectors deliver accurate reporting, fast turnaround times, and reliable
              field support for asphalt paving projects of every size.
            </p>

            <div className="mt-10 space-y-6">
              {[
                'Certified laboratory and field technicians',
                'State and DOT specification compliance',
                'Detailed reporting and documentation',
                'Responsive scheduling and support',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                    ✓
                  </div>
                  <p className="text-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-lg"
              >
                <div className="mb-5 text-4xl">🚧</div>
                <h3 className="text-xl font-bold">{project}</h3>
                <p className="mt-3 text-gray-400">
                  Quality assurance and inspection services tailored to demanding construction standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <div className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-yellow-400/10 p-12 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Get Started Today
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Need Asphalt Testing or Inspection Services?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Contact our construction quality control team to schedule laboratory testing, field inspections, or project support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-400">
              Request a Quote
            </button>

            <button className="rounded-2xl border border-gray-700 px-8 py-4 text-lg font-semibold text-gray-200 transition hover:border-orange-400 hover:text-orange-300">
              Call Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-gray-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h3 className="text-lg font-bold text-white">Construction QC</h3>
            <p className="mt-2 max-w-md">
              Professional asphalt testing, inspection, and quality control services for construction projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-orange-400">
              Services
            </a>
            <a href="#" className="transition hover:text-orange-400">
              Projects
            </a>
            <a href="#" className="transition hover:text-orange-400">
              About
            </a>
            <a href="#" className="transition hover:text-orange-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
