import { AuthLayout } from "@/components/layout/AuthLayout"
import { LoginForm } from "@/features/auth/components/LoginForm"
import { HOTEL_INFO } from "@/constants"

/**
 * Login Page composing AuthLayout and LoginForm
 */
export function LoginPage() {
  return (
    <AuthLayout
      welcomeTitle={`Welcome to ${HOTEL_INFO.name}`}
      welcomeSubtitle="Enjoy your stay with us in the best luxury suites & resort."
    >
      <LoginForm />
    </AuthLayout>
  )
}
