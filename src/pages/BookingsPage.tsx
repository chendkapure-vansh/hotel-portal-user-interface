import { Calendar, Plus } from "lucide-react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { PageHeader } from "@/components/common/PageHeader"
import { Button } from "@/components/ui/Button"
import { BookingsTable } from "@/features/bookings/components/BookingsTable"

/**
 * Bookings Page composing BookingsTable and Header
 */
export function BookingsPage() {
  return (
    <DashboardLayout breadcrumbTitle="Reservations" breadcrumbCategory="Booking Management">
      <PageHeader
        title="Reservations & Bookings"
        subtitle="Manage guest reservations, room assignments, and check-in statuses."
        action={
          <>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
            >
              Date Filter
            </Button>
            <Button
              size="sm"
              leftIcon={<Plus className="w-3.5 h-3.5" />}
            >
              Add Booking
            </Button>
          </>
        }
      />

      <BookingsTable />
    </DashboardLayout>
  )
}
