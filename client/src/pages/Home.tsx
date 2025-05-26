import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Award, Clock, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";

const featuredDishes = [
  {
    id: "1",
    name: "Midnight Ribeye",
    description: "Prime cut ribeye with truffle butter and seasonal vegetables",
    price: 42,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "2",
    name: "Stellar Chocolate Soufflé",
    description: "Rich dark chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "3",
    name: "Moonlight Martini",
    description: "House-infused gin with elderflower and lavender",
    price: 16,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

const stats = [
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: Award, value: "50+", label: "Awards" },
  { icon: Clock, value: "2020", label: "Est." },
  { icon: Users, value: "10K+", label: "Happy Guests" }
];

const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    text: "An absolutely magical dining experience. The ambiance is perfect for special occasions.",
    rating: 5
  },
  {
    id: "2",
    name: "James Rodriguez",
    text: "The flavors are incredible and the presentation is works of art. Highly recommend!",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Chen",
    text: "Luna Diner has become our go-to spot for date nights. Everything is perfect.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navigation />
      <Hero />
      
      {/* Featured Dishes Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              Signature Dishes
            </h2>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Discover our most beloved creations that define the Luna Diner experience
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            {...staggerContainer}
          >
            {featuredDishes.map((dish) => (
              <motion.div key={dish.id} {...fadeInUp} {...hoverScale}>
                <Card className="bg-charcoal-700 border-charcoal-600 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-cream mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-cream/80 mb-4">{dish.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gold font-semibold text-lg">
                        ${dish.price}
                      </span>
                      <Link href="/menu">
                        <Button className="bg-gold text-black hover:bg-gold/90">
                          Order Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            {...staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                {...fadeInUp}
              >
                <div className="bg-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-cream mb-2">{stat.value}</div>
                <div className="text-cream/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Chef at work"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-6">
                Our Culinary Story
              </h2>
              <p className="text-lg text-cream/80 mb-6">
                Since 2020, Luna Diner has been creating magical dining experiences under the moonlight. 
                Our passionate team crafts each dish with precision and creativity, using only the finest ingredients.
              </p>
              <p className="text-lg text-cream/80 mb-8">
                From intimate dinners to special celebrations, we believe every meal should be a memorable journey 
                that awakens all your senses.
              </p>
              <Link href="/about">
                <Button className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-gold/90">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our delighted guests
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            {...staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} {...fadeInUp}>
                <Card className="bg-charcoal-800 border-charcoal-600 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-gold fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-cream/80 mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-cream font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready for an Unforgettable Evening?
            </h2>
            <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
              Join us tonight and discover why Luna Diner is the city's most sought-after dining destination
            </p>
            <div className="space-x-4">
              <Link href="/reservations">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600"
                >
                  Make Reservation
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cream text-cream px-8 py-3 rounded-full font-semibold hover:bg-cream hover:text-black"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
