"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SiteLayout } from "@/components/site-layout"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

// Generate time slots in 30-minute intervals
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 12; hour <= 22; hour++) {
    for (let minute of ['00', '30']) {
      const time = `${hour.toString().padStart(2, '0')}:${minute}`
      slots.push(time)
    }
  }
  return slots
}

// Wrapper component to handle search params
function BookingPageContent() {
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date | undefined>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    time: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const dateParam = searchParams.get("date")
    if (dateParam) {
      const newDate = new Date(dateParam)
      if (!date || newDate.getTime() !== date.getTime()) {
        setDate(newDate)
      }
    }
  }, [searchParams, date])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleTimeChange = (value: string) => {
    setFormData(prev => ({ ...prev, time: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!date) {
      toast.error("Please select a date")
      setIsSubmitting(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Booking request submitted successfully!")
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        time: '',
        notes: ''
      })
      setDate(undefined)
    } catch (error) {
      toast.error("Failed to submit booking request")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Disable past dates
  const disabledDates = {
    before: new Date(),
  }

  return (
    <SiteLayout>
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto">
            <h1 className="font-cormorant text-5xl md:text-7xl mb-8">Book a Table</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input 
                    id="guests" 
                    type="number" 
                    min="1" 
                    max="12" 
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of guests" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  disabled={disabledDates}
                  className="rounded-md border" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={formData.time} onValueChange={handleTimeChange} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateTimeSlots().map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests</Label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                  placeholder="Any special requests or dietary requirements?"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Confirm Booking"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

// Main page component with Suspense
export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  )
}