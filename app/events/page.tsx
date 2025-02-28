"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Italian Night",
    date: "2024-01-24",
    time: "18:00-21:00",
    description:
      "Italians take their dinner very seriously, so do we! You will find a great selection of different pasta dishes, homemade pizzas, small and large bites, traditional desserts, and famous drinks. Let us make it La Dolce Vita for you this weekend.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stranditaliannightimg-K3rGsv1ZvxRgBAGGssnFEoK7x7tB2y.png",
    price: "€35 per person",
    includes: ["Welcome Drink", "3-Course Menu", "Live Entertainment"]
  },
  {
    title: "Live Music by Adam Dolan",
    date: "2024-01-17",
    time: "18:00-21:00",
    description:
      "Join us for a night of great food and live music with local favorite Adam Dolan! Enjoy his unique blend of covers and originals while dining on our full menu.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandlivemusic-5m1FVsFeYdjqPpzCAHB3OdNwNvShsa.png",
    price: "No cover charge",
    includes: ["Full Menu Available", "Live Music", "Drink Specials"]
  },
  {
    title: "Mexican Fiesta Night",
    date: "2024-02-07",
    time: "18:00-21:00",
    description:
      "Experience the vibrant flavors of Mexico! Enjoy our special menu featuring authentic Mexican dishes, from street tacos to enchiladas, complemented by craft margaritas and live entertainment.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandmexicannight-QEKhph0fjaNrAss7DAqD8Tb7gE6g7V.png",
    price: "€30 per person",
    includes: ["Welcome Margarita", "Mexican Buffet", "Live Music"]
  },
  {
    title: "Comedy Night",
    date: "2024-02-21",
    time: "20:00-22:00",
    description:
      "Laugh the night away at our Comedy Night! 😂 Enjoy great food, drinks, and live stand-up from talented comedians. Book your table now for a night of fun and laughter!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandcomedynightimg-UuYJC1lngDarhQHxdF7KsUyxZ96cS7.png",
    price: "€15 per person",
    includes: ["Welcome Drink", "Comedy Show", "Bar Menu Available"]
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">Upcoming Events</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join us for special evenings of culinary excellence and memorable experiences. Book your spot for these
              exclusive events at Strand Road Bar & Kitchen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={event.date} className="text-sm font-medium">
                      {format(new Date(event.date), "MMMM d, yyyy")} • {event.time}
                    </time>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="pt-2">
                    <div className="font-medium text-accent mb-2">{event.price}</div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.includes?.map((item, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleBookEvent(event.date)}
                      className="w-full group"
                    >
                      Reserve Your Spot
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
