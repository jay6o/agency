import Image from "next/image";
import Link from "next/link";
import ppc from "@/public/images/ppc.png";

export default function Cta() {
  return (
    <section className="bg-transparent" data-aos="fade-up">
      <div className="mx-auto max-w-7xl py-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-700 px-6 pt-16 shadow-sm md:shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.9)", // Adding custom shadow
          }}>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="gray" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white">
              Be there when customers need you most
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Customers are always looking for you, we help them reach you by making you visible online. From organic traffic, to paid ads on top networks like Google, Meta, and X.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/#contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-white/90"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-26 flex items-center justify-center gap-x-6 lg:flex-auto" data-aos="fade-down" data-aos-delay={300}>
            <Image
              className="rounded-md"
              src={ppc}
              alt="PPC Campaigns"
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

