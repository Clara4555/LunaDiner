import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Reservation routes
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.json({ success: true, reservation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid reservation data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to create reservation" });
      }
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json({ success: true, reservations });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch reservations" });
    }
  });

  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to send message" });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contacts" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscriber = await storage.subscribeNewsletter(validatedData);
      res.json({ success: true, subscriber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid email format", details: error.errors });
      } else if (error instanceof Error && error.message === "Email already subscribed") {
        res.status(409).json({ success: false, error: "Email already subscribed" });
      } else {
        res.status(500).json({ success: false, error: "Failed to subscribe to newsletter" });
      }
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      res.json({ success: true, subscribers });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch newsletter subscribers" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
