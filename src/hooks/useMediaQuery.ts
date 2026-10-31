import { useState, useEffect } from "react"

/**
 * Tracks if a CSS media query matches the current viewport
 * @param query - The CSS media query string (e.g. '(max-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatch = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Set initial match state
    setMatches(media.matches)

    // Listen for window resize changes
    media.addEventListener("change", updateMatch)
    return () => media.removeEventListener("change", updateMatch)
  }, [query])

  return matches
}
