"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SiteLayout } from "@/components/site-layout"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date | undefined>()

  useEffect(() => {
    const dateParam = searchParams.get("date")
    if (dateParam) {
      const newDate = new Date(dateParam)
      if (!date || newDate.getTime() !== date.getTime()) {
        setDate(newDate)
      }
    }
  }, [searchParams, date])

  return (
    <SiteLayout>
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto">
            <h1 className="font-cormorant text-5xl md:text-7xl mb-8">Book a Table</h1>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input id="guests" type="number" min="1" max="12" placeholder="Number of guests" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Input id="time" type="time" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests</Label>
                <textarea
                  id="notes"
                  className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                  placeholder="Any special requests or dietary requirements?"
                />
              </div>

              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

