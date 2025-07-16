"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpactTestimonials() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-2 text-foreground">Our Impact So Far</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            Through our events and community engagement, we've already begun to create ripples of change.
          </p>
        </div>
        <div>
          <Tabs defaultValue="editions" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-muted text-foreground border-b border-border">
              <TabsTrigger
                value="editions"
                className="font-body text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:border-b-2"
              >
                Past Editions
              </TabsTrigger>
              <TabsTrigger
                value="testimonials"
                className="font-body text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:border-b-2"
              >
                Testimonials
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editions" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-background p-6 rounded-lg shadow-sm border-border text-foreground">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-heading font-bold">
                      Edition 1: Sustainability & Cybersecurity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="font-body text-muted-foreground">
                      Our inaugural event explored how conscious living and digital safety are deeply tied to emotional
                      and societal well-being, featuring experts from industry, law enforcement, and eco-artists.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background p-6 rounded-lg shadow-sm border-border text-foreground">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-heading font-bold">
                      Edition 2: Mental Health & Emotional Wellbeing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="font-body text-muted-foreground">
                      This edition took a bold leap into normalizing conversations around mental health, with panel
                      discussions, performances, and expert keynotes from therapists, artists, and educators.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="testimonials" className="mt-8">
              <div className="max-w-3xl mx-auto space-y-8">
                <blockquote className="text-center bg-background p-8 rounded-lg shadow-sm border-border text-foreground">
                  <p className="text-xl italic font-body">
                    "SAMVAAD provided a space where I felt truly heard for the first time. It's more than just an event;
                    it's a community."
                  </p>
                  <footer className="mt-4 font-semibold font-body text-muted-foreground">- University Student</footer>
                </blockquote>
                <blockquote className="text-center bg-background p-8 rounded-lg shadow-sm border-border text-foreground">
                  <p className="text-xl italic font-body">
                    "As a professional, the insights on emotional intelligence and leadership were invaluable. A
                    much-needed conversation."
                  </p>
                  <footer className="mt-4 font-semibold font-body text-muted-foreground">- Corporate Partner</footer>
                </blockquote>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
