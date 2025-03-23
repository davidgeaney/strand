"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useSmoothScroll, useParallax } from "@/lib/animations"

export function About() {
  const ref = useRef(null)
  const scrollYProgress = useSmoothScroll(ref)
  const y = useParallax(scrollYProgress, 50)

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutimg-XwwWqZ7aghCbXDHepJ36YPMdge68xr.png"
              alt="The Strand Road Bar & Kitchen exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <motion.div className="space-y-6 lg:pl-12" style={{ y }}>
            <span className="text-sm tracking-wider text-accent uppercase">Our Story</span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-medium leading-tight">
              What We're About
            </h2>
            <p className="text-lg text-muted-foreground">
            Good food, great atmosphere, and a focus on the things that matter. At Strand Road, we keep it simple—fresh ingredients, proper cooking, and a warm, welcoming space where you can relax and enjoy a meal, whether it's a casual bite or something special.
            </p>
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/about"
                className="inline-block px-6 py-3 rounded-lg border border-primary bg-transparent hover:bg-[#F4A261]/20 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
