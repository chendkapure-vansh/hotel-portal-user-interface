import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  CalendarCheck,
  BedDouble,
  Users,
  Sparkles,
  Star,
  Settings,
  HelpCircle,
} from "lucide-react"
import { ROUTES, HOTEL_INFO } from "@/constants"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

/**
 * Main desktop navigation sidebar with lime active state indicators
 * Reference: Image 2 style with active item highlighted in lime
 */
export function Sidebar({ className }: SidebarProps) {
  // Navigation menu items
  const navItems = [
    { name: "Dashboard", path: ROUTES.DASHBOARD, icon: LayoutDashboard },
    { name: "Bookings", path: ROUTES.BOOKINGS, icon: CalendarCheck, badge: "18" },
    { name: "Rooms", path: ROUTES.ROOMS, icon: BedDouble },
    { name: "Guests", path: ROUTES.GUESTS, icon: Users },
  ]

  const secondaryItems = [
    { name: "Reviews", path: "#reviews", icon: Star },
    { name: "Settings", path: "#settings", icon: Settings },
    { name: "Help & Support", path: "#help", icon: HelpCircle },
  ]

  return (
    <aside
      className={cn(
        "w-64 bg-white dark:bg-[#151B26] border-r border-slate-100 dark:border-slate-800 flex flex-col justify-between p-5 select-none transition-colors",
        className
      )}
    >
      <div>
        {/* Brand header matching style reference */}
        <div className="flex items-center gap-3 px-2 py-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#C0E72B] flex items-center justify-center text-[#1E3A1E] font-extrabold text-lg shadow-sm">
            VG
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              {HOTEL_INFO.name}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">
              Grand Suites & Resort
            </div>
          </div>
        </div>

        {/* Primary Navigation Links */}
        <div className="space-y-1.5">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Main Menu
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === ROUTES.DASHBOARD}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px]",
                  isActive
                    ? "bg-[#C0E72B] text-[#1E3A1E] shadow-sm font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                )
              }
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 stroke-[2]" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-full text-[11px] bg-rose-500 text-white font-bold">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Secondary Links */}
        <div className="mt-8 space-y-1.5">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Preferences
          </div>
          {secondaryItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer min-h-[40px] transition-colors"
            >
              <item.icon className="w-4 h-4 stroke-[1.8]" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Banner matching Reference Image 2 bottom card */}
      <div className="mt-6 p-4 rounded-2xl bg-[#F0F8D2] dark:bg-[#1E291B] border border-[#D5EE70]/40 relative overflow-hidden">
        <div className="w-8 h-8 rounded-lg bg-[#C0E72B] flex items-center justify-center text-[#1E3A1E] mb-3">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
          Elevate Hospitality
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 mb-3 leading-relaxed">
          Enhanced reporting, faster check-ins & VIP room service tools.
        </p>
        <button
          type="button"
          className="w-full py-2 px-3 text-xs font-bold rounded-xl bg-[#C0E72B] hover:bg-[#B0D820] text-[#1E3A1E] shadow-sm transition-colors min-h-[36px]"
        >
          Check Updates
        </button>
      </div>
    </aside>
  )
}
