import { BookingStatusType, RoomStatusType } from "../constants"

/**
 * User account representation for authentication
 */
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "receptionist"
  avatarUrl?: string
}

/**
 * Single booking record
 */
export interface Booking {
  id: string
  bookingCode: string
  guestId: string
  guestName: string
  guestEmail: string
  guestPhone: string
  guestAvatar?: string
  roomNumber: string
  roomType: string
  roomImage: string
  checkInDate: string
  checkOutDate: string
  status: BookingStatusType
  totalPrice: number
  paidAmount: number
  adultsCount: number
  durationNights: number
  bookingDate: string
  specialRequests?: string
}

/**
 * Hotel room details
 */
export interface Room {
  id: string
  roomNumber: string
  name: string
  type: string
  pricePerNight: number
  status: RoomStatusType
  capacityAdults: number
  sizeSquareMeters: number
  bedType: string
  imageUrl: string
  amenities: string[]
  floor: number
}

/**
 * Guest personal profile and history
 */
export interface Guest {
  id: string
  fullName: string
  code: string
  email: string
  phone: string
  avatarUrl: string
  birthDate: string
  gender: "Male" | "Female" | "Other"
  nationality: string
  passportNumber: string
  membershipTier: string
  pointsBalance: number
  tierLevel: string
  specialAmenities: string[]
  transportationNotes: string
  internalNotes: string
  totalStays: number
  totalSpent: number
}

/**
 * Metric card data for dashboard
 */
export interface DashboardMetric {
  id: string
  title: string
  value: number | string
  changePercentage: number
  isPositiveChange: boolean
  prefix?: string
  suffix?: string
  iconName: string
}
