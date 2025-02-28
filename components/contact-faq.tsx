"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Do I need to make a reservation?",
    answer:
      "Reservations are recommended, especially during busy hours. You can book a table by calling us at (074) 913 5907 or using our online booking system.",
  },
  {
    question: "Do you offer takeaway?",
    answer: "Yes, you can place an order online. Call us at (074) 913 5907.",
  },
  {
    question: "Do you host private events or catering?",
    answer: "Yes! We offer private dining options and catering services. Contact us at strandroadfalcarragh@gmail.com or (074) 913 5907 to discuss your event.",
  },
  {
    question: "Do you have WiFi available?",
    answer: "Yes, we offer free WiFi for our guests. Ask our staff for the password.",
  },
]

export function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-cormorant text-4xl mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-cormorant text-4xl mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={false} className="border-b">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

