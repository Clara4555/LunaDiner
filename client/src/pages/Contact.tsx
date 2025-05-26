import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "123 Moonlight Avenue, Starville, NY 10001"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-LUNA"
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@lunadiner.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sun: 5:00 PM - 12:00 AM"
  }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" }
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Message Failed",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" {...fadeInUp}>
              <motion.div {...staggerContainer}>
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center mb-6"
                    {...fadeInUp}
                  >
                    <div className="bg-gold text-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream text-lg">{info.title}</h3>
                      <p className="text-cream/80">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media */}
              <motion.div {...fadeInUp}>
                <h3 className="font-playfair text-2xl font-semibold text-cream mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="bg-charcoal-700 text-cream w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-charcoal-700 border-charcoal-600 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-cream mb-6">
                    Send us a Message
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cream/80">First Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="First name"
                                  className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cream/80">Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Last name"
                                  className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="your@email.com"
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Subject</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Message subject"
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Your message..."
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                                rows={4}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
