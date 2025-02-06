import { Montserrat, Lora } from "next/font/google"
import "./globals.css"
import type React from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata = {
  title: "Strand Road Bar & Kitchen",
  description: "Fine dining restaurant and cocktail bar in Falcarragh, Donegal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

