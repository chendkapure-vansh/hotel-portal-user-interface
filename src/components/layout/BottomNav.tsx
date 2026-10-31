import { NavLink } from "react-router-dom"
import { LayoutDashboard, CalendarCheck, BedDouble, Users } from "lucide-react"
import { ROUTES } from "@/constants"
import { cn } from "@/lib/utils"

/**
 * Mobile bottom navigation bar replacing the sidebar on screens under 768px
 */
export function BottomNav() {
  const links = [
    { name: "Dashboard", path: ROUTES.DASHBOARD, icon: LayoutDashboard },
    { name: "Bookings", path: ROUTES.BOOKINGS, icon: CalendarCheck },
    { name: "Rooms", path: ROUTES.ROOMS, icon: BedDouble },
    { name: "Guests", path: ROUTES.GUESTS, icon: Users },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#151B26] border-t border-slate-200 dark:border-slate-800 px-3 py-2 flex items-center justify-around shadow-lg">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          end={link.path === ROUTES.DASHBOARD}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-[11px] font-semibold transition-all min-h-[48px] min-w-[56px]",
              isActive
                ? "bg-[#C0E72B] text-[#1E3A1E] font-bold shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )
          }
        >
          <link.icon className="w-5 h-5 mb-0.5 stroke-[2]" />
          <span>{link.name}</span>
        </NavLink>
      ))}
    </nav>
  )
}
