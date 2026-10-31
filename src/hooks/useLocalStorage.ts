import { useState, useEffect } from "react"

/**
 * Saves and syncs state to browser localStorage
 * @param key - The localStorage storage key
 * @param initialValue - Fallback value if storage is empty
 * @returns State tuple with current value and setter function
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {
  // Read existing value from localStorage or fallback to default
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  // Write changes to localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // Ignore write errors (e.g. private browsing restrictions)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
