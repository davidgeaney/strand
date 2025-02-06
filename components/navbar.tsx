"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/book" className="text-sm font-medium hover:text-accent transition-colors">
              BOOK A TABLE
            </Link>
            <Link href="/menu" className="text-sm font-medium hover:text-accent transition-colors">
              MENU
            </Link>
          </div>

          <Link href="/" className="text-2xl font-cormorant">
            Strand Road Bar & Kitchen
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              ABOUT
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-accent transition-colors">
              EVENTS
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  BOOK A TABLE
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  MENU
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  ABOUT
                </Link>
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  EVENTS
                </Link>
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

