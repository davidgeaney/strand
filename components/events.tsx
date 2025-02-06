"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { format } from "date-fns"

const events = [
  {
    title: "Italian Night",
    date: "2024-01-24",
    time: "18:00-21:00",
    description:
      "Italians take dinner seriously, and so do we! Enjoy a variety of pasta, homemade pizzas, small and large bites, classic desserts, and iconic drinks. Let’s make it La Dolce Vita this weekend!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stranditaliannightimg-K3rGsv1ZvxRgBAGGssnFEoK7x7tB2y.png",
  },
  {
    title: "Live Music by Adam Dolan",
    date: "2024-01-17",
    time: "18:00-21:00",
    description:
      "Join us for a night of great food and live music with local favorite Adam Dolan! Enjoy his unique blend of covers and originals while dining on our full menu.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandlivemusic-5m1FVsFeYdjqPpzCAHB3OdNwNvShsa.png",
  },
]

export function Events() {
  const router = useRouter()

  const handleBookEvent = (date: string) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd")
    router.push(`/book?date=${formattedDate}`)
  }

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider text-accent uppercase">What's On</span>
          <h2 className="font-cormorant text-4xl md:text-5xl mt-2 mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for special evenings of culinary excellence and memorable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={event.date}>
                    {format(new Date(event.date), "MMMM d, yyyy")} at {event.time}
                  </time>
                </div>
                <h3 className="font-cormorant text-2xl mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-6">{event.description}</p>
                <button
                  onClick={() => handleBookEvent(event.date)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group"
                >
                  <span className="mr-2">Reserve Your Spot</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

