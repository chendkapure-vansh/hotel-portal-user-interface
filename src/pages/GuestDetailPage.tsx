import { useParams } from "react-router-dom"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { GuestProfileView } from "@/features/guests/components/GuestProfileView"
import { MOCK_GUESTS, MOCK_BOOKINGS } from "@/data/mockData"

/**
 * Guest Detail Page showing rich profile information and historical reservations
 */
export function GuestDetailPage() {
  const { id } = useParams<{ id: string }>()

  // Find guest or fallback to Angus Copper
  const guest = MOCK_GUESTS.find((g) => g.id === id) || MOCK_GUESTS[0]

  // Filter bookings for this guest
  const guestBookings = MOCK_BOOKINGS.filter((b) => b.guestId === guest.id)
  const activeBooking = guestBookings[0]

  return (
    <DashboardLayout
      breadcrumbTitle="Guest Profile"
      breadcrumbCategory={guest.fullName}
    >
      <GuestProfileView
        guest={guest}
        activeBooking={activeBooking}
        historyBookings={guestBookings}
      />
    </DashboardLayout>
  )
}
