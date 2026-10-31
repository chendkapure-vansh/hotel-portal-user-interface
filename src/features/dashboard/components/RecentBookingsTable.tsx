import { Link } from "react-router-dom"
import { ArrowRight, User } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { StatusBadge } from "@/components/common/StatusBadge"
import { MOCK_BOOKINGS } from "@/data/mockData"
import { ROUTES } from "@/constants"
import { formatCurrency, formatDate } from "@/lib/utils"

/**
 * Recent bookings overview table for the dashboard
 * Converts to stacked cards on mobile screens for responsive readability
 */
export function RecentBookingsTable() {
  const recentBookings = MOCK_BOOKINGS.slice(0, 4)

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Recent Reservations
          </h3>
          <p className="text-xs text-slate-400">
            Latest guest check-ins and room allocations
          </p>
        </div>

        <Link
          to={ROUTES.BOOKINGS}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#557808] dark:text-[#C0E72B] hover:underline"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Desktop Table View (Hidden on mobile < 768px) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">Booking ID</th>
              <th className="py-3 px-3">Guest</th>
              <th className="py-3 px-3">Room</th>
              <th className="py-3 px-3">Dates</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
              >
                <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                  {booking.bookingCode}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2.5">
                    {booking.guestAvatar ? (
                      <img
                        src={booking.guestAvatar}
                        alt={booking.guestName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {booking.guestName}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {booking.guestPhone}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    Room {booking.roomNumber}
                  </div>
                  <div className="text-[11px] text-slate-400">{booking.roomType}</div>
                </td>
                <td className="py-3 px-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    {formatDate(booking.checkInDate)}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {booking.durationNights} nights
                  </div>
                </td>
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                  {formatCurrency(booking.totalPrice)}
                </td>
                <td className="py-3 px-3 text-right">
                  <StatusBadge status={booking.status} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards (Visible on screens < 768px) */}
      <div className="md:hidden space-y-3">
        {recentBookings.map((booking) => (
          <div
            key={booking.id}
            className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                {booking.bookingCode}
              </span>
              <StatusBadge status={booking.status} size="sm" />
            </div>

            <div className="flex items-center gap-2.5">
              <img
                src={booking.guestAvatar}
                alt={booking.guestName}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {booking.guestName}
                </div>
                <div className="text-[11px] text-slate-400">
                  Room {booking.roomNumber} • {booking.roomType}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500">
                {formatDate(booking.checkInDate)} ({booking.durationNights}n)
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                {formatCurrency(booking.totalPrice)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
