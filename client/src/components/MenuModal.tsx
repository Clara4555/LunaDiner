import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  prepTime: string;
  rating: number;
  ingredients: string[];
  allergens: string[];
  calories: number;
  chef: string;
}

interface MenuModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  onClose: () => void;
}

export default function MenuModal({ isOpen, item, onClose }: MenuModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-charcoal-800 rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-cream bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
            </motion.button>

            {/* Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-gold text-black font-semibold mb-2">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </Badge>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream">
                  {item.name}
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Main Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <p className="text-lg text-cream/80 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-cream/80">
                      <Clock size={16} className="mr-2" />
                      <span>{item.prepTime}</span>
                    </div>
                    <div className="flex items-center text-cream/80">
                      <Star size={16} className="mr-2 text-gold" />
                      <span>{item.rating}/5</span>
                    </div>
                    <div className="flex items-center text-cream/80">
                      <Utensils size={16} className="mr-2" />
                      <span>{item.calories} cal</span>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-cream mb-3">Key Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient) => (
                        <Badge
                          key={ingredient}
                          variant="outline"
                          className="border-charcoal-600 text-cream/80"
                        >
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Allergens */}
                  {item.allergens.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-cream mb-3">Allergen Information</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen) => (
                          <Badge
                            key={allergen}
                            variant="destructive"
                            className="bg-red-900/50 text-red-200"
                          >
                            {allergen}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Chef */}
                  <div className="text-sm text-cream/60">
                    <span>Crafted by </span>
                    <span className="text-gold font-semibold">{item.chef}</span>
                  </div>
                </div>

                {/* Price and Order */}
                <div className="md:col-span-1">
                  <div className="bg-charcoal-700 p-6 rounded-xl border border-charcoal-600">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-gold mb-2">
                        ${item.price}
                      </div>
                      <p className="text-cream/60 text-sm">per serving</p>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600 mb-4">
                      Add to Order
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-cream text-cream hover:bg-cream hover:text-black"
                    >
                      Customize Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}