"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { clearAuth } from "@/redux/slices/authSlice"
import { Bell, LogOut, MessageCircleMore, Search, User } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { profile, isAuthenticated } = useAppSelector((state) => state.auth)

  if (!isAuthenticated || !profile) {
    return null
  }

  const handleLogout = () => {
    dispatch(clearAuth())
    router.push("/login")
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">🐾</span>
          </div>
          <h1 className="font-bold text-lg">PetTransport</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-foreground hover:text-primary transition">
            Trang chủ
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Dịch vụ
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Về chúng tôi
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Liên hệ
          </a>
        </nav>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:block relative w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Tìm kiếm..." className="pl-10 bg-muted text-sm" />
          </div>
          <Button onClick={() => router.push("/chat")} variant="ghost" size="icon" className="relative">
            <MessageCircleMore className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium hidden lg:block">Hi, {profile?.name}</div>
              <Button onClick={handleLogout} variant="ghost" size="icon" title="Đăng xuất">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <Button onClick={() => router.push("/login")} variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
