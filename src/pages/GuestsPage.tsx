import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Search, UserPlus, Phone, Mail, Award, ArrowRight } from "lucide-react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { PageHeader } from "@/components/common/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { MOCK_GUESTS } from "@/data/mockData"
import { formatCurrency } from "@/lib/utils"

/**
 * Guests directory page with search and profile links
 */
export function GuestsPage() {
  const [search, setSearch] = useState<string>("")

  // Filter guests by search term
  const filteredGuests = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return MOCK_GUESTS
    return MOCK_GUESTS.filter(
      (g) =>
        g.fullName.toLowerCase().includes(q) ||
        g.email.toLowerCase().includes(q) ||
        g.code.toLowerCase().includes(q) ||
        g.nationality.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <DashboardLayout breadcrumbTitle="Guests Directory" breadcrumbCategory="Guests">
      <PageHeader
        title="Guest Directory"
        subtitle="Manage loyalty memberships, guest preferences, and VIP stay records."
        action={
          <Button size="sm" leftIcon={<UserPlus className="w-3.5 h-3.5" />}>
            New Guest Profile
          </Button>
        }
      />

      {/* Search Bar */}
      <div className="relative max-w-md mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by guest name, passport, or email..."
          className="w-full h-11 pl-10 pr-4 text-xs sm:text-sm bg-white dark:bg-[#151B26] border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0E72B] text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all min-h-[44px]"
        />
      </div>

      {/* Guest Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuests.map((guest) => (
          <Card
            key={guest.id}
            enableHoverEffect
            className="p-5 flex flex-col justify-between"
          >
            <div>
              {/* Header with Avatar and Membership */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={guest.avatarUrl}
                    alt={guest.fullName}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C0E72B]"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {guest.fullName}
                    </h3>
                    <div className="text-xs text-slate-400">{guest.code}</div>
                  </div>
                </div>

                <Badge variant="lime" size="sm">
                  {guest.membershipTier}
                </Badge>
              </div>

              {/* Contact information */}
              <div className="space-y-1.5 mt-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{guest.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{guest.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  <span>
                    Points: <b>{guest.pointsBalance.toLocaleString()}</b> • {guest.nationality}
                  </span>
                </div>
              </div>
            </div>

            {/* Stays and Action link */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {guest.totalStays} Stays
                </span>
                <span className="text-slate-400 text-xs ml-1.5">
                  ({formatCurrency(guest.totalSpent)})
                </span>
              </div>

              <Link
                to={`/guests/${guest.id}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#567807] dark:text-[#C0E72B] hover:underline"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
