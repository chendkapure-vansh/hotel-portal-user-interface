# Vansh Grand Hotel & Suites - Management Portal

A modern, responsive Hotel Booking & Management web application built with **React, Vite, TypeScript, and Tailwind CSS**.

The interface is styled with a light gray background, 12px rounded cards, soft shadows, and lime/green accents, directly inspired by luxury resort hospitality platforms.

---

## 🌟 Key Features

1. **Split Authentication Layout**
   - **Login Page**: Split layout with member/staff login form on the left, and high-resolution hotel photo carousel on the right with slow crossfade transitions.
   - **Register Page**: Clean multi-field registration with Zod validation (name, email, phone, password matching, terms agreement).

2. **Dashboard Home**
   - 4 animated stat cards with count-up animations:
     - Total Bookings: `248` (+12.5%)
     - Occupancy Rate: `82%` (+4.2%)
     - Monthly Revenue: `$24,500` (+8.7%)
     - Check-ins Today: `18` (-2.1%)
   - **Revenue Analytics**: Interactive line/area chart showing monthly progression.
   - **Weekly Occupancy**: Bar chart highlighting weekend peak occupancy.
   - **Recent Reservations**: Live table with guest avatars, room allocations, and status pills.

3. **Bookings Management**
   - Filter by status (`All`, `Confirmed`, `Pending`, `Cancelled`).
   - Instant search across guest name, room number, or booking reference code.
   - Interactive status updates (Confirm or Cancel) with Sonner toast feedback.
   - Responsive design: converts to stacked mobile cards on narrow screens.

4. **Rooms Catalog**
   - Filterable room grid by category (`Deluxe`, `Suite`, `Superior`, `Villa`) and occupancy status.
   - Room cards displaying room photos, size (`m²`), bed configurations, guest capacity, and amenities.
   - Real-time toggle between `Available` and `Occupied`.

5. **Guest Profiles & Stay History**
   - Dedicated guest profile matching the Lodgify style reference.
   - Guest loyalty membership status with lime highlight (`Platinum Member`, 15,000 points).
   - Stay details breakdown, special amenities checklist, and corporate invoice notes.
   - Complete past booking history table.

6. **Responsiveness & Aesthetics**
   - Fully optimized for `375px` (mobile), `768px` (tablet), and `1280px` (desktop).
   - Sidebar transforms into an ergonomic bottom navigation bar on mobile devices.
   - Dark mode toggle with persistent `localStorage` preference.
   - Zero horizontal scroll, all tap targets $\ge 44\text{px}$.
   - Respects `prefers-reduced-motion` for accessibility.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8 + TypeScript
- **Styling**: Tailwind CSS 3 + Montserrat Google Font
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Forms & Validation**: React Hook Form + Zod
- **Notifications**: Sonner

---

## 📂 Folder Structure

```
src/
├── assets/            Static assets and logos
├── components/
│   ├── ui/            Base primitives (Button, Input, Card, Badge, Skeleton)
│   ├── common/        Shared components (StatCard, StatusBadge, PageHeader, EmptyState)
│   └── layout/        AuthLayout, DashboardLayout, Sidebar, Topbar, BottomNav
├── features/          Feature modules
│   ├── auth/          (components, hooks, schemas, services)
│   ├── dashboard/     (components, charts, metrics)
│   ├── bookings/      (components, hooks)
│   ├── rooms/         (components, hooks)
│   └── guests/        (components)
├── pages/             Route-level pages (Login, Register, Dashboard, Bookings, Rooms, Guests)
├── hooks/             Shared custom hooks (useLocalStorage, useDarkMode, useMediaQuery, useDebounce)
├── services/          Data & API service layer
├── data/              Mock dummy data (bookings, rooms, guests, metrics)
├── lib/               Utility helpers (cn, formatCurrency, formatDate)
├── constants/         Routes, statuses, hotel configuration
├── types/             TypeScript interfaces & types
├── routes/            Router configuration
└── styles/            Tailwind globals and design tokens
```

---

## 🚀 How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

The app will run locally at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory.
