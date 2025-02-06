"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { format } from "date-fns"
import { SiteLayout } from "@/components/site-layout"

const events = [
  {
    title: "Italian Night",
    date: "2024-01-24",
    time: "18:00-21:00",
    description:
      "Italians take their dinner very seriously, so do we! You will find a great selection of different pasta dishes, homemade pizzas, small and large bites, traditional desserts, and famous drinks. Let us make it La Dolce Vita for you this weekend.",
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
  {
    title: "Mexican Fiesta Night",
    date: "2024-02-07",
    time: "18:00-21:00",
    description:
      "Experience the vibrant flavors of Mexico! Enjoy our special menu featuring authentic Mexican dishes, from street tacos to enchiladas, complemented by craft margaritas and live entertainment.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandmexicannight-QEKhph0fjaNrAss7DAqD8Tb7gE6g7V.png",
  },
  {
    title: "Comedy Night",
    date: "2024-02-21",
    time: "20:00-22:00",
    description:
      "Laugh the night away at our Comedy Night! 😂 Enjoy great food, drinks, and live stand-up from talented comedians. Book your table now for a night of fun and laughter!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandcomedynightimg-UuYJC1lngDarhQHxdF7KsUyxZ96cS7.png",
  },
]

export default function EventsPage() {
  const router = useRouter()

  const handleBookEvent = (date: string) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd")
    router.push(`/book?date=${formattedDate}`)
  }

  return (
    <SiteLayout>
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="font-cormorant text-5xl md:text-7xl mb-6">Upcoming Events</h1>
            <p className="text-lg text-muted-foreground">
              Join us for special evenings of culinary excellence and memorable experiences. Book your spot for these
              exclusive events at Strand Road Bar & Kitchen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

