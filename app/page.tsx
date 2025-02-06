import { SiteLayout } from "@/components/site-layout"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuPreview } from "@/components/menu-preview"
import { Events } from "@/components/events"
import { Testimonials } from "@/components/testimonials"
import { ContactFAQ } from "@/components/contact-faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <MenuPreview />
      <Events />
      <Testimonials />
      <ContactFAQ />
      <Footer />
    </SiteLayout>
  )
}

