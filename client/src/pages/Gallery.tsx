import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Food Images
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Midnight Ribeye with Truffle Butter",
    category: "food"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Fresh Seafood Platter",
    category: "food"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Stellar Chocolate Soufflé",
    category: "food"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Cosmic Pancakes with Blueberries",
    category: "food"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Luna Garden Salad",
    category: "food"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Luna Tiramisu",
    category: "food"
  },
  
  // Interior Images
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Main Dining Room",
    category: "interior"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Moonlight Bar Area",
    category: "interior"
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Private Dining Room",
    category: "interior"
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Wine Cellar",
    category: "interior"
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Open Kitchen View",
    category: "interior"
  },
  
  // Ambiance Images
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Elegant Evening Atmosphere",
    category: "ambiance"
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Candlelit Romantic Dinner",
    category: "ambiance"
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Moonlit Terrace Dining",
    category: "ambiance"
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Intimate Table Setting",
    category: "ambiance"
  },
  
  // Chef Images
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Chef Marcus at Work",
    category: "chef"
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Chef Isabella Creating Desserts",
    category: "chef"
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Chef Diego in the Kitchen",
    category: "chef"
  },
  
  // Events Images
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Wedding Reception",
    category: "events"
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Corporate Event",
    category: "events"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "food", name: "Culinary Art" },
  { id: "interior", name: "Interior" },
  { id: "ambiance", name: "Ambiance" },
  { id: "chef", name: "Our Chefs" },
  { id: "events", name: "Events" }
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Visual Journey
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Step into our world through these captured moments of culinary artistry, 
            elegant ambiance, and unforgettable experiences at Luna Diner
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-charcoal-800 border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-black shadow-lg scale-105"
                    : "bg-charcoal-700 text-cream hover:bg-gold hover:text-black hover:scale-105"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Stats */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-cream/60 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Showcasing {filteredImages.length} moments of {activeCategory === "all" ? "pure magic" : categories.find(c => c.id === activeCategory)?.name.toLowerCase()}
            </motion.p>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
            {...staggerContainer}
            key={activeCategory}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item group cursor-pointer"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openLightbox(image)}
                layout
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Image Title */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-cream font-semibold text-lg mb-1">{image.alt}</h3>
                    <p className="text-cream/80 text-sm capitalize">{image.category}</p>
                  </motion.div>
                  
                  {/* View Button */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div 
                      className="bg-gold text-black px-6 py-3 rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Full Size
                    </motion.div>
                  </motion.div>
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-sm font-medium capitalize"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {image.category}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Description */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Every Picture Tells a Story
            </motion.h2>
            <motion.p 
              className="text-cream/80 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              From the artistic plating of our signature dishes to the warm glow of candlelit tables, 
              each image captures the essence of what makes Luna Diner extraordinary. These moments 
              represent countless evenings of joy, celebration, and culinary excellence shared with our guests.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <Lightbox
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage?.src || ""}
        imageAlt={lightboxImage?.alt || ""}
        onClose={closeLightbox}
      />
    </div>
  );
}
