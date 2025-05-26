import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollEffect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const scrollToTop = useScrollToTop();
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Failed to subscribe to newsletter",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.h3 
              className="font-dancing text-3xl text-gold font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Luna Diner
            </motion.h3>
            <p className="text-cream/80 mb-6 max-w-md">
              Where culinary artistry meets midnight elegance. Experience the magic of night dining at Luna Diner.
            </p>

            {/* Newsletter Subscription */}
            <div className="newsletter">
              <h4 className="font-semibold text-cream mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-charcoal-800 border-charcoal-800 text-cream rounded-r-none focus:border-gold focus:ring-gold"
                  required
                />
                <Button
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="bg-gold hover:bg-gold/90 text-black font-semibold rounded-l-none"
                >
                  {newsletterMutation.isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-cream/80">
              <li>123 Moonlight Avenue</li>
              <li>Starville, NY 10001</li>
              <li>(555) 123-LUNA</li>
              <li>hello@lunadiner.com</li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-cream mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="bg-charcoal-800 text-cream w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            &copy; 2024 Luna Diner. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/90 transition-all duration-300 mt-4 md:mt-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
