"use client"

import { useState } from "react"
import { Menu, Search, Settings, Eye, Trash2, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  pet: {
    name: string
    icon: string
    type: string
    weight: string
  }
  location: {
    from: string
    to: string
  }
  shipper: {
    name: string
    avatar: string
  }
  status: "pending" | "assigned" | "in-transit" | "completed"
  statusLabel: string
  action?: string
}

export default function ShipperDashboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const orders: Order[] = [
    {
      id: "#ORD-982",
      pet: {
        name: "Mimi",
        icon: "🐱",
        type: "Golden + Spa",
        weight: "Pet Bộ, Q.7",
      },
      location: {
        from: "Q1, TP.HCM",
        to: "Pet Bộ, Q.7",
      },
      shipper: {
        name: "Nguyễn Văn A",
        avatar: "👤",
      },
      status: "pending",
      statusLabel: "Đang chờ",
    },
    {
      id: "#ORD-983",
      pet: {
        name: "Luna",
        icon: "🐱",
        type: "Mèo Anh + 3kg",
        weight: "Sâm bay TSN",
      },
      location: {
        from: "Q Bình Thạnh",
        to: "Sâm bay TSN",
      },
      shipper: {
        name: "Trần Văn B",
        avatar: "👤",
      },
      status: "assigned",
      statusLabel: "Đã nhận",
    },
    {
      id: "#ORD-981",
      pet: {
        name: "Rồng",
        icon: "🐕",
        type: "Corgi + 8kg",
        weight: "Q2, TP.HCM",
      },
      location: {
        from: "Q2, TP.HCM",
        to: "Q1, TP.HCM",
      },
      shipper: {
        name: "Lê Văn C",
        avatar: "👤",
      },
      status: "in-transit",
      statusLabel: "Đang vận chuyển",
    },
    {
      id: "#ORD-980",
      pet: {
        name: "Max",
        icon: "🐕",
        type: "Chó chihuahua 3 lb",
        weight: "Bệnh viện PetCare",
      },
      location: {
        from: "Bệnh viện Pet Care",
        to: "Q1, TP.HCM",
      },
      shipper: {
        name: "Đỗ Minh D",
        avatar: "👤",
      },
      status: "completed",
      statusLabel: "Hoàn thành",
    },
  ]

  const stats = [
    { label: "Đang chờ", count: 5, icon: "📋", color: "bg-yellow-50" },
    { label: "Đã nhận", count: 8, icon: "✓", color: "bg-blue-50" },
    { label: "Đang vận chuyển", count: 2, icon: "🚗", color: "bg-purple-50" },
    { label: "Hoàn thành", count: 12, icon: "✓", color: "bg-green-50" },
  ]

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "assigned":
        return "bg-blue-100 text-blue-800"
      case "in-transit":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-48 bg-white border-r border-border hidden md:block sticky top-0 h-screen overflow-y-auto">
          <div className="p-6">
            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center text-lg">
                👤
              </div>
              <div>
                <p className="font-semibold text-sm">PetShip Admin</p>
                <p className="text-xs text-muted-foreground">Quản trị viên</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Tổng quan
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Đơn vận chuyển
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Shipper
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Thu cung & Spa
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Menu className="w-4 h-4" />
                Khách hàng
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted text-sm font-medium transition">
                <Settings className="w-4 h-4" />
                Cài đặt
              </button>
            </nav>
          </div>

          {/* Logout */}
          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition">
              <Menu className="w-4 h-4" />
              Đăng xuất
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="bg-white border-b border-border sticky top-0 z-30">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-xl font-bold">Quản lý Đơn vận chuyển</h1>
                <p className="text-sm text-muted-foreground">Theo dõi trạng thái vận chuyển thú cưng của bạn</p>
              </div>
              <div className="flex items-center gap-3">
                <Button className="gap-2" size="sm">
                  <span className="text-lg">+</span>
                  Tạo đơn mới
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.color} rounded-lg p-4 border border-border cursor-pointer hover:border-primary transition`}
                  onClick={() => setSelectedStatus(selectedStatus === stat.label ? null : stat.label)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                      <p className="text-3xl font-bold mt-2">{stat.count}</p>
                      <p className="text-xs text-muted-foreground mt-2">Cần xử lý ngay</p>
                    </div>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg p-4 border border-border mb-6 flex items-center gap-4 flex-wrap">
              <div className="relative flex-1 min-w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Tìm theo tên đơn, tên khách hàc hoặc shipper..." className="pl-10 bg-muted" />
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" className="bg-primary text-primary-foreground">
                  Tất cả
                </Button>
                <Button size="sm" variant="outline">
                  Đơn giao
                </Button>
                <Button size="sm" variant="outline">
                  Cấn gặn Shipper
                </Button>
                <Button size="sm" variant="outline">
                  Cảnh báo sức khỏe
                </Button>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Mã đơn
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Thông tin thú cưng
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Lộ trình
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Shipper
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Trạng thái
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition">
                        <td className="px-6 py-4">
                          <span className="font-medium text-sm">{order.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                              {order.pet.icon}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{order.pet.name}</p>
                              <p className="text-xs text-muted-foreground">{order.pet.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-green-600" />
                              <span>{order.location.from}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="w-3 h-3 text-red-600" />
                              <span>{order.location.to}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-xs">
                              {order.shipper.avatar}
                            </div>
                            <span className="text-sm font-medium">{order.shipper.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${getStatusBadgeColor(order.status)} text-xs font-medium`}>
                            {order.statusLabel}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-muted rounded-lg transition">
                              <Eye className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <button className="p-1.5 hover:bg-muted rounded-lg transition">
                              <Trash2 className="w-4 h-4 text-muted-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-border flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Hiển thị 1 đến 4 của 20 xét quá</p>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-muted rounded-lg transition disabled:opacity-50">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-muted text-sm font-medium">2</button>
                  <button className="w-8 h-8 rounded-lg hover:bg-muted text-sm font-medium">3</button>
                  <button className="p-1.5 hover:bg-muted rounded-lg transition">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
