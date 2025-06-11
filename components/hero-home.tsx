import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h2
              className="mb-6 border-y border-slate-300/80 text-5xl font-bold md:text-6xl"
              /*data-aos="zoom-y-out"
              data-aos-delay={150}
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="0"*/
            >
              Grow your business with <br className="max-lg:hidden" />
              powerful digital solutions
            </h2>
            <div className="mx-auto max-w-3xl">
              <h1
                className="mb-8 text-lg text-gray-700"
                /*data-aos="zoom-y-out"
                data-aos-delay={300}
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="0"*/
              >
              We help local businesses generate more revenue through <span className="font-semibold text-black">high-quality websites</span>, <span className="font-semibold text-black">SEO</span>, and <span className="font-semibold text-black">paid ads</span>.
              </h1>
              <div className="relative before:absolute before:inset-0">
                <div
                  className="mx-auto max-w-xs sm:flex-col sm:max-w-none sm:justify-center sm:items-center"
                  /*data-aos="zoom-y-out"
                  data-aos-delay={450}
                  data-aos-anchor-placement="top-bottom"
                  data-aos-offset="0"*/
                >
                  <Link
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                  <div className="md:hidden absolute bottom-[-4rem] left-[49%] -translate-x-1/2 animate-bounce text-gray-400">
                    <ChevronDownIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
