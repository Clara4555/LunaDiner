import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";

const chefs = [
  {
    id: "1",
    name: "Chef Marcus Luna",
    role: "Executive Chef",
    quote: "Cooking is my way of painting emotions on a plate",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "2",
    name: "Chef Isabella Star",
    role: "Pastry Chef",
    quote: "Every dessert should be a sweet dream come true",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "3",
    name: "Chef Diego Night",
    role: "Sous Chef",
    quote: "Precision and passion make the perfect dish",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

const timeline = [
  {
    year: "2020",
    title: "Founded",
    description: "Luna Diner opens its doors"
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Featured in Food & Wine Magazine"
  },
  {
    year: "2024",
    title: "Award",
    description: "Best Night Dining Experience"
  }
];

export default function About() {
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
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the story behind Luna Diner's culinary magic
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Head Chef"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-6">
                Our Story
              </h2>
              <p className="text-lg text-cream/80 mb-6">
                Luna Diner was born from a dream to create a culinary sanctuary where the magic of nighttime dining comes alive. Since 2020, we've been crafting unforgettable experiences that blend innovative cuisine with intimate ambiance.
              </p>
              <p className="text-lg text-cream/80 mb-8">
                Our passion lies in transforming the finest ingredients into works of art, creating memories that linger long after the last bite. Every dish tells a story, every meal becomes a journey.
              </p>
              <Button className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-gold/90">
                Meet Our Team
              </Button>
            </motion.div>
          </div>

          {/* Chef Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-20"
            {...staggerContainer}
          >
            {chefs.map((chef) => (
              <motion.div key={chef.id} {...fadeInUp} {...hoverScale}>
                <Card className="bg-charcoal-800 border-charcoal-600 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-cream mb-2">
                      {chef.name}
                    </h3>
                    <p className="text-gold mb-3">{chef.role}</p>
                    <p className="text-cream/80 text-sm italic">"{chef.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="text-center">
            <motion.h3
              className="font-playfair text-3xl font-bold text-cream mb-12"
              {...fadeInUp}
            >
              Our Journey
            </motion.h3>
            <motion.div
              className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12"
              {...staggerContainer}
            >
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  className="timeline-item text-center"
                  {...fadeInUp}
                >
                  <div className="bg-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.year}
                  </div>
                  <h4 className="font-semibold text-cream mb-2">{item.title}</h4>
                  <p className="text-cream/80 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
