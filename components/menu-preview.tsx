"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useSmoothScroll, useParallax } from "@/lib/animations"

const specials = [
  {
    name: "Pan Fried Hake",
    description: "king prawns, haddock, salmon, house salad, walnut soda bread",
    price: "€9.50",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandspecialsimg1-BUnLS8xN0KsvouNy7hPuA9zvgs7nqm.png",
    category: "Tonight's Specials",
  },
  {
    name: "Seared Lamb & Root Veg",
    description:
      "perfectly seared lamb served with crispy potatoes, roasted baby carrots, sautéed kale, and carrot purée, finished with a rich jus",
    price: "€16",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandspecialsimg2-p2wuN9H8tzc71FbxdY5Brw7oNSsVrH.png",
    category: "Chef's Selection",
  },
]

export function MenuPreview() {
  const ref = useRef(null)
  const scrollYProgress = useSmoothScroll(ref)
  const y = useParallax(scrollYProgress, 50)

  return (
    <section ref={ref} className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <motion.div className="text-center mb-16" style={{ y }}>
          <span className="text-sm tracking-wider text-accent uppercase">Our Specials</span>
          <h2 className="font-cormorant text-4xl md:text-5xl mt-2 mb-4">Today's Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's carefully curated selection of daily specials, featuring the freshest seasonal
            ingredients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                <Image
                  src={special.image || "/placeholder.svg"}
                  alt={special.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2">
                  <span className="text-sm font-medium">{special.category}</span>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{special.name}</h3>
              <p className="text-muted-foreground mb-3">{special.description}</p>
              <p className="font-medium mb-4">{special.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-6 py-3 rounded-lg border border-primary bg-transparent hover:bg-[#F4A261]/20 transition-all duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

