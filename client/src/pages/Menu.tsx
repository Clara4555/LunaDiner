import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MenuModal from "@/components/MenuModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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

const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: "Midnight Eggs Benedict",
    description: "Perfectly poached eggs on artisan brioche with hollandaise sauce, accompanied by crispy pancetta and fresh herbs",
    price: 18,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "breakfast",
    prepTime: "15 mins",
    rating: 4.8,
    ingredients: ["Free-range eggs", "Artisan brioche", "Pancetta", "Hollandaise sauce", "Fresh chives"],
    allergens: ["Eggs", "Gluten", "Dairy"],
    calories: 520,
    chef: "Chef Marcus Luna"
  },
  {
    id: "2",
    name: "Cosmic Pancakes",
    description: "Fluffy blueberry pancakes with maple syrup, whipped cream, and a touch of vanilla bean",
    price: 15,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "breakfast",
    prepTime: "12 mins",
    rating: 4.9,
    ingredients: ["Organic flour", "Fresh blueberries", "Maple syrup", "Vanilla bean", "Whipped cream"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    calories: 480,
    chef: "Chef Isabella Star"
  },
  {
    id: "3",
    name: "Luna Morning Bowl",
    description: "Quinoa and steel-cut oats with seasonal fruits, nuts, and honey drizzle",
    price: 14,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "breakfast",
    prepTime: "10 mins",
    rating: 4.6,
    ingredients: ["Quinoa", "Steel-cut oats", "Seasonal fruits", "Mixed nuts", "Local honey"],
    allergens: ["Nuts"],
    calories: 320,
    chef: "Chef Diego Night"
  },

  // Lunch
  {
    id: "4",
    name: "Luna Garden Salad",
    description: "Fresh mixed greens with moon-dried tomatoes, starlight vinaigrette, and artisanal cheese",
    price: 16,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "lunch",
    prepTime: "8 mins",
    rating: 4.7,
    ingredients: ["Mixed greens", "Sun-dried tomatoes", "Goat cheese", "Walnuts", "Balsamic reduction"],
    allergens: ["Dairy", "Nuts"],
    calories: 280,
    chef: "Chef Marcus Luna"
  },
  {
    id: "5",
    name: "Moonbeam Sandwich",
    description: "Grilled chicken with avocado, bacon, and herb aioli on sourdough bread",
    price: 19,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "lunch",
    prepTime: "18 mins",
    rating: 4.8,
    ingredients: ["Grilled chicken", "Avocado", "Bacon", "Herb aioli", "Sourdough bread"],
    allergens: ["Gluten", "Eggs"],
    calories: 620,
    chef: "Chef Diego Night"
  },
  {
    id: "6",
    name: "Stellar Soup",
    description: "Roasted tomato and basil soup with truffle oil and parmesan crisps",
    price: 13,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "lunch",
    prepTime: "5 mins",
    rating: 4.5,
    ingredients: ["Roasted tomatoes", "Fresh basil", "Truffle oil", "Parmesan", "Cream"],
    allergens: ["Dairy"],
    calories: 240,
    chef: "Chef Isabella Star"
  },

  // Dinner
  {
    id: "7",
    name: "Midnight Ribeye",
    description: "Prime cut ribeye with truffle butter, seasonal vegetables, and red wine reduction",
    price: 42,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "dinner",
    prepTime: "25 mins",
    rating: 4.9,
    ingredients: ["Prime ribeye", "Truffle butter", "Seasonal vegetables", "Red wine", "Fresh herbs"],
    allergens: ["Dairy"],
    calories: 780,
    chef: "Chef Marcus Luna"
  },
  {
    id: "8",
    name: "Lunar Salmon",
    description: "Atlantic salmon with lemon dill sauce, wild rice, and grilled asparagus",
    price: 32,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "dinner",
    prepTime: "20 mins",
    rating: 4.7,
    ingredients: ["Atlantic salmon", "Lemon dill sauce", "Wild rice", "Asparagus", "Capers"],
    allergens: ["Fish", "Dairy"],
    calories: 580,
    chef: "Chef Diego Night"
  },
  {
    id: "9",
    name: "Celestial Pasta",
    description: "Handmade linguine with lobster, cherry tomatoes, and white wine cream sauce",
    price: 38,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "dinner",
    prepTime: "22 mins",
    rating: 4.8,
    ingredients: ["Fresh linguine", "Lobster", "Cherry tomatoes", "White wine", "Cream"],
    allergens: ["Gluten", "Shellfish", "Dairy"],
    calories: 690,
    chef: "Chef Isabella Star"
  },

  // Desserts
  {
    id: "10",
    name: "Stellar Chocolate Soufflé",
    description: "Rich dark chocolate soufflé with vanilla bean ice cream and gold leaf",
    price: 14,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "desserts",
    prepTime: "25 mins",
    rating: 4.9,
    ingredients: ["Dark chocolate", "Vanilla bean ice cream", "Eggs", "Sugar", "Gold leaf"],
    allergens: ["Eggs", "Dairy"],
    calories: 420,
    chef: "Chef Isabella Star"
  },
  {
    id: "11",
    name: "Luna Tiramisu",
    description: "Classic tiramisu with espresso-soaked ladyfingers and mascarpone cream",
    price: 12,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "desserts",
    prepTime: "5 mins",
    rating: 4.8,
    ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Cocoa powder", "Coffee liqueur"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    calories: 380,
    chef: "Chef Marcus Luna"
  },
  {
    id: "12",
    name: "Moonlight Cheesecake",
    description: "New York style cheesecake with berry compote and graham cracker crust",
    price: 11,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "desserts",
    prepTime: "5 mins",
    rating: 4.6,
    ingredients: ["Cream cheese", "Berry compote", "Graham crackers", "Vanilla", "Sour cream"],
    allergens: ["Dairy", "Gluten", "Eggs"],
    calories: 450,
    chef: "Chef Diego Night"
  },

  // Drinks
  {
    id: "13",
    name: "Moonlight Martini",
    description: "House-infused gin with elderflower, lavender, and a twist of lemon",
    price: 16,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "drinks",
    prepTime: "3 mins",
    rating: 4.9,
    ingredients: ["Premium gin", "Elderflower liqueur", "Lavender syrup", "Lemon twist", "Ice"],
    allergens: [],
    calories: 180,
    chef: "Bar Chef Luna"
  },
  {
    id: "14",
    name: "Stellar Wine Selection",
    description: "Curated selection of premium wines from our cellar, perfectly paired with your meal",
    price: 24,
    image: "https://images.unsplash.com/photo-1506377247379-e4b91653b1b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "drinks",
    prepTime: "2 mins",
    rating: 4.7,
    ingredients: ["Premium wine", "Curated selection"],
    allergens: ["Sulfites"],
    calories: 120,
    chef: "Sommelier Star"
  },
  {
    id: "15",
    name: "Cosmic Coffee",
    description: "Single-origin espresso with steamed milk and a touch of cinnamon",
    price: 8,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "drinks",
    prepTime: "4 mins",
    rating: 4.5,
    ingredients: ["Single-origin espresso", "Steamed milk", "Cinnamon", "Sugar"],
    allergens: ["Dairy"],
    calories: 150,
    chef: "Barista Night"
  },

  // Asian Fusion
  {
    id: "16",
    name: "Miso Black Cod",
    description: "Melt-in-your-mouth black cod marinated in sweet miso, served with pickled vegetables and jasmine rice",
    price: 38,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "asian",
    prepTime: "25 mins",
    rating: 4.9,
    ingredients: ["Black cod", "Sweet miso", "Mirin", "Sake", "Pickled vegetables", "Jasmine rice"],
    allergens: ["Fish", "Soy"],
    calories: 420,
    chef: "Chef Akira Moon"
  },
  {
    id: "17",
    name: "Korean BBQ Wagyu",
    description: "Premium wagyu beef with Korean bulgogi marinade, kimchi, and steamed buns",
    price: 42,
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "asian",
    prepTime: "20 mins",
    rating: 4.8,
    ingredients: ["Wagyu beef", "Bulgogi marinade", "Kimchi", "Steamed buns", "Sesame oil"],
    allergens: ["Soy", "Gluten", "Sesame"],
    calories: 580,
    chef: "Chef Akira Moon"
  },
  {
    id: "18",
    name: "Thai Coconut Curry",
    description: "Aromatic red curry with prawns, Thai basil, and coconut milk, served with fragrant rice",
    price: 28,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "asian",
    prepTime: "18 mins",
    rating: 4.7,
    ingredients: ["Tiger prawns", "Red curry paste", "Coconut milk", "Thai basil", "Jasmine rice"],
    allergens: ["Shellfish"],
    calories: 380,
    chef: "Chef Akira Moon"
  },

  // Mediterranean
  {
    id: "19",
    name: "Lamb Moussaka",
    description: "Traditional Greek layered dish with lamb, eggplant, and béchamel sauce",
    price: 32,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc63d1bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "mediterranean",
    prepTime: "35 mins",
    rating: 4.6,
    ingredients: ["Ground lamb", "Eggplant", "Béchamel sauce", "Tomatoes", "Herbs"],
    allergens: ["Dairy", "Gluten"],
    calories: 520,
    chef: "Chef Sofia Ocean"
  },
  {
    id: "20",
    name: "Grilled Octopus",
    description: "Tender octopus with olive oil, lemon, capers, and roasted vegetables",
    price: 36,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "mediterranean",
    prepTime: "30 mins",
    rating: 4.9,
    ingredients: ["Fresh octopus", "Extra virgin olive oil", "Lemon", "Capers", "Mediterranean vegetables"],
    allergens: [],
    calories: 320,
    chef: "Chef Sofia Ocean"
  },
  {
    id: "21",
    name: "Paella Valenciana",
    description: "Traditional Spanish rice dish with saffron, chicken, rabbit, and green beans",
    price: 45,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "mediterranean",
    prepTime: "40 mins",
    rating: 4.8,
    ingredients: ["Bomba rice", "Saffron", "Chicken", "Rabbit", "Green beans", "Paprika"],
    allergens: [],
    calories: 480,
    chef: "Chef Sofia Ocean"
  },

  // Latin American
  {
    id: "22",
    name: "Argentinian Ribeye",
    description: "Grass-fed ribeye steak with chimichurri sauce and grilled vegetables",
    price: 48,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "latin",
    prepTime: "25 mins",
    rating: 4.9,
    ingredients: ["Grass-fed ribeye", "Chimichurri", "Grilled vegetables", "Sea salt"],
    allergens: [],
    calories: 620,
    chef: "Chef Carlos Sol"
  },
  {
    id: "23",
    name: "Ceviche Mixto",
    description: "Fresh fish and prawns marinated in lime juice with red onions and cilantro",
    price: 26,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "latin",
    prepTime: "15 mins",
    rating: 4.8,
    ingredients: ["Fresh fish", "Tiger prawns", "Lime juice", "Red onions", "Cilantro", "Aji peppers"],
    allergens: ["Fish", "Shellfish"],
    calories: 220,
    chef: "Chef Carlos Sol"
  },
  {
    id: "24",
    name: "Empanadas de Carne",
    description: "Handmade pastries filled with spiced beef, onions, and hard-boiled eggs",
    price: 18,
    image: "https://images.unsplash.com/photo-1625947030309-08e46c8f56b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "latin",
    prepTime: "20 mins",
    rating: 4.7,
    ingredients: ["Ground beef", "Onions", "Hard-boiled eggs", "Pastry dough", "Spices"],
    allergens: ["Gluten", "Eggs"],
    calories: 380,
    chef: "Chef Carlos Sol"
  }
];

