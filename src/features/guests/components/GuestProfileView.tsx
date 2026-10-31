import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Award,
  Check,
  Maximize2,
  Bed,
  Users,
  Search,
} from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Guest, Booking } from "@/types"
import { formatDate } from "@/lib/utils"
import { ROUTES } from "@/constants"

interface GuestProfileViewProps {
  guest: Guest
  activeBooking?: Booking
  historyBookings: Booking[]
}

/**
 * Detailed Guest Profile and Stay History View
 * Faithfully matches Reference Image 2 layout, cards, and lime accents
 */
export function GuestProfileView({
  guest,
  activeBooking,
  historyBookings,
}: GuestProfileViewProps) {
  return (
    <div className="space-y-6">
      {/* Back button and page breadcrumbs */}
      <div className="flex items-center gap-3">
        <Link
          to={ROUTES.GUESTS}
          className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Guest Profile
          </h1>
          <div className="text-xs text-slate-400">
            Reservation / <span className="text-[#5D7F07] dark:text-[#C0E72B] font-medium">{guest.fullName}</span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Profile Section matching Reference Image 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Column 1: Personal Profile (4 cols) */}
        <Card className="p-6 lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Profile
              </span>
              <span className="text-xs font-semibold text-slate-400 cursor-pointer">•••</span>
            </div>

            {/* Avatar & Name */}
            <div className="flex items-center gap-4 my-5">
              <img
                src={guest.avatarUrl}
                alt={guest.fullName}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-[#C0E72B]/40"
              />
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {guest.fullName}
                </h2>
                <div className="text-xs text-slate-400 mt-0.5">{guest.code}</div>
              </div>
            </div>

            {/* Contact Pills */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{guest.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{guest.email}</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Personal Information
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Date of Birth</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {guest.birthDate}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Gender</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {guest.gender}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Nationality</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {guest.nationality}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Passport No.</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {guest.passportNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Loyalty Program Section */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Loyalty Program
            </div>
            <div className="p-3 rounded-xl bg-[#F0F8D2] dark:bg-[#C0E72B]/10 border border-[#D5EE70]/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#3D5608] dark:text-[#C0E72B] font-bold">
                  {guest.membershipTier}
                </span>
                <Award className="w-4 h-4 text-[#719808] dark:text-[#C0E72B]" />
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#D5EE70]/50">
                <span className="text-slate-600 dark:text-slate-300">
                  Balance: <b>{guest.pointsBalance.toLocaleString()} pts</b>
                </span>
                <span className="text-[11px] font-bold text-[#3D5608] dark:text-[#C0E72B]">
                  {guest.tierLevel}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Column 2: Booking Info (5 cols) */}
        <Card className="p-6 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Booking Info
              </span>
              <span className="text-xs font-semibold text-slate-400 cursor-pointer">•••</span>
            </div>

            {/* Booking Confirmed Pill */}
            <div className="my-4">
              <Badge variant="lime" size="sm" className="mb-2">
                <Check className="w-3 h-3 stroke-[3]" />
                <span>Booking Confirmed</span>
              </Badge>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Booking ID: {activeBooking?.bookingCode || "LG-B00109"}
              </h2>
              <div className="text-xs text-slate-400 mt-0.5">
                June 17, 2024, 9:46 AM
              </div>
            </div>

            {/* Grid of stay details */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100 dark:border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block">Room Type</span>
                <span className="font-bold text-slate-900 dark:text-white">Deluxe</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Room Number</span>
                <span className="font-bold text-slate-900 dark:text-white">101</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Price</span>
                <span className="font-bold text-slate-900 dark:text-white">₹6,500/night</span>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block">Guests</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  2 Adults
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 text-[11px] block">Requests</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Late Check-Out
                </span>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block">Check In</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Jun 19, 2024
                </span>
                <span className="text-[10px] text-slate-400 block">1:45 PM</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Check Out</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Jun 22, 2024
                </span>
                <span className="text-[10px] text-slate-400 block">11:45 AM</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Duration</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  3 nights
                </span>
              </div>
            </div>

            {/* Notes */}
            <div className="my-4 text-xs">
              <span className="text-slate-400 text-[11px] block mb-1">Notes</span>
              <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl leading-relaxed">
                {guest.internalNotes}
              </p>
            </div>

            {/* Special Amenities checklist */}
            <div className="text-xs space-y-1.5">
              <span className="text-slate-400 text-[11px] block mb-1">
                Special Amenities
              </span>
              {guest.specialAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-200"
                >
                  <Check className="w-3.5 h-3.5 text-[#6B8E08] dark:text-[#C0E72B]" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons matching Reference Image 2 */}
          <div className="flex items-center justify-end gap-3 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm">
              Cancel Booking
            </Button>
          </div>
        </Card>

        {/* Column 3: Room Info & Pricing (3 cols) */}
        <Card className="p-6 lg:col-span-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Room Info
              </span>
              <Link
                to={ROUTES.ROOMS}
                className="text-xs font-semibold text-[#577A07] dark:text-[#C0E72B] hover:underline"
              >
                View Detail
              </Link>
            </div>

            {/* Room Photo */}
            <div className="my-4 rounded-xl overflow-hidden shadow-sm h-32 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                alt="Room 101"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Room mini specs */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                <span>35 m²</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-slate-400" />
                <span>King Bed</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>2 guests</span>
              </div>
            </div>

            {/* Price Summary Breakdown matching Reference Image 2 */}
            <div className="my-4 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  Price Summary
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#C0E72B] text-[#1E3A1E]">
                  Paid
                </span>
              </div>

              <div className="flex justify-between text-slate-500 pt-1">
                <span>Room and offer</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  ₹19,500.00
                </span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Extras</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  ₹0.00
                </span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>18% GST</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  ₹3,510.00
                </span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Resort Cess</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  ₹500.00
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-sm font-extrabold text-slate-900 dark:text-white">
                <span>Total Price</span>
                <span>₹23,510.00</span>
              </div>
            </div>
          </div>

          {/* Corporate Invoice Note */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-[11px] text-slate-500 leading-relaxed">
            <b>Notes:</b> Invoice sent to corporate account; payment confirmed via HDFC Corporate Net Banking by Tata Consultancy Services Ltd.
          </div>
        </Card>
      </div>

      {/* Bottom Section: Booking History Table matching Reference Image 2 */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Booking History
            </h3>
            <p className="text-xs text-slate-400">
              Past and scheduled reservations for this guest
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search guest, status..."
                className="h-9 pl-8 pr-3 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C0E72B]"
              />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>19 - 24 June, 2028</span>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Image</th>
                <th className="py-3 px-3">Booking ID</th>
                <th className="py-3 px-3">Booking Date</th>
                <th className="py-3 px-3">Room Type</th>
                <th className="py-3 px-3">Room Number</th>
                <th className="py-3 px-3">Check-In</th>
                <th className="py-3 px-3">Check-Out</th>
                <th className="py-3 px-3">Guests</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {historyBookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="py-3 px-3">
                    <img
                      src={b.roomImage}
                      alt={b.roomType}
                      className="w-12 h-9 rounded-md object-cover"
                    />
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                    {b.bookingCode}
                  </td>
                  <td className="py-3 px-3 text-slate-500">{formatDate(b.bookingDate)}</td>
                  <td className="py-3 px-3">
                    <Badge variant="lime" size="sm">
                      {b.roomType}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-slate-800 dark:text-slate-200">
                    Room {b.roomNumber}
                  </td>
                  <td className="py-3 px-3 text-slate-500">
                    {formatDate(b.checkInDate)}
                  </td>
                  <td className="py-3 px-3 text-slate-500">
                    {formatDate(b.checkOutDate)}
                  </td>
                  <td className="py-3 px-3 text-slate-800 dark:text-slate-200">
                    {b.adultsCount} {b.adultsCount > 1 ? "Guests" : "Guest"}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-400 hover:text-slate-900 cursor-pointer">
                    •••
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
