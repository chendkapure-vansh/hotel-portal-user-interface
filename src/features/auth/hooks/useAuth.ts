import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { ROUTES } from "@/constants"
import { User } from "@/types"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { authenticateUser, registerNewUser } from "../services/authService"
import { LoginFormData, RegisterFormData } from "../schemas/authSchema"

/**
 * Hook managing authentication state, login and registration flows
 */
export function useAuth() {
  const [currentUser, setCurrentUser] = useLocalStorage<User | null>(
    "vansh_hotel_active_user",
    null
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const navigate = useNavigate()

  /**
   * Handle login form submission
   */
  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true)
    setAuthError(null)

    try {
      const user = await authenticateUser(data)
      setCurrentUser(user)
      toast.success(`Welcome back, ${user.name}!`)
      navigate(ROUTES.DASHBOARD)
    } catch {
      setAuthError("Invalid credentials. Please check your email and password.")
      toast.error("Failed to login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Handle register form submission
   */
  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true)
    setAuthError(null)

    try {
      const user = await registerNewUser(data)
      setCurrentUser(user)
      toast.success("Account created successfully! Welcome to Vansh Grand.")
      navigate(ROUTES.DASHBOARD)
    } catch {
      setAuthError("Failed to register. Please try again.")
      toast.error("Registration failed.")
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Handle user logout
   */
  const handleLogout = () => {
    setCurrentUser(null)
    toast.info("You have been signed out.")
    navigate(ROUTES.LOGIN)
  }

  return {
    currentUser,
    isLoading,
    authError,
    handleLogin,
    handleRegister,
    handleLogout,
  }
}
