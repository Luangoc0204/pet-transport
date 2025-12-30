"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Facebook, Cookie as Google, Lock, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { setAuth } from "@/redux/slices/authSlice"

function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()

  const callbackUrl = searchParams.get("callbackUrl") || "/home"

  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState<"customer" | "spa" | "driver">("customer")
  const [showPassword, setShowPassword] = useState(false)

  const handleAuth = () => {
    // Mock auth for both login and register for testing purposes
    dispatch(
      setAuth({
        profile: {
          id: "1",
          email: "user@example.com",
          name: "Như Ngọc",
          role: userType,
        },
        accessToken: "mock_access_token",
        refreshToken: "mock_refresh_token",
      })
    )
    router.push(callbackUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        <img src="/brown-dog-portrait.jpg" alt="Pet Transport" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-6 text-balance">
            Kết nối hành trình cho người bạn bốn chân.
          </h1>
          <p className="text-gray-200 mb-8 text-lg text-balance">
            Hệ thống vận chuyển thú cưng kết nối Chủ nuôi, Spa và Tài xế.
          </p>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-white text-lg mb-1">Minh Anh</p>
              <p className="text-gray-300 mb-3">"Dịch vụ tuyệt vời với Corgi nhà tôi"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐾</span>
            </div>
            <h1 className="text-xl font-bold">PetTransport</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setIsLogin(true)}
              className={`py-2 px-1 font-medium transition-colors ${
                isLogin ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`py-2 px-1 font-medium transition-colors ${
                !isLogin ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
              }`}
            >
              Đăng ký
            </button>
          </div>

          {/* Content */}
          {!isLogin && (
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-3">Bạn là ai?</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "customer", label: "Khách hàng", icon: "👤" },
                  { id: "spa", label: "Spa / Shop", icon: "🏪" },
                  { id: "driver", label: "Tài xế", icon: "🚗" },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setUserType(option.id as "customer" | "spa" | "driver")}
                    className={`py-3 px-2 rounded-lg border-2 transition-all text-center text-sm ${
                      userType === option.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="text-2xl mb-1">{option.icon}</div>
                    <div className="font-medium text-xs">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                {isLogin ? "Email hoặc số điện thoại" : "Email hoặc số điện thoại"}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                <Input type="text" placeholder="name@example.com" className="pl-10 bg-muted" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Mật khẩu</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu của bạn"
                  className="pl-10 bg-muted pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                Ghi nhớ đăng nhập
              </label>
              {isLogin && (
                <Link href="#" className="text-sm text-primary hover:underline font-medium">
                  Quên mật khẩu?
                </Link>
              )}
            </div>

            <Button onClick={handleAuth} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 font-medium">
              {isLogin ? "Đăng nhập" : "Đăng ký"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">Hoặc tiếp tục với</p>

            <div className="grid grid-cols-2 gap-3">
              <Button onClick={handleAuth} variant="outline" className="gap-2 bg-background">
                <Google className="w-4 h-4" />
                <span className="hidden sm:inline">Google</span>
              </Button>
              <Button onClick={handleAuth} variant="outline" className="gap-2 bg-background">
                <Facebook className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Bằng việc đăng nhập, bạn đồng ý với{" "}
              <Link href="#" className="text-primary hover:underline">
                Điều khoản và Chính sách bảo mật
              </Link>{" "}
              của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  )
}
