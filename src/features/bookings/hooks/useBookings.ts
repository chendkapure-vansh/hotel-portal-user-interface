import { useState, useMemo } from "react"
import { toast } from "sonner"
import { Booking } from "@/types"
import { MOCK_BOOKINGS } from "@/data/mockData"
import { BookingStatusType } from "@/constants"
import { useDebounce } from "@/hooks/useDebounce"

/**
 * Custom hook to filter, search, and manage hotel bookings
 */
export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("All")
  const [dateFilter, setDateFilter] = useState<string>("all")

  // Debounce search query so filtering isn't executed on every single keystroke
  const debouncedSearch = useDebounce(searchQuery, 250)

  // Filter bookings based on search text and status
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      // Status filter check
      const matchesStatus =
        statusFilter === "All" || b.status.toLowerCase() === statusFilter.toLowerCase()

      // Search query check against guest name, booking code, and room
      const query = debouncedSearch.toLowerCase().trim()
      const matchesSearch =
        !query ||
        b.guestName.toLowerCase().includes(query) ||
        b.bookingCode.toLowerCase().includes(query) ||
        b.roomNumber.includes(query) ||
        b.roomType.toLowerCase().includes(query)

      return matchesStatus && matchesSearch
    })
  }, [bookings, debouncedSearch, statusFilter])

  /**
   * Updates a booking status with toast feedback
   */
  const updateBookingStatus = (bookingId: string, newStatus: BookingStatusType) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === bookingId ? { ...item, status: newStatus } : item
      )
    )
    toast.success(`Booking status changed to ${newStatus}`)
  }

  return {
    bookings: filteredBookings,
    totalCount: bookings.length,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    updateBookingStatus,
  }
}
