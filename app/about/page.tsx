import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="font-cormorant text-5xl md:text-7xl mb-6">About</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Welcome to Strand Road Bar & Kitchen, where great food, warm hospitality, and a vibrant atmosphere come together to create unforgettable experiences. Nestled in the heart of Falcarragh, we are proud to be a cornerstone of the local community, offering a unique blend of delicious cuisine, handcrafted drinks, and a welcoming vibe that feels like home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutpageimg1-RR03nUBoriy6G0iuanwIl4hz1sX3x1.png"
                alt="Strand Road staff members in branded t-shirts"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] md:translate-y-16">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutpageimg2-L3Q5qziqTjzWPvrorPVGNl89BFX4Pp.png"
                alt="Staff members showing a humorous 'Free Beer Tomorrow' sign"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] lg:col-span-1 md:col-span-2 lg:translate-y-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandaboutpageimg3-617fUtsY2Km1RbI5naazGUKdgFhaX6.png"
                alt="Kitchen team posing for a photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-cormorant text-3xl mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, Strand Road Bar & Kitchen has been a labor of love for our team. What began as a cozy, family-run bar and restaurant in the charming town of Falcarragh has quickly become a cherished gathering spot for locals and visitors alike.

                  Over the years, we’ve refined our menu and enhanced our space, but our core values have always stayed the same. At Strand Road Bar & Kitchen, we’re proud to offer a welcoming atmosphere where great food, handcrafted drinks, and good company come together to create unforgettable moments.
                </p>
                <p className="text-muted-foreground">
                  Our journey has been marked by a commitment to quality, innovation, and warm hospitality. We've
                  evolved our menu and space over the years, but our core values remain unchanged.
                </p>
              </div>
              <div>
                <h2 className="font-cormorant text-3xl mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground mb-4">
                  At Strand Road, we believe that great food is more than just sustenance—it's an experience. We're
                  committed to sourcing the finest local and seasonal ingredients, and our chefs craft each dish with
                  passion and creativity.
                </p>
                <p className="text-muted-foreground">
                  Our philosophy extends beyond the kitchen. We strive to create a welcoming atmosphere where our guests
                  can relax, connect, and create lasting memories over exceptional food and drink.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="font-cormorant text-3xl mb-4">Our Team</h2>
              <p className="text-muted-foreground mb-4">
                Behind every great restaurant is a dedicated team. Our staff, from the kitchen to the front of house,
                are passionate about food and hospitality. Many have been with us for years, contributing to the warm,
                family-like atmosphere that our guests have come to love.
              </p>
              <p className="text-muted-foreground">
                Led by our head chef, Michael, our team works tirelessly to ensure
                that every visit to Strand Road Bar & Kitchen is special.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

