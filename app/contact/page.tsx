"use client"

import { SiteLayout } from "@/components/site-layout"
import { motion } from "framer-motion"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Contact() {
  return (
    <SiteLayout>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-secondary/5" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="font-serif text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We'd love to hear from you. Visit us for an unforgettable dining experience or reach out through any of our channels.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Strand Road<br />
                    Falcarragh, Co. Donegal<br />
                    F92 VXT2
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+353749135300" className="hover:text-accent transition-colors">
                      074 913 5907
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@thestrandroad.ie" className="hover:text-accent transition-colors">
                      strandroadfalcarragh@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Mon—Thurs: 13:00—23:30</p>
                    <p>Fri: 10:00-00:30</p>
                    <p>Sat: 12:00—00:30</p>
                    <p>Sun: 12:00-23:30</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/thestrandroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-accent" />
                  </a>
                  <a 
                    href="https://www.instagram.com/thestrandroadbarandkitchen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-accent" />
                  </a>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <TikTokIcon className="h-6 w-6 text-accent" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="relative aspect-square md:aspect-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1130.2417389556276!2d-8.1049!3d55.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x485f89066888ca93%3A0xf7c8c8a7b1203d1c!2sFalcarragh%2C%20Co.%20Donegal!5e0!3m2!1sen!2sie!4v1708990478245!5m2!1sen!2sie"
                className="absolute inset-0 w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-base px-8 rounded-lg hover:bg-[#F4A261] text-white transition-all duration-300">
              <a href="/book">Make a Reservation</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  )
}
