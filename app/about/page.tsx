"use client"

import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Header Section */}
      <section className="relative py-24 lg:py-32 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex flex-col items-center">
              <span className="text-primary/80 font-serif italic text-xl mb-4">Est. 2020</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-3 relative">
              Welcome to Strand Road Bar & Kitchen
                <span className="block h-1 w-24 bg-primary/60 mx-auto mt-6"></span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-12">
            Good food, good company, and a place that feels like home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">A Place for Good Food & Good Company</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                Strand Road started as a small, family-run spot in Falcarragh, and over the years, it’s become a favorite for locals and visitors alike. We’ve made a few changes—tweaking the menu, refreshing the space—but the heart of it all stays the same: simple, great food served in a relaxed, welcoming setting.
                </p>
                <p>
                Here’s what matters to us:
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutpageimg2-L3Q5qziqTjzWPvrorPVGNl89BFX4Pp.png"
                alt="Staff members showing a humorous 'Free Beer Tomorrow' sign"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Friendly, No-Fuss Service",
                description: "We keep things easygoing. Whether you're here for a quick pint or a long meal, you’ll always get a warm welcome and honest hospitality.."
              },
              {
                title: "Fresh Ingredients, No Shortcuts",
                description: "We work with local suppliers to bring in quality ingredients and let them speak for themselves—simple, fresh, and full of flavor."
              },
              {
                title: "Food That Hits the Spot",
                description: "Good cooking doesn’t need to be complicated. We focus on solid flavors, proper techniques, and dishes that are worth coming back for."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-background"
              >
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="relative font-serif text-2xl mb-4">{value.title}</h3>
                <p className="relative text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutpageimg3-617fUtsY2Km1RbI5naazGUKdgFhaX6.png"
                alt="Kitchen team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Meet the Team</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                We’re a close-knit team who enjoy what we do—serving great food and making people feel at home. Whether it’s in the kitchen or front of house, everyone plays a part in keeping things running smoothly.
                </p>
                <p>
                No fuss, no formality—just a group of people who take pride in good hospitality and a well-cooked meal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
