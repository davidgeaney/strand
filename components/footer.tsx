import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-cormorant text-2xl mb-4">Strand Road Bar & Kitchen</h3>
            <p className="text-primary-foreground/80">
              F92 VXT2 <br />
              Strand Road <br />
              Falcarragh, Co. Donegal
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Opening Hours</h4>
            <p className="text-primary-foreground/80">
              Mon—Thurs: 13:00—23:30
              <br />
              Fri: 10:00-00:30
              <br />
              Sat: 12:00—00:30
              <br />
              Sun: 12:00-23:30
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/menu" className="hover:text-primary-foreground">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-primary-foreground">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/thestrandroad/" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/thestrandroadbarandkitchen/" className="hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Strand Road Bar & Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

