import Image from "next/image"
import Link from "next/link";
import Tablet from "@/public/images/laptop2.png";
import { Button } from "@/components/ui/button";

export default function Cta2() {
  return (
    <section className="flex flex-col md:flex-row items-center w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-12" data-aos="fade-down">
        <div className="text-white">
          <Image
            src={Tablet}
            alt="CTA Image"
            width={500}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-left p-12" data-aos="fade-down">
        <p className="text-4xl font-semibold py-4 lg:w-[80%] md:text-5xl">Elegant, industry standard websites</p>
        <span className="text-gray-700 text-lg text-align-left md:text-xl lg:w-[80%]">
          We build our websites using cutting edge technologies and custom code, so that you stand out from your competitors and your customers know you mean business.
        </span>
        <Link href="/#contact" className="my-12">
          <Button className="py-6 hover:cursor-pointer text-white font-semibold md:text-base">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}

