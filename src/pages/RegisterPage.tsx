import { AuthLayout } from "@/components/layout/AuthLayout"
import { RegisterForm } from "@/features/auth/components/RegisterForm"
import { HOTEL_INFO } from "@/constants"

/**
 * Register Page composing AuthLayout and RegisterForm
 */
export function RegisterPage() {
  return (
    <AuthLayout
      welcomeTitle="Create an Account"
      welcomeSubtitle={`Join ${HOTEL_INFO.name} to manage guest stays, rooms and VIP rewards.`}
    >
      <RegisterForm />
    </AuthLayout>
  )
}
