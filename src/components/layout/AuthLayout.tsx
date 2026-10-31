import React from "react"
import { Sun, Moon, Wifi } from "lucide-react"
import { HotelCarousel } from "@/features/auth/components/HotelCarousel"
import { useDarkMode } from "@/hooks/useDarkMode"
import { HOTEL_INFO } from "@/constants"

interface AuthLayoutProps {
  children: React.ReactNode
  welcomeTitle?: string
  welcomeSubtitle?: string
}

/**
 * Shared authentication layout with split view:
 * Left side contains form, right side contains hotel photo carousel.
 * Mobile view hides the photo and displays full-width form.
 */
export function AuthLayout({
  children,
  welcomeTitle = `Welcome to ${HOTEL_INFO.name}`,
  welcomeSubtitle = HOTEL_INFO.tagline,
}: AuthLayoutProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#F4F6F8] dark:bg-[#0A0E14] overflow-hidden transition-colors">
      {/* Ambient background soft lime glow spots matching style reference */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C0E72B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-[#C0E72B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top right dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="fixed top-5 right-5 z-50 p-2.5 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 transition-transform"
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-[#C0E72B]" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main Auth Split Card Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white dark:bg-[#151B26] rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800/80 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left column: Form content */}
        <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Top Wi-Fi / Hotel badge matching Reference Image 1 */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-100 font-bold text-xs shadow-inner">
                <Wifi className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                High-Speed Wi-Fi Included
              </span>
            </div>

            {/* Welcome heading */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {welcomeTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 mb-6">
              {welcomeSubtitle}
            </p>

            {/* Form body injected from child page */}
            {children}
          </div>

          {/* Bottom subtle copyright note */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
            <span>© {new Date().getFullYear()} {HOTEL_INFO.name} Hotel & Suites</span>
            <span className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
              Privacy & Terms
            </span>
          </div>
        </div>

        {/* Right column: Image Carousel (Hidden on mobile & tablet) */}
        <div className="hidden lg:block relative h-full">
          <HotelCarousel />
        </div>
      </div>
    </div>
  )
}
