import { motion } from "framer-motion";
import { Award, Star, Users, Clock } from "lucide-react";
import { fadeInUp, scaleUp, staggerContainer } from "@/lib/animations";

interface Chef {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  achievements: string[];
  signature: string;
  description: string;
}

const chefs: Chef[] = [
  {
    id: 1,
    name: "Marcus Beaumont",
    title: "Executive Chef",
    specialty: "Modern French Fusion",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1583394293214-28a5b29f473e?w=400&h=500&fit=crop&crop=face",
    achievements: [
      "Michelin Star Winner 2023",
      "James Beard Award Nominee",
      "Culinary Institute of America Graduate"
    ],
    signature: "Moonlit Bouillabaisse",
    description: "Chef Marcus brings innovative French techniques to Luna Diner, creating culinary masterpieces that honor tradition while embracing creativity."
  },
  {
    id: 2,
    name: "Isabella Chen",
    title: "Pastry Chef",
    specialty: "Artisan Desserts",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face",
    achievements: [
      "World Pastry Championship Gold",
      "Featured in Pastry Arts Magazine",
      "Le Cordon Bleu Master"
    ],
    signature: "Celestial Chocolate Soufflé",
    description: "Isabella's desserts are works of art that perfectly balance flavor, texture, and visual appeal, ending every meal on a magical note."
  },
  {
    id: 3,
    name: "Alessandro Romano",
    title: "Sous Chef",
    specialty: "Mediterranean Cuisine",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=500&fit=crop&crop=face",
    achievements: [
      "Top Chef Season 18 Finalist",
      "Italian Culinary Institute Graduate",
      "Certified Sommelier"
    ],
    signature: "Tuscan Truffle Risotto",
    description: "Alessandro brings the warmth and authenticity of Mediterranean flavors to Luna Diner, creating dishes that transport guests to the Italian countryside."
  }
];

export default function ChefGallery() {
  return (
    <section className="py-20 bg-charcoal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
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
            Meet Our Culinary Masters
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            The talented chefs behind Luna Diner's extraordinary culinary experiences, 
            each bringing their unique expertise and passion to create unforgettable flavors
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-charcoal-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold/20 group"
            >
              {/* Chef Image */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {chef.experience}
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cream mb-1">{chef.name}</h3>
                <p className="text-gold font-medium mb-2">{chef.title}</p>
                <p className="text-gray-300 mb-4">{chef.specialty}</p>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {chef.description}
                </p>

                {/* Signature Dish */}
                <div className="mb-6">
                  <h4 className="text-cream font-semibold mb-2 flex items-center">
                    <Star className="w-4 h-4 text-gold mr-2" />
                    Signature Dish
                  </h4>
                  <p className="text-gold italic">{chef.signature}</p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-cream font-semibold flex items-center">
                    <Award className="w-4 h-4 text-gold mr-2" />
                    Achievements
                  </h4>
                  {chef.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="text-gray-300 text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleUp} className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">50+</div>
            <div className="text-gray-300">Combined Years Experience</div>
          </motion.div>
          <motion.div variants={scaleUp} className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">15</div>
            <div className="text-gray-300">Culinary Awards</div>
          </motion.div>
          <motion.div variants={scaleUp} className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">3</div>
            <div className="text-gray-300">Michelin Stars</div>
          </motion.div>
          <motion.div variants={scaleUp} className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-gray-300">Passion for Excellence</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}