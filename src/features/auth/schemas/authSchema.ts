import { z } from "zod"

/**
 * Validation schema for the Login form
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email or username is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
})

export type LoginFormData = z.infer<typeof loginSchema>

/**
 * Validation schema for the Register form
 */
export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(60, "Name is too long"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    phone: z
      .string()
      .min(8, "Phone number must be at least 8 digits")
      .regex(/^[+0-9\s-()]+$/, "Please enter a valid phone number"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeToTerms: z.literal(true, {
      message: "You must agree to the terms of service",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
