import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageIllustration from "@/components/page-illustration";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";

export default function HeroHome() {
  return (
    <section className="relative h-[100vh] md:h-auto">
      <PageIllustration />
      <div className="mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%] px-4 sm:px-6 pt-[4.4rem] lg:pt-[3rem]">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 md:text-center md:pb-16">
            <h2
              style={{ opacity: 0 }}
              className="mb-6 border-slate-300/80 text-5xl font-bold md:text-6xl animate-zoom-out animation-delay-300 no-aos-transition"
            >
              Grow your business through tech
            </h2>
            <div className="mx-auto max-w-2xl">
              <h1
                style={{ opacity: 0 }}
                className="mb-8 text-lg text-gray-700 animate-zoom-out animation-delay-600 no-aos-transition"
              >
              We help local businesses generate more revenue through <span className="font-semibold text-black">high-quality websites</span>, <span className="font-semibold text-black">SEO</span>, and <span className="font-semibold text-black">paid ads</span>.
              </h1>
              <div className="relative before:absolute before:inset-0">
                <div
                  className="mx-auto max-w-xs sm:flex-col sm:max-w-none sm:justify-center sm:items-center animate-zoom-out animation-delay-900 no-aos-transition"
                >
                  <Link
                    href="/contact"
                  >
                    <Button variant={"default"} className="w-[100%] md:w-[36%] py-6 text-lg font-semibold text-white transition-colors duration-300 hover:cursor-pointer group bg-black shadow-2xl rounded-3xl active:bg-black/80 mt-[1rem]">
                      Get Started <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden absolute bottom-[15vh] left-[49%] -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDownIcon className="w-8 h-8" />
      </div>
    </section>
  );
}
