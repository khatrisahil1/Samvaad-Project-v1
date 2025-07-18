import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { UsersIcon, HandshakeIcon, LightbulbIcon } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-samvaad-light-stone-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-samvaad-dark-slate font-heading">
              Our Services
            </h2>
            <p className="max-w-[900px] text-samvaad-dark-slate/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              SAMVAAD offers a range of services designed to foster dialogue, build capacity, and promote peace within
              communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          <Card className="bg-white shadow-lg border-samvaad-serene-sage border-t-4">
            <CardHeader>
              <UsersIcon className="h-10 w-10 text-samvaad-serene-sage mb-4" />
              <CardTitle className="text-samvaad-dark-slate font-heading">Community Workshops</CardTitle>
              <CardDescription className="text-samvaad-dark-slate/70 font-body">
                Interactive sessions to build communication skills and foster mutual understanding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-samvaad-dark-slate/80 font-body">
                <li>Dialogue facilitation</li>
                <li>Conflict resolution training</li>
                <li>Empathy building exercises</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-samvaad-serene-sage border-t-4">
            <CardHeader>
              <HandshakeIcon className="h-10 w-10 text-samvaad-serene-sage mb-4" />
              <CardTitle className="text-samvaad-dark-slate font-heading">Partnership Programs</CardTitle>
              <CardDescription className="text-samvaad-dark-slate/70 font-body">
                Collaborating with local organizations to implement sustainable community projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-samvaad-dark-slate/80 font-body">
                <li>Joint initiatives for social good</li>
                <li>Resource sharing and capacity building</li>
                <li>Networking opportunities</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-samvaad-serene-sage border-t-4">
            <CardHeader>
              <LightbulbIcon className="h-10 w-10 text-samvaad-serene-sage mb-4" />
              <CardTitle className="text-samvaad-dark-slate font-heading">Youth Leadership Development</CardTitle>
              <CardDescription className="text-samvaad-dark-slate/70 font-body">
                Empowering the next generation with skills for leadership and community engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-samvaad-dark-slate/80 font-body">
                <li>Mentorship programs</li>
                <li>Leadership training camps</li>
                <li>Youth-led community projects</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
