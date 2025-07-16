"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import { Card, CardContent } from "@/components/ui/card"

Chart.register(...registerables)

export default function ChallengeSection() {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy() // Destroy existing chart if it exists
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Indian Youth (18-30) Reporting Mental Health Concerns",
              "College Students Globally Who Struggle With Mental Health",
            ],
            datasets: [
              {
                label: "% of Population",
                data: [75, 25],
                backgroundColor: ["hsl(var(--primary) / 0.6)", "hsl(var(--foreground) / 0.6)"],
                borderColor: ["hsl(var(--primary))", "hsl(var(--foreground))"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    if (context.parsed.x !== null) {
                      label += context.parsed.x + "%"
                    }
                    return label
                  },
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  callback: (value) => value + "%",
                },
              },
              y: {
                ticks: {
                  callback: function (value, index, ticks) {
                    const label = this.getLabelForValue(value)
                    if (label.length > 25) {
                      return label.slice(0, 25) + "..."
                    }
                    return label
                  },
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section id="challenge" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-2 text-foreground">The Growing Challenge</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            SAMVAAD is a direct response to the escalating mental health concerns among youth, an issue that traditional
            methods often fail to adequately address.
          </p>
        </div>
        <Card className="bg-card rounded-lg p-6 md:p-10 shadow-sm border-border">
          <CardContent className="p-0">
            <p className="text-center text-md font-semibold text-muted-foreground mb-6 font-body">
              Key statistics highlight the urgency of a new, proactive approach.
            </p>
            <div className="relative w-full max-w-xl mx-auto h-[300px] md:h-[350px]">
              <canvas id="challengeChart" ref={chartRef}></canvas>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
