import { Clock, Lock, Menu } from "lucide-react"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
          <body className={`font-sans antialiased`}>
              <aside className="w-60 bg-background border-r border-border hidden md:block">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-400" />
              <div>
                <p className="font-semibold text-sm">Nguyễn Văn A</p>
                <p className="text-xs text-muted-foreground">Thành viên thân thiết</p>
              </div>
            </div>

            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                <Menu className="w-4 h-4" />
                Thông tin cá nhân
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Clock className="w-4 h-4" />
                Lịch sử đơn hàng
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Hộ sơ thu cung
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Lock className="w-4 h-4" />
                Bảo mật
              </button>
            </nav>
          </div>
        </aside>
        {children}
      </body>
    </html>
  )
}
