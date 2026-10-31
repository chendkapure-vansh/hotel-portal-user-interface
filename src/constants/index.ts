/**
 * Application Constants
 * Keeps all string literals and configurations in one place to avoid magic values
 */

export const HOTEL_INFO = {
  name: "Vansh Grand",
  fullName: "Vansh Grand Hotel & Suites",
  tagline: "Experience luxury and comfort in every stay",
  location: "Candolim Beach Road, North Goa, India",
  phone: "+91 9130138944",
  email: "reservations@vanshgrand.in",
} as const

export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/",
  BOOKINGS: "/bookings",
  ROOMS: "/rooms",
  GUESTS: "/guests",
  GUEST_DETAIL: "/guests/:id",
} as const

export const BOOKING_STATUS = {
  CONFIRMED: "Confirmed",
  PENDING: "Pending",
  CANCELLED: "Cancelled",
  CHECKED_IN: "Checked In",
} as const

export type BookingStatusType = (typeof BOOKING_STATUS)[keyof typeof BOOKING_STATUS]

export const ROOM_STATUS = {
  AVAILABLE: "Available",
  OCCUPIED: "Occupied",
  MAINTENANCE: "Maintenance",
} as const

export type RoomStatusType = (typeof ROOM_STATUS)[keyof typeof ROOM_STATUS]

export const ROOM_TYPES = {
  DELUXE: "Deluxe Room",
  SUITE: "Executive Suite",
  PRESIDENTIAL: "Presidential Villa",
  SUPERIOR: "Superior King",
} as const

export const GUEST_MEMBERSHIPS = {
  PLATINUM: "Platinum Member",
  GOLD: "Gold Member",
  SILVER: "Silver Member",
  STANDARD: "Standard Guest",
} as const
