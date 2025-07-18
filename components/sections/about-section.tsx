import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-samvaad-off-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-samvaad-dark-slate font-heading">
              About SAMVAAD
            </h2>
            <p className="max-w-[700px] text-samvaad-dark-slate/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              SAMVAAD is a non-profit organization dedicated to fostering understanding, empathy, and collaboration
              among diverse communities. We believe that meaningful dialogue is the cornerstone of a harmonious society.
              Through various initiatives, we aim to bridge divides, resolve conflicts, and empower individuals to
              become agents of positive change.
            </p>
            <p className="max-w-[700px] text-samvaad-dark-slate/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Our work focuses on creating safe spaces for open conversation, promoting cultural exchange, and
              developing leadership skills in youth. We strive to build a future where every voice is heard and valued.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=500&width=500"
              width={500}
              height={500}
              alt="About Us"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
