import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { scaleUp, fadeIn, glowEffect } from "@/lib/animations";

const heroImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold text-cream mb-6"
            {...scaleUp}
          >
            Savor the Magic of the Night
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream/90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where culinary artistry meets midnight elegance
          </motion.p>
          
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/reservations">
              <motion.div 
                className="inline-block"
                {...glowEffect}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600"
                >
                  Reserve a Table
                </Button>
              </motion.div>
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cream text-2xl" />
      </motion.div>
    </section>
  );
}
