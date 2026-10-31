import { Routes, Route, Navigate } from "react-router-dom"
import { ROUTES } from "@/constants"
import { LoginPage } from "@/pages/LoginPage"
import { RegisterPage } from "@/pages/RegisterPage"
import { DashboardPage } from "@/pages/DashboardPage"
import { BookingsPage } from "@/pages/BookingsPage"
import { RoomsPage } from "@/pages/RoomsPage"
import { GuestsPage } from "@/pages/GuestsPage"
import { GuestDetailPage } from "@/pages/GuestDetailPage"

/**
 * Top-level application routing table
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

      {/* Authenticated Dashboard routes */}
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.BOOKINGS} element={<BookingsPage />} />
      <Route path={ROUTES.ROOMS} element={<RoomsPage />} />
      <Route path={ROUTES.GUESTS} element={<GuestsPage />} />
      <Route path={ROUTES.GUEST_DETAIL} element={<GuestDetailPage />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  )
}
