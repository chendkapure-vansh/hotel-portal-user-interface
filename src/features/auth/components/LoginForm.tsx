import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Eye, EyeOff, ArrowRight, Mail, Lock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { ROUTES } from "@/constants"
import { loginSchema, LoginFormData } from "../schemas/authSchema"
import { useAuth } from "../hooks/useAuth"

/**
 * Login form component with account type toggle and validation
 */
export function LoginForm() {
  const [accountType, setAccountType] = useState<"member" | "staff">("staff")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { isLoading, authError, handleLogin } = useAuth()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@vanshgrand.in",
      password: "password123",
      rememberMe: true,
    },
  })

  // Quick fill helper for review and evaluation
  const handleDemoFill = () => {
    setValue("email", "admin@vanshgrand.in")
    setValue("password", "password123")
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
      {/* Account Type Selector matching Reference Image 1 */}
      <div>
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-2">
          <button
            type="button"
            onClick={() => setAccountType("member")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all min-h-[38px] ${
              accountType === "member"
                ? "bg-[#C0E72B] text-[#1E3A1E] shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Member
          </button>
          <button
            type="button"
            onClick={() => setAccountType("staff")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all min-h-[38px] ${
              accountType === "staff"
                ? "bg-[#C0E72B] text-[#1E3A1E] shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Staff Portal
          </button>
        </div>
        <p className="text-[11px] text-slate-400">
          Please login based on your account's type
        </p>
      </div>

      {/* Global auth error banner if failed */}
      {authError && (
        <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl text-xs text-rose-600 dark:text-rose-400">
          {authError}
        </div>
      )}

      {/* Email / Username field */}
      <Input
        label="Username / Email"
        placeholder="Enter your email"
        type="email"
        leftIcon={<Mail className="w-4 h-4" />}
        error={errors.email?.message}
        {...register("email")}
      />

      {/* Password field with visibility toggle */}
      <Input
        label="Password"
        placeholder="Enter your password"
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

      {/* Remember me & Quick Fill */}
      <div className="flex items-center justify-between text-xs pt-1">
        <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 select-none">
          <input
            type="checkbox"
            className="w-4 h-4 rounded text-[#A6CC17] focus:ring-[#C0E72B] border-slate-300 dark:border-slate-700 dark:bg-slate-800"
            {...register("rememberMe")}
          />
          <span>Remember me</span>
        </label>

        <button
          type="button"
          onClick={handleDemoFill}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-[#7A9E0A] dark:hover:text-[#C0E72B] transition-colors"
        >
          <Sparkles className="w-3 h-3 text-[#A6CC17]" />
          <span>Demo Credentials</span>
        </button>
      </div>

      {/* Submit button matching Reference Image 1 with lime rounded button and arrow */}
      <div className="pt-2 flex items-center justify-between">
        <Link
          to={ROUTES.REGISTER}
          className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4"
        >
          Create account
        </Link>

        <Button
          type="submit"
          isLoading={isLoading}
          rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          className="rounded-2xl px-7"
        >
          Login
        </Button>
      </div>
    </form>
  )
}
