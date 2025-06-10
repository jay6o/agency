export const metadata = {
  title: "Increase Revenue through Digital Marketing - Brand",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Cta from "@/components/cta";
import Cta2 from "@/components/cta2";
import CalendlyForm from "@/components/calendly-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <Services />
      <Cta2 />
      <HowItWorks />
      <CalendlyForm />
    </>
  );
}
