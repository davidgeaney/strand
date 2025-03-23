"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { href: "/book", label: "Book a Table" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" }
]

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scrolling when menu is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`relative z-50 bg-background/80 backdrop-blur-md border-b`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="w-10 lg:hidden"></div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/book" className="text-sm font-medium hover:text-accent transition-colors">
                BOOK A TABLE
              </Link>
              <Link href="/menu" className="text-sm font-medium hover:text-accent transition-colors">
                MENU
              </Link>
            </div>

            <Link href="/" className="text-2xl font-serif">
              Strand Road
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                ABOUT
              </Link>
              <Link href="/events" className="text-sm font-medium hover:text-accent transition-colors">
                EVENTS
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                CONTACT
              </Link>
            </div>

            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center -mr-2 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 lg:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="w-full py-3"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.scroll) {
                        e.preventDefault()
                        setIsOpen(false)
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        })
                      } else {
                        setIsOpen(false)
                      }
                    }}
                    className="block text-center text-3xl font-serif py-4 px-8 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
