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

      {/* Special Features Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              Why Luna Diner is Special
            </h2>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Discover what makes every visit to Luna Diner an extraordinary experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Intimate Atmosphere"
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3 
                className="font-playfair text-2xl font-bold text-cream mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Intimate Atmosphere
              </motion.h3>
              <motion.p 
                className="text-cream/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Candlelit tables, soft jazz, and moonlit ambiance create the perfect setting for romantic dinners and special celebrations.
              </motion.p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Master Chefs"
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3 
                className="font-playfair text-2xl font-bold text-cream mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Master Chefs
              </motion.h3>
              <motion.p 
                className="text-cream/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our award-winning culinary team brings decades of experience from world-renowned restaurants to create unforgettable flavors.
              </motion.p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Premium Ingredients"
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3 
                className="font-playfair text-2xl font-bold text-cream mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Premium Ingredients
              </motion.h3>
              <motion.p 
                className="text-cream/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Only the finest locally-sourced, organic ingredients make it to your plate. We believe quality starts with exceptional ingredients.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours and Location Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Visit Us Tonight
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-gold font-semibold text-xl mb-2">Hours</h3>
                  <p className="text-cream/80">Monday - Thursday: 5:00 PM - 11:00 PM</p>
                  <p className="text-cream/80">Friday - Saturday: 5:00 PM - 12:00 AM</p>
                  <p className="text-cream/80">Sunday: 5:00 PM - 10:00 PM</p>
                </div>
                
                <div>
                  <h3 className="text-gold font-semibold text-xl mb-2">Location</h3>
                  <p className="text-cream/80">123 Moonlight Avenue</p>
                  <p className="text-cream/80">Starville, NY 10001</p>
                  <p className="text-cream/80">(555) 123-LUNA</p>
                </div>

                <div>
                  <h3 className="text-gold font-semibold text-xl mb-2">Dress Code</h3>
                  <p className="text-cream/80">Smart casual to formal attire preferred</p>
                  <p className="text-cream/80">We want you to feel as special as the occasion</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Restaurant exterior at night"
                className="rounded-xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready for an Unforgettable Evening?
            </motion.h2>
            <motion.p 
              className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join us tonight and discover why Luna Diner is the city's most sought-after dining destination. 
              Every meal is a journey, every moment is magical.
            </motion.p>
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/reservations">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 shadow-lg"
                  >
                    Make Reservation
                  </Button>
                </motion.div>
              </Link>
              <Link href="/menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-cream text-cream px-8 py-3 rounded-full font-semibold hover:bg-cream hover:text-black shadow-lg"
                  >
                    View Menu
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
