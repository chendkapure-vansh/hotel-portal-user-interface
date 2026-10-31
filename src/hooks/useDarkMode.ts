import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

/**
 * Manages dark mode state and attaches the 'dark' class to html element
 * @returns Object with isDarkMode flag and toggleDarkMode function
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("vansh_hotel_theme_dark", false)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return { isDarkMode, toggleDarkMode }
}
