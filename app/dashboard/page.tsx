import { Menu, Lock, Settings, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-background border-r border-border hidden md:block">
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

        {/* Main Content */}
        <main className="flex-1 p-6 bg-muted">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold mb-2">Hộ số của tôi</h1>
            <p className="text-muted-foreground mb-6">Quản lý thông tin cá nhân và tài khoản vận chuyển của bạn</p>

            {/* Profile Card */}
            <div className="bg-card rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-300 to-orange-400" />
                  <div>
                    <h2 className="text-2xl font-bold">Nguyễn Văn A</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Khách hàng cá nhân - Đã xác thực</span>
                    </div>
                  </div>
                </div>
                <Button className="gap-2">
                  <Settings className="w-4 h-4" />
                  Tải ảnh mới
                </Button>
              </div>

              {/* Info Section */}
              <div className="border-t border-border pt-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Menu className="w-5 h-5 text-primary" />
                  Thông tin liên hệ
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Họ và tên</label>
                    <input
                      type="text"
                      defaultValue="Nguyễn Văn A"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Số điện thoại</label>
                    <div className="flex">
                      <input
                        type="text"
                        defaultValue="0912 345 678"
                        className="flex-1 px-3 py-2 border border-border rounded-l-lg bg-background text-sm"
                      />
                      <button className="px-3 py-2 bg-primary text-primary-foreground rounded-r-lg">✓</button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      defaultValue="nguyenvan.a@example.com"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Ngày sinh</label>
                    <input
                      type="date"
                      defaultValue="1995-08-15"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-muted-foreground mb-2 block">Địa chỉ thường trú</label>
                    <input
                      type="text"
                      defaultValue="123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">Đơn hàng gần đây</h3>
                <a href="#" className="text-primary text-sm font-medium hover:underline">
                  Xem tất cả
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Mã đơn
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Ngày đặt
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Lộ trình
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Thu cung
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Tổng tiền
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Trạng thái
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "#DH-8821",
                        date: "24/05/2024",
                        from: "Tứ Quận, TP.HCM",
                        to: "Đúy Tạp, Đá Lại",
                        pet: "Corgi (Mochì)",
                        price: "1.200.000đ",
                        status: "Đang vận chuyển",
                      },
                      {
                        id: "#DH-8750",
                        date: "12/05/2024",
                        from: "Tứ Quận, TP.HCM",
                        to: "Mèo Anh (Bờ)",
                        pet: "Mèo Anh (Bờ)",
                        price: "150.000đ",
                        status: "Hoàn thành",
                      },
                      {
                        id: "#DH-8602",
                        date: "20/04/2024",
                        from: "Tứ Quận, TP.HCM",
                        to: "Sát bay TSN",
                        pet: "Poodle (Koki)",
                        price: "350.000đ",
                        status: "Đã hủy",
                      },
                    ].map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition">
                        <td className="px-6 py-3 font-medium text-sm">{order.id}</td>
                        <td className="px-6 py-3 text-sm">{order.date}</td>
                        <td className="px-6 py-3 text-sm">{order.from}</td>
                        <td className="px-6 py-3 text-sm">{order.pet}</td>
                        <td className="px-6 py-3 text-sm font-medium">{order.price}</td>
                        <td className="px-6 py-3">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              order.status === "Đang vận chuyển"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Hoàn thành"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
