export const metadata = {
  title: "Attila Digital - Digital Marketing Agency",
  description: "Increase Revenue from your business through Digital Marketing. High-quality Web Development, SEO, and paid ads to scale your business.",
  openGraph: {
    title: "Attila Digital - Digital Marketing Agency",
    description: "High-quality Web Development, SEO, and paid ads to scale your business.",
    url: "https://agency-itde.vercel.app/",
    siteName: "Attila Digital",
    images: [
      {
        url: "https://agency-itde.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Attila Digital - Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import AOSProvider from "@/components/aosprovider";
import Hero from "@/components/hero-home";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Cta from "@/components/cta";
import Cta2 from "@/components/cta2";
import TypeForm from "@/components/type-form"; // takes up whole screen

export default function Home() {
  return (
    <>
      <AOSProvider />
      <Hero />
      <Cta2 />
      <Services />
      <Cta />
      <HowItWorks />
    </>
  );
};
