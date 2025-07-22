const withMT = require("@material-tailwind/react/utils/withMT")
import "./css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Attila Digital - Digital Marketing Agency",
  description: "Increase Revenue from your business through Digital Marketing. High-quality Web Development, SEO, and paid ads to scale your business.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Attila Digital - Digital Marketing Agency",
    description: "Increase Revenue from your business through Digital Marketing. High-quality Web Development, SEO, and paid ads to scale your business.",
    url: "https://agency-itde.vercel.app",
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
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
