import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, scaleUp } from "@/lib/animations";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    content: "Luna Diner has completely redefined my expectations of fine dining. The moonlit ambiance paired with Chef Marcus's innovative fusion cuisine creates an absolutely magical experience. Every dish tells a story, and every bite is a journey through flavor.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    date: "March 2024"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Michelin Guide Inspector",
    content: "The attention to detail at Luna Diner is extraordinary. From the perfectly curated wine pairings to the theatrical presentation of each course, this establishment deserves every accolade it receives. A true gem in the culinary world.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Celebrity Chef",
    content: "As a fellow chef, I'm incredibly impressed by the innovation and execution at Luna Diner. The way they blend traditional techniques with modern gastronomy is inspiring. This is destination dining at its finest.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Food & Wine Magazine",
    content: "Luna Diner offers an unparalleled dining experience that engages all the senses. The sophisticated atmosphere, impeccable service, and extraordinary cuisine make it a must-visit destination for any serious food enthusiast.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "April 2024"
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Lifestyle Blogger",
    content: "From the moment you step into Luna Diner, you're transported to another world. The elegant decor, attentive staff, and phenomenal food create an unforgettable evening. Perfect for special occasions and romantic dinners.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    date: "March 2024"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-charcoal-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Discover why Luna Diner has become the talk of the culinary world
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-charcoal-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold/20"
            >
              <div className="flex items-center justify-between mb-8">
                <Quote className="text-gold w-12 h-12" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < currentTestimonial.rating
                          ? "text-gold fill-gold"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-cream text-lg md:text-xl leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <h4 className="text-cream font-semibold text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gold text-sm">{currentTestimonial.role}</p>
                  <p className="text-gray-400 text-sm">{currentTestimonial.date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="border-gold/30 text-gold hover:bg-gold hover:text-black"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="border-gold/30 text-gold hover:bg-gold hover:text-black"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-gold transition-colors text-sm"
            >
              {isAutoPlaying ? "Pause" : "Resume"} auto-play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}