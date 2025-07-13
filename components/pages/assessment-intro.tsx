"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface AssessmentIntroProps {
  setPage: (page: string) => void
}

export default function AssessmentIntro({ setPage }: AssessmentIntroProps) {
  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in flex items-center justify-center">
      <Card className="w-full max-w-2xl p-8 bg-card text-card-foreground shadow-lg border-border">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Your Wellness Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
            This assessment is designed to help you understand your current mental well-being and identify areas where
            SAMVAAD can offer support. Your responses are confidential and will help us provide personalized insights
            and resources tailored just for you.
          </p>
          <div className="space-y-3 mb-8 text-left inline-block">
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-body">Confidential & Secure</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-body">Personalized Insights</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-body">Takes approximately 15-20 minutes</span>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => alert("Simulating start of assessment...")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
          >
            Start Assessment
          </Button>
          <p className="text-sm font-body text-muted-foreground mt-4">You can pause and resume at any time.</p>
        </CardContent>
      </Card>
    </main>
  )
}
