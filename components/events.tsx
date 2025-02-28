"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Italian Night",
    date: "2024-01-24",
    time: "18:00-21:00",
    description:
      "Italians take dinner seriously, and so do we! Enjoy a variety of pasta, homemade pizzas, small and large bites, classic desserts, and iconic drinks. Let's make it La Dolce Vita this weekend!",
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
    <section className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-wider text-accent uppercase">What's On</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for special evenings of culinary excellence and memorable experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-background rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={event.date} className="text-sm font-medium">
                    {format(new Date(event.date), "MMMM d, yyyy")} • {event.time}
                  </time>
                </div>
                <h3 className="font-serif text-2xl mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{event.description}</p>
                <Button
                  onClick={() => handleBookEvent(event.date)}
                  className="group/button"
                >
                  Reserve Your Spot
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push('/events')}
            className="group"
          >
            View All Events
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
