import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import CalendlyForm from "@/components/calendly-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Sales Letter Section */}
        <div className="">
          <h2 className="text-4xl font-bold pb-8">
            Stop going unnoticed.
          </h2>
          <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul>
            <li></li>
          </ul>
        </div>
        {/* Calendly Section */}
        <div className="order-2 lg:order-1 h-fit">
          <Card className="">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Schedule a Consultation
              </CardTitle>
              <p className="text-muted-foreground">
                Book a free 30-minute strategy session to discuss your marketing goals.
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-fit w-full overflow-hidden rounded-lg border">
                <CalendlyForm/>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
