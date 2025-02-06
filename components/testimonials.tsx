"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carly McHugh",
    role: "Food Critic",
    content:
      "Superb quality food with efficient service. Extremely good value for money and highly recommended!",
    rating: 5,
  },
  {
    name: "Catherine Brown",
    role: "Regular Customer",
    content:
      "Great place- super friendly staff and the food is unreal. 100% recommend The Strand",
    rating: 5,
  },
  {
    name: "Veronica James Doherty",
    role: "Regular Customer",
    content:
      "lovely outside dining area. lovely friendly staff, food was excellent",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12">What Our Guests Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

