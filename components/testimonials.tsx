"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Carly McHugh",
    role: "Regular Customer",
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
  {
    name: "Bernadette Langan",
    role: "Regular Customer",
    content:
      "I had my son’s confirmation meal in the Strand bar recently. The menu was greatly food and service excellent. Highly recommend 💫",
    rating: 5,
  },
  {
    name: "Naoíse Bhéir",
    role: "Regular Customer",
    content:
      "Had a lovely three course meal on Sunday in front of the fire 🔥 Amazing food for great value and brilliant friendly staff 🎉 The strand bar should be famous for there salt and chilli chicken 😍",
    rating: 5,
  },
  {
    name: "Marita Bonner",
    role: "First-time Visitor",
    content:
      "Fabulous food and great service, despite them being extremely busy. Will definitely return!!",
    rating: 5,
  },
  {
    name: "Michaela Sadlier",
    role: "Regular Customer",
    content:
      "Delicious food, good atmosphere, very friendly staff. Great service.",
    rating: 5,
  },
  {
    name: "Lesleyann McFadden",
    role: "Regular Customer",
    content:
      "We had a beautiful meal here, followed by cocktails, staff were so attentive especially the polish girl, she gave us blankets as we went to sit outside with our cocktails . Highly recommend trying this place 🙌 and thank you Klaudia for being so attentive 😃",
    rating: 5,
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerPage) - 1

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  )

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Read what our valued customers have to say about their experience
          </p>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6B800] text-[#E6B800]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Navigation buttons - moved below on mobile */}
          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button
              onClick={prevTestimonials}
              className="p-2 rounded-full bg-background shadow-md hover:bg-muted transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-2 rounded-full bg-background shadow-md hover:bg-muted transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop navigation buttons */}
          <button
            onClick={prevTestimonials}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-background shadow-md hover:bg-muted transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonials}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-background shadow-md hover:bg-muted transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