const categories = [
  { id: "all", name: "All Dishes" },
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" },
  { id: "asian", name: "Asian Fusion" },
  { id: "mediterranean", name: "Mediterranean" },
  { id: "latin", name: "Latin American" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-charcoal-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Culinary
            </motion.span>{" "}
            <motion.span
              className="inline-block text-gold"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Artistry
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Embark on a gastronomic journey where every dish is a masterpiece, 
            carefully crafted with passion, precision, and the finest ingredients
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-cream/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.span
              className="bg-charcoal-700 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--gold-400))", color: "hsl(var(--charcoal-900))" }}
              transition={{ duration: 0.3 }}
            >
              ✨ Chef's Specials
            </motion.span>
            <motion.span
              className="bg-charcoal-700 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--gold-400))", color: "hsl(var(--charcoal-900))" }}
              transition={{ duration: 0.3 }}
            >
              🌱 Farm-to-Table
            </motion.span>
            <motion.span
              className="bg-charcoal-700 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--gold-400))", color: "hsl(var(--charcoal-900))" }}
              transition={{ duration: 0.3 }}
            >
              🍷 Wine Pairing Available
            </motion.span>
          </motion.div>
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
                <Card className="bg-charcoal-700 border-charcoal-600 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative" onClick={() => openModal(item)}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gold text-black font-semibold">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-playfair text-xl font-semibold text-cream">
                        {item.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="text-gold fill-current mr-1" size={16} />
                        <span className="text-cream/80 text-sm">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-cream/80 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-cream/60 text-sm">
                        <Clock size={14} className="mr-1" />
                        <span>{item.prepTime}</span>
                      </div>
                      <span className="text-cream/60 text-sm">{item.calories} cal</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gold font-semibold text-lg">
                        ${item.price}
                      </span>
                      <Button 
                        className="bg-gold text-black hover:bg-gold/90"
                        onClick={() => openModal(item)}
                      >
                        View Details
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
      
      {/* Menu Modal */}
      <MenuModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={closeModal}
      />
    </div>
  );
}
