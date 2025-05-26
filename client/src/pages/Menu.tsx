import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Midnight Eggs Benedict",
    description: "Perfectly poached eggs on artisan brioche with hollandaise sauce",
    price: 18,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "breakfast"
  },
  {
    id: "2",
    name: "Luna Garden Salad",
    description: "Fresh mixed greens with moon-dried tomatoes and starlight vinaigrette",
    price: 16,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "lunch"
  },
  {
    id: "3",
    name: "Midnight Ribeye",
    description: "Prime cut ribeye with truffle butter and seasonal vegetables",
    price: 42,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "dinner"
  },
  {
    id: "4",
    name: "Stellar Chocolate Soufflé",
    description: "Rich dark chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "desserts"
  },
  {
    id: "5",
    name: "Moonlight Martini",
    description: "House-infused gin with elderflower and lavender",
    price: 16,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "drinks"
  },
  {
    id: "6",
    name: "Cosmic Pancakes",
    description: "Fluffy blueberry pancakes with maple syrup and whipped cream",
    price: 15,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "breakfast"
  }
];

const categories = [
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
            {...fadeInUp}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our carefully crafted dishes, each telling a story of flavor and passion
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-black"
                    : "bg-charcoal-700 text-cream hover:bg-gold hover:text-black"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...staggerContainer}
            key={activeCategory}
          >
            {filteredItems.map((item) => (
              <motion.div key={item.id} {...fadeInUp}>
                <Card className="bg-charcoal-700 border-charcoal-600 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-cream mb-2">
                      {item.name}
                    </h3>
                    <p className="text-cream/80 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gold font-semibold text-lg">
                        ${item.price}
                      </span>
                      <Button className="bg-gold text-black hover:bg-gold/90">
                        Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
