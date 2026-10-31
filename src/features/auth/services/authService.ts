import { User } from "@/types"
import { LoginFormData, RegisterFormData } from "../schemas/authSchema"

// Mock logged-in user profile
const MOCK_USER: User = {
  id: "usr-001",
  name: "Vansh Admin",
  email: "admin@vanshgrand.in",
  role: "admin",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
}

/**
 * Simulates authentication API call for login
 * @param credentials - email and password
 * @returns Promise resolving to user object
 */
export async function authenticateUser(credentials: LoginFormData): Promise<User> {
  // Simulate 600ms network delay
  await new Promise((resolve) => setTimeout(resolve, 600))

  return {
    ...MOCK_USER,
    email: credentials.email,
  }
}

/**
 * Simulates user registration API call
 * @param data - user registration form fields
 * @returns Promise resolving to new user object
 */
export async function registerNewUser(data: RegisterFormData): Promise<User> {
  // Simulate 700ms network delay
  await new Promise((resolve) => setTimeout(resolve, 700))

  return {
    id: `usr-${Date.now()}`,
    name: data.fullName,
    email: data.email,
    role: "manager",
  }
}
