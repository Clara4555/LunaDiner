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
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Gourmet Cuisine",
    category: "food"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Restaurant Interior",
    category: "interior"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Seafood Special",
    category: "food"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Bar Area",
    category: "interior"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Signature Dessert",
    category: "food"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Private Dining",
    category: "interior"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Elegant Ambiance",
    category: "ambiance"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Candlelit Dinner",
    category: "ambiance"
  }
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

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
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
            {...fadeInUp}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A glimpse into the Luna Diner experience
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            {...staggerContainer}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item group cursor-pointer"
                {...fadeInUp}
                {...hoverScale}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gold text-black px-4 py-2 rounded-full font-semibold">
                      View Image
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
