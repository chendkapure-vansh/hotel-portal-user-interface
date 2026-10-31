import { useState, useEffect } from "react"

/**
 * Delays updating a value until a set delay passes without changes
 * @param value - The input value to debounce
 * @param delayMs - Delay in milliseconds before updating
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delayMs: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Start timer to update value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delayMs)

    // Clear previous timer when value changes before delay expires
    return () => clearTimeout(timer)
  }, [value, delayMs])

  return debouncedValue
}
