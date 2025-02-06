"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "./navbar"

export function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-h-screen pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}

