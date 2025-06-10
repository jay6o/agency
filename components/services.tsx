import { GlobeAltIcon, BanknotesIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [


  {
    name: 'Website Development',
    description:
      'State of the art website development to help you establish an online presence.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Pay-per-click Advertising',
    description:
      'Targeted ads that reach potential customers in your area.',
    icon: BanknotesIcon,
  },
  {
    name: 'Search Engine Optimization',
    description:
      'Appear when your customers search for you. We help you rank higher on search engines.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Brand Image',
    description:
      'Develop an identity that your customers can trust and relate to, through social media and other platforms.',
    icon: UserIcon,
  },
]

export default function Services() {
  return (
    <section className="bg-transparent py-24 sm:py-32" id="services" data-aos="fade-down" data-aos-offset="0" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Put yourself out there 😉
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 lg:text-xl">
            We help you establish a brand image that outward facing customers can trust, and are willing to partner with.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 md:text-lg lg:text-xl">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 lg:text-lg">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
