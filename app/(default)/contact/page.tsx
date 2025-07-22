import TypeForm from "@/components/type-form"

export const metadata = {
  title: "Attila Digital - Contact Us",
  description: "Increase Revenue from your business through Digital Marketing. High-quality Web Development, SEO, and paid ads to scale your business.",
  openGraph: {
    title: "Attila Digital - Contact Us",
    description: "High-quality Web Development, SEO, and paid ads to scale your business.",
    url: "https://agency-itde.vercel.app/contact",
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

export default function ContactPage() {
  return (
    <TypeForm/>
  )
}
