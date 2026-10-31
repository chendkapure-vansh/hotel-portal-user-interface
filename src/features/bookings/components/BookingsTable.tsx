import { Search, Calendar, Check, X, Eye } from "lucide-react"
import { Link } from "react-router-dom"
import { Card } from "@/components/ui/Card"
import { StatusBadge } from "@/components/common/StatusBadge"
import { EmptyState } from "@/components/common/EmptyState"
import { BOOKING_STATUS } from "@/constants"
import { formatCurrency, formatDate } from "@/lib/utils"
import { useBookings } from "../hooks/useBookings"

/**
 * Full Bookings Table with filters and mobile cards
 * Design reference: Image 2 Booking History Table
 */
export function BookingsTable() {
  const {
    bookings,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    updateBookingStatus,
  } = useBookings()

  const filterOptions = ["All", "Confirmed", "Pending", "Cancelled"]

  return (
    <Card className="p-5">
      {/* Top Controls: Search and Status Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by guest, code, or room..."
            className="w-full h-11 pl-10 pr-4 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0E72B] text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all min-h-[44px]"
          />
        </div>

        {/* Status Filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {filterOptions.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap min-h-[40px] ${
                statusFilter === status
                  ? "bg-[#C0E72B] text-[#1E3A1E] font-bold shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Early exit: Empty state */}
      {bookings.length === 0 ? (
        <EmptyState
          title="No reservations found"
          description="Try adjusting your search terms or filters to find what you are looking for."
          actionLabel="Clear Filters"
          onAction={() => {
            setSearchQuery("")
            setStatusFilter("All")
          }}
        />
      ) : (
        <>
          {/* Desktop Table View (Hidden on mobile < 768px) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-3">Room Image</th>
                  <th className="py-3 px-3">Booking ID</th>
                  <th className="py-3 px-3">Guest Details</th>
                  <th className="py-3 px-3">Room</th>
                  <th className="py-3 px-3">Check-In</th>
                  <th className="py-3 px-3">Check-Out</th>
                  <th className="py-3 px-3">Price</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3 px-3">
                      <img
                        src={booking.roomImage}
                        alt={booking.roomType}
                        className="w-14 h-10 rounded-lg object-cover ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                      />
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                      {booking.bookingCode}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {booking.guestName}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {booking.guestEmail}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        Room {booking.roomNumber}
                      </span>
                      <div className="text-[11px] text-slate-400">{booking.roomType}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-800 dark:text-slate-200 font-medium">
                        {formatDate(booking.checkInDate)}
                      </div>
                      <div className="text-[11px] text-slate-400">1:45 PM</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-800 dark:text-slate-200 font-medium">
                        {formatDate(booking.checkOutDate)}
                      </div>
                      <div className="text-[11px] text-slate-400">11:45 AM</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-extrabold text-slate-900 dark:text-white">
                        {formatCurrency(booking.totalPrice)}
                      </div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                        Paid Full
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge status={booking.status} size="sm" />
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          to={`/guests/${booking.guestId}`}
                          title="View Guest Profile"
                          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        {booking.status === BOOKING_STATUS.PENDING && (
                          <button
                            onClick={() =>
                              updateBookingStatus(booking.id, BOOKING_STATUS.CONFIRMED)
                            }
                            title="Confirm Booking"
                            className="p-2 rounded-lg bg-[#C0E72B]/20 text-[#3D5608] hover:bg-[#C0E72B] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {booking.status !== BOOKING_STATUS.CANCELLED && (
                          <button
                            onClick={() =>
                              updateBookingStatus(booking.id, BOOKING_STATUS.CANCELLED)
                            }
                            title="Cancel Booking"
                            className="p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards (Visible on screens < 768px) */}
          <div className="md:hidden space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={booking.roomImage}
                      alt={booking.roomType}
                      className="w-12 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">
                        {booking.bookingCode}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Room {booking.roomNumber} ({booking.roomType})
                      </div>
                    </div>
                  </div>
                  <StatusBadge status={booking.status} size="sm" />
                </div>

                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold">{booking.guestName}</span>
                  <span className="text-slate-400 ml-1.5">• {booking.guestPhone}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-y border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                    </span>
                  </div>
                  <div className="font-extrabold text-slate-900 dark:text-white">
                    {formatCurrency(booking.totalPrice)}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <Link
                    to={`/guests/${booking.guestId}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 min-h-[44px] flex items-center"
                  >
                    View Guest
                  </Link>
                  {booking.status === BOOKING_STATUS.PENDING && (
                    <button
                      onClick={() =>
                        updateBookingStatus(booking.id, BOOKING_STATUS.CONFIRMED)
                      }
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#C0E72B] text-[#1E3A1E] min-h-[44px] flex items-center"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Card>
  )
}
