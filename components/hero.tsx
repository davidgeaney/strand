"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const specialsMenu = [
  {
    src: "/images/roast.png",
    alt: "Roast Beef",
    name: "Sunday Roast Beef",
    description: "Tender roast beef served with seasonal vegetables, Yorkshire pudding and rich gravy",
    price: "€24",
    available: "Sunday Special"
  },
  {
    src: "/images/burger.png",
    alt: "Breakfast Special",
    name: "Full Irish Breakfast Stack",
    description: "Grilled sausages, fried egg, and crispy bacon served on a toasted brioche bun with our house sauce",
    price: "€18",
    available: "Breakfast Special"
  },
  {
    src: "/images/coffee.png",
    alt: "Layered Coffee",
    name: "Signature Coffee",
    description: "Three-layered coffee with fresh cream and coffee beans garnish",
    price: "€6",
    available: "Barista's Special"
  }
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % specialsMenu.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background py-12 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background"></div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Main heading */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl xl:text-9xl tracking-tight">
                  Good Food,
                </h1>
                <p className="font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-accent">Done Right</p>
              </motion.div>

              {/* Description */}
              <motion.div
                className="max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed">
                  Locally sourced, freshly prepared, and full of flavor. Whether it's a casual bite or something special, we've got you covered.
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild size="lg" className="text-base px-8 h-12">
                  <Link href="/menu">View Our Menu</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 h-12">
                  <Link href="/book" className="flex items-center">
                    Reserve a Table
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Specials Carousel */}
          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] w-full">
              <AnimatePresence mode="wait">
                {specialsMenu.map((special, index) => (
                  index === currentImageIndex && (
                    <motion.div
                      key={special.src}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Image
                        src={special.src}
                        alt={special.alt}
                        fill
                        className="object-cover rounded-2xl shadow-2xl"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                        priority={index === 0}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Special details overlay */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-accent/80">{special.available}</p>
                          <h3 className="font-serif text-xl md:text-2xl">{special.name}</h3>
                          <p className="text-sm text-white/80 line-clamp-2">{special.description}</p>
                          <p className="text-lg md:text-xl font-medium text-accent mt-2">{special.price}</p>
                        </div>
                      </motion.div>
                      
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-foreground/10"></div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center gap-3 mt-4 md:mt-6">
              {specialsMenu.map((special, index) => (
                <button
                  key={index}
                  className={`group relative py-2 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className={`h-1 w-6 md:w-8 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-accent' : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/50'
                  }`} />
                  <span className="sr-only">View {special.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}
