"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Heading and CTA */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Strand Road
              <span className="block text-4xl md:text-5xl lg:text-6xl text-accent mt-4">Bar & Kitchen</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the fusion of Donegal's finest ingredients and innovative culinary techniques, set against the
              backdrop of Falcarragh's stunning coastline.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg py-6 px-8">
                <Link href="/menu">Explore Menu</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group text-lg py-6 px-8">
                <Link href="/book">
                  Book a Table
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right column: Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-4 aspect-square">
              <div className="col-span-4 row-span-6">
                <div className="relative w-full h-full overflow-hidden rounded-tl-3xl rounded-bl-3xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandheroimg1-vV1YsxlHYrBxFp4ywsw6FwPFEn6tcl.png"
                    alt="Gourmet dish at Strand Road Bar & Kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-1">
                <div className="relative w-full h-full overflow-hidden rounded-tr-3xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandheroimg2-SZhgtnyTCgYNSJMEszOhnvL5Heny0K.png"
                    alt="Delicious dessert from Strand Road Bar & Kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-4">
                <div className="relative w-full h-full overflow-hidden rounded-br-3xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandheroimg3-nl6KHYN5JSLE6sIXT039jg0GbwXm69.png"
                    alt="Signature cocktail from Strand Road Bar & Kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}

