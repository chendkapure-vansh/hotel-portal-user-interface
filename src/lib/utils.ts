import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines Tailwind CSS class names cleanly without duplicates
 * @param inputs - List of class names, conditionals, or arrays
 * @returns Merged single class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number into Indian Rupee (INR) currency string (e.g. ₹24,500)
 * @param amount - The numerical rupee amount
 * @returns Formatted INR currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Formats an ISO date string or Date object into human-friendly format (e.g. Jun 19, 2024)
 * @param date - Date object or ISO string
 * @returns Human readable date string
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d)
}

/**
 * Formats a time string into 12-hour format with AM/PM (e.g. 1:45 PM)
 * @param date - Date object or ISO string
 * @returns Formatted time string
 */
export function formatTime(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d)
}
