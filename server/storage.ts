import { 
  users, 
  reservations, 
  contacts, 
  newsletter,
  type User, 
  type InsertUser,
  type Reservation,
  type InsertReservation,
  type Contact,
  type InsertContact,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  subscribeNewsletter(email: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private contacts: Map<number, Contact>;
  private newsletter: Map<number, Newsletter>;
  private currentUserId: number;
  private currentReservationId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.contacts = new Map();
    this.newsletter = new Map();
    this.currentUserId = 1;
    this.currentReservationId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const reservation: Reservation = { 
      ...insertReservation, 
      id,
      specialRequests: insertReservation.specialRequests || null,
      createdAt: new Date()
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.newsletter.values()).find(
      (subscriber) => subscriber.email === insertNewsletter.email
    );
    
    if (existingSubscriber) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterId++;
    const subscriber: Newsletter = { 
      ...insertNewsletter, 
      id,
      subscribedAt: new Date()
    };
    this.newsletter.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletter.values());
  }
}

export const storage = new MemStorage();
