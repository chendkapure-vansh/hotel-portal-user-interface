import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Eye, EyeOff, ArrowRight, User, Mail, Phone, Lock } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { ROUTES } from "@/constants"
import { registerSchema, RegisterFormData } from "../schemas/authSchema"
import { useAuth } from "../hooks/useAuth"

/**
 * Register form component with comprehensive validation
 */
export function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { isLoading, authError, handleRegister } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  })

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
      {/* Global auth error */}
      {authError && (
        <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl text-xs text-rose-600 dark:text-rose-400">
          {authError}
        </div>
      )}

      {/* Full Name */}
      <Input
        label="Full Name"
        placeholder="e.g. User One"
        type="text"
        leftIcon={<User className="w-4 h-4" />}
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      {/* Email & Phone grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Email Address"
          placeholder="user@example.com"
          type="email"
          leftIcon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Phone Number"
          placeholder="9130138944"
          type="tel"
          leftIcon={<Phone className="w-4 h-4" />}
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      {/* Password & Confirm Password grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Password"
          placeholder="Min 6 characters"
          type={showPassword ? "text" : "password"}
          leftIcon={<Lock className="w-4 h-4" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          }
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          label="Confirm Password"
          placeholder="Repeat password"
          type={showPassword ? "text" : "password"}
          leftIcon={<Lock className="w-4 h-4" />}
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      </div>

      {/* Terms checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-400 select-none">
          <input
            type="checkbox"
            className="w-4 h-4 mt-0.5 rounded text-[#A6CC17] focus:ring-[#C0E72B] border-slate-300 dark:border-slate-700 dark:bg-slate-800"
            {...register("agreeToTerms")}
          />
          <span>
            I agree to the hotel booking policies and terms of service.
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-xs text-rose-500 font-medium mt-1">
            {errors.agreeToTerms.message}
          </p>
        )}
      </div>

      {/* Bottom action bar */}
      <div className="pt-2 flex items-center justify-between">
        <Link
          to={ROUTES.LOGIN}
          className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4"
        >
          Already have an account? Login
        </Link>

        <Button
          type="submit"
          isLoading={isLoading}
          rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          className="rounded-2xl px-6"
        >
          Register
        </Button>
      </div>
    </form>
  )
}
