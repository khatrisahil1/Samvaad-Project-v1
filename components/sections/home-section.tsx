"use client"

import Lottie from "lottie-react"
import animationData from "@/public/Hero-animation.json"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomeSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const marqueeItems = [
    "Community Building",
    "Dialogue Facilitation",
    "Conflict Resolution",
    "Youth Empowerment",
    "Social Cohesion",
    "Peace Initiatives",
  ]

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-samvaad-light-stone-gray">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-samvaad-dark-slate font-heading">
                Bridging Divides, Building Futures
              </h1>
              <p className="max-w-[600px] text-samvaad-dark-slate/80 md:text-xl font-body">
                SAMVAAD is dedicated to fostering understanding and collaboration across communities, empowering
                individuals to create positive change.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-samvaad-dark-slate px-8 text-sm font-medium text-samvaad-light-stone-gray shadow transition-colors hover:bg-samvaad-dark-slate/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-body">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-samvaad-dark-slate bg-transparent px-8 text-sm font-medium text-samvaad-dark-slate shadow-sm transition-colors hover:bg-samvaad-off-white hover:text-samvaad-dark-slate focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-body"
              >
                Get Involved
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] w-full lg:h-[400px] xl:h-[500px]">
            {isMounted && (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* Marquee Slider Section */}
      <div className="w-full py-8 overflow-hidden bg-samvaad-dark-slate mt-12">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {marqueeItems.map((item, index) => (
              <span
                key={index}
                className="text-samvaad-light-stone-gray text-2xl md:text-3xl lg:text-4xl font-bold mx-8 font-heading"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
            {marqueeItems.map((item, index) => (
              <span
                key={index}
                className="text-samvaad-light-stone-gray text-2xl md:text-3xl lg:text-4xl font-bold mx-8 font-heading"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
