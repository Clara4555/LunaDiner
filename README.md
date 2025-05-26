# 🌙 Luna Diner - Premium Restaurant Website

A stunning restaurant website built with React, TypeScript, and Framer Motion featuring elegant animations, responsive design, and a complete dining experience.

## ✨ Features

- **Elegant Design**: Dark theme with gold accents and premium typography
- **Advanced Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Perfect on all devices (mobile, tablet, desktop)
- **Interactive Menu**: Detailed modal popups with ingredients and chef info
- **Image Gallery**: Filterable gallery with lightbox functionality
- **Authentication**: Simple login/signup system
- **Contact Forms**: Reservation and contact forms with validation
- **Newsletter**: Email subscription system
- **No External Dependencies**: Uses in-memory storage (dummy data only)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- No database setup required - everything uses dummy data!

### Installation & Setup

1. **Clone/Download the project**
   ```bash
   # If you have git
   git clone [repository-url]
   cd luna-diner

   # Or download and extract the project files
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to: `http://localhost:5000`
   - The website should load immediately!

## 📁 Project Structure

```
luna-diner/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                # Backend Express server
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   └── storage.ts        # In-memory data storage
├── shared/               # Shared types and schemas
└── package.json         # Dependencies and scripts
```

## 🎯 Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm start` - Start production server

## 🔧 Technical Details

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js with TypeScript
- **Storage**: In-memory storage (no database needed)
- **Authentication**: Simple username/password system
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions

## 🎨 Design System

- **Colors**: Dark charcoal backgrounds with gold accents
- **Typography**: Playfair Display (headings), Inter (body), Dancing Script (logo)
- **Theme**: Elegant nighttime dining atmosphere

## 📱 Pages Included

1. **Home** - Hero section, featured dishes, testimonials, stats
2. **Menu** - Categorized dishes with detailed modal popups
3. **About** - Chef profiles, timeline, company values
4. **Reservations** - Table booking form with validation
5. **Gallery** - Filterable image gallery with lightbox
6. **Contact** - Contact form, location info, social media
7. **Login/Signup** - User authentication pages

## 🔐 Test Accounts

Since we use dummy data, you can create any account:
- Username: `testuser`
- Password: `password123`

Or create a new account through the signup page!

## 🚫 What You DON'T Need

- ❌ PostgreSQL or any database
- ❌ Environment variables or API keys
- ❌ Docker or containerization
- ❌ External services setup

## 🔧 Troubleshooting

### Port Already in Use
If port 5000 is busy:
```bash
# Kill the process using port 5000
npx kill-port 5000
npm run dev
```

### Node.js Version Issues
Make sure you have Node.js 18 or higher:
```bash
node --version
# Should show v18.x.x or higher
```

### Dependencies Installation Issues
Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is for educational/demonstration purposes.

## 🎉 Enjoy!

The Luna Diner website is ready to run immediately with no external setup required. All data is dummy/mock data stored in memory, making it perfect for development and demonstration!