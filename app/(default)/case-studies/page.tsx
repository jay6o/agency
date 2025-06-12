import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PortfolioPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Bloom Cosmetics",
      category: "E-commerce",
      description: "Increased online sales by 150% through targeted social media campaigns and website optimization.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["150% sales increase", "200% social engagement", "45% lower CPA"],
    },
    {
      id: 2,
      title: "TechNova Solutions",
      category: "B2B SaaS",
      description:
        "Developed a comprehensive content strategy that generated 300+ qualified B2B leads within 3 months.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["300+ qualified leads", "45% conversion rate", "28% increase in organic traffic"],
    },
    {
      id: 3,
      title: "Green Earth Foods",
      category: "Food & Beverage",
      description: "Rebranded their digital presence and launched campaigns that increased brand awareness by 78%.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["78% brand awareness increase", "120% website traffic growth", "35% higher engagement"],
    },
    {
      id: 4,
      title: "Urban Fitness",
      category: "Health & Wellness",
      description:
        "Created a membership acquisition strategy that reduced cost per lead by 40% while increasing sign-ups.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["40% lower CPL", "85% membership growth", "65% retention improvement"],
    },
    {
      id: 5,
      title: "Skyline Properties",
      category: "Real Estate",
      description:
        "Implemented targeted PPC and SEO strategies that doubled qualified property inquiries within 6 months.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["100% more inquiries", "32% higher conversion", "25% reduced ad spend"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="my-24  text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Success Stories</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className={`transition-all duration-300 hover:-translate-y-2`}
          >
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={`${caseStudy.title} website`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                  <Badge variant="outline">{caseStudy.category}</Badge>
                </div>
                <p className="mb-4 text-muted-foreground">{caseStudy.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="mr-2 text-emerald-500">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-4">
                <Button variant="outline" className="w-full">
                  View Full Case Study
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
