import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { fadeInUp } from "@/lib/animations";
import { Check } from "lucide-react";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
];

const guestOptions = [
  "1 Guest", "2 Guests", "3 Guests", "4 Guests", 
  "5 Guests", "6 Guests", "7 Guests", "8+ Guests"
];

export default function Reservations() {
  const { toast } = useToast();
  
  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      date: "",
      time: "",
      guests: 2,
      specialRequests: "",
    },
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      return apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed!",
        description: "We've received your reservation and will contact you shortly.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Reservation Failed",
        description: error.message || "Failed to make reservation",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertReservation) => {
    reservationMutation.mutate(data);
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
            Make a Reservation
          </motion.h1>
          <motion.p
            className="text-xl text-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Secure your table for an unforgettable dining experience
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <motion.div {...fadeInUp}>
              <Card className="bg-charcoal-700 border-charcoal-600 shadow-2xl">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter your full name"
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                                placeholder="Enter your email"
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cream/80">Date</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="date"
                                  className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cream/80">Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold">
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-charcoal-800 border-charcoal-600">
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time} className="text-cream focus:bg-gold focus:text-black">
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Number of Guests</FormLabel>
                            <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold">
                                  <SelectValue placeholder="Select guests" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-charcoal-800 border-charcoal-600">
                                {guestOptions.map((option, index) => (
                                  <SelectItem key={option} value={(index + 1).toString()} className="text-cream focus:bg-gold focus:text-black">
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cream/80">Special Requests</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Any special dietary requirements or requests?"
                                className="bg-charcoal-800 border-charcoal-600 text-cream focus:border-gold focus:ring-gold"
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={reservationMutation.isPending}
                        className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600"
                      >
                        {reservationMutation.isPending ? "Reserving..." : "Reserve Table"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Reservation Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="reservation-image">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Elegant Dining Setup"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>

              <Card className="bg-charcoal-700 border-charcoal-600">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-cream mb-4">
                    Reservation Policy
                  </h3>
                  <ul className="space-y-3 text-cream/80">
                    <li className="flex items-start">
                      <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                      <span>Reservations recommended for dinner service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                      <span>24-hour cancellation policy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                      <span>Smart casual dress code</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                      <span>Special dietary accommodations available</span>
                    </li>
                  </ul>
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
