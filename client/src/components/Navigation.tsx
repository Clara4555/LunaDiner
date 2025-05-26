import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { slideDown, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isScrolled = useScrollEffect();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"
      }`}
      {...slideDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.h1 
              className="font-dancing text-3xl text-gold font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Luna Diner
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex items-center space-x-8" {...fadeIn}>
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 hover:text-gold hover:border-gold ${
                    location === link.href
                      ? "text-gold border-gold"
                      : "text-cream border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Auth Links */}
            <div className="flex items-center space-x-4 ml-8">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cream text-cream hover:bg-cream hover:text-black"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gold text-black hover:bg-gold/90"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-cream hover:text-gold focus:outline-none focus:text-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                      location === link.href ? "text-gold" : "text-cream hover:text-gold"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Auth Links */}
              <div className="border-t border-charcoal-600 pt-4 mt-4 space-y-2">
                <Link href="/login">
                  <button
                    className="block w-full text-left px-3 py-2 text-base font-medium text-cream hover:text-gold transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup">
                  <button
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
