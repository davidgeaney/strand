"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteLayout } from "@/components/site-layout"

const categories = [
  { id: "starters", name: "STARTERS" },
  { id: "mains", name: "MAIN COURSES" },
  { id: "burgers", name: "BURGERS" },
  { id: "desserts", name: "DESSERTS" },
  { id: "drinks", name: "DRINKS" },
]

const menuItems = {
  starters: [
    { name: "Crispy Chicken Wings", description: "Choice of BBQ or buffalo, ranch dip", price: "€9" },
    {
      name: "Sticky Korean Fried Chicken",
      description: "Spring onion, carrots, chili, cashew nuts, ranch",
      price: "€9/17",
    },
    {
      name: "Strand Road Salt & Chili Chicken",
      description: "Sriracha mayo, chili, spring onion, carrot",
      price: "€9/17",
    },
    { name: "Soup of the Day & Brown Bread", description: "", price: "€6.5" },
    { name: "King Prawns", description: "Sweet chili & garlic cream sauce, homemade brown bread", price: "€9" },
    { name: "Chilli Beef Nachos", description: "Mozzarella, sweetcorn salsa, sour cream, jalapeños", price: "€9" },
    { name: "Crispy Tempura Buffalo Cauliflower Wings", description: "Garlic mayo", price: "€8.5" },
    { name: "Black Pudding Croquettes", description: "Red pepper relish", price: "€9" },
    {
      name: "Strand Road Tacos",
      description: "Tempura prawns, corn salsa, cheese, chili jam, sriracha, baby gem",
      price: "€9",
    },
    { name: "Crispy Panko Garlic Mushroom", description: "Garlic butter, house salad, ranch dressing", price: "€8" },
    { name: "Cheesy Garlic Bread", description: "House salad, ranch dip", price: "€7" },
    { name: "Crispy Tempura Jalapeño Poppers", description: "Tossed in parmesan", price: "€9" },
    { name: "Honey Goats Cheese Tartlets", description: "Red onion marmalade, house salad, pesto", price: "€9" },
  ],
  mains: [
    {
      name: "Surf & Turf",
      description: "10oz sirloin steak, king prawns, skinny fries, onion rings, pepper sauce",
      price: "€29.5",
    },
    {
      name: "Irish Nature Sirloin Steak",
      description: "10oz sirloin steak, skinny fries, onion rings, pepper sauce",
      price: "€29",
    },
    { name: "Pan Fried Chicken Supreme", description: "carrot purée, tender stem broccoli, mash", price: "€18" },
    { name: "Beer Batter Killybegs Cod Fillet", description: "chunky chips, tartar sauce", price: "€17" },
    { name: "Thai Red Beef Curry", description: "wok fried veg, sticky basmati rice, Thai crackers", price: "€17" },
    { name: "Crispy Panko Chicken Goujons", description: "house salad, skinny fries, BBQ dip", price: "€17" },
    {
      name: "Pan Fried Salmon Fillet",
      description: "buttered green beans, lemon & dill sauce, side of choice",
      price: "€19.5",
    },
    {
      name: "The Strand Chicken Stir Fry",
      description: "wok fried vegetables, egg noodles, asian cream sauce",
      price: "€18",
    },
    {
      name: "6oz Steak Sandwich Ciabatta",
      description: "rocket, parmesan, red pepper relish, pepper sauce, skinny fries",
      price: "€21",
    },
    { name: "Chicken & Chorizo Linguine", description: "cajun cream, parmesan, garlic bread", price: "18" },
    {
      name: "Crispy Panko Chicken Fillet",
      description: "creamy mash, buttered greens, mushroom cream sauce",
      price: "€19",
    },
    {
      name: "Pan Fried Killybegs Cod Fillet",
      description: "Mulroy Bay mussels and potato broth, dill oil",
      price: "€21",
    },
    {
      name: "Seafood Linguine",
      description:
        "Mulroy Bay mussels, king prawns, smoked salmon, garden peas, dill, white wine garlic cream sauce, parmesan, garlic bread",
      price: "22",
    },
  ],
  burgers: [
    {
      name: "Strand Road Loaded 8oz Irish Beef Burger",
      description: "baby gem, BBQ, tomato, smoked bacon, smoked cheese",
      price: "€16",
    },
    { name: "Plain Jane", description: "80z Irish Beef Burger, lettuce, cheese", price: "€15.50" },
    {
      name: "Mexican Beef Burger",
      description:
        "8oz Irish beef burger, chilli beef, jalapeño, mozzarella, crushed nacho, sriracha mayo, skinny fries",
      price: "€18",
    },
    { name: "Crispy Buffalo Fried Chicken Burger", description: "mozzarella, slaw, lettuce", price: "€16.50" },
    { name: "Southern Fried Chicken Burger", description: "sriracha mayo, baby gem, tomato", price: "€16.50" },
    { name: "Plain Grilled Chicken Burger", description: "garlic mayo, lettuce, tomato", price: "€15.50" },
    { name: "*All burgers served on brioche bun & come with skinny fries*" },
  ],
  desserts: [
    { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "€7" },
    { name: "Panna Cotta", description: "Italian cream dessert with berry compote", price: "€6" },
    { name: "Chocolate Fondant", description: "Warm chocolate cake with vanilla ice cream", price: "€8" },
  ],
  drinks: [
    { name: "House Red Wine", description: "Glass of our selected red wine", price: "€6" },
    { name: "Aperol Spritz", description: "Classic Italian aperitif", price: "€8" },
    { name: "Espresso", description: "Single shot of espresso", price: "€2.50" },
  ],
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("starters")

  return (
    <SiteLayout>
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="font-cormorant text-5xl md:text-7xl mb-12">Our Menu</h1>

            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 text-sm tracking-wider transition-colors
                    ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-primary hover:bg-primary/5"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {menuItems[activeCategory]?.map((item, index) => (
                <div key={index} className="group">
                  <h3 className="font-cormorant text-2xl mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-2">{item.description}</p>
                  <p className="font-medium">{item.price}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </SiteLayout>
  )
}

