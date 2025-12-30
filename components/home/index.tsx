"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MapPin, Clock, Star, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  // Mock data for active orders
  const activeOrders = [
    {
      id: 1,
      petName: "Miu",
      petType: "Corgi (2 tuổi)",
      status: "Đang chuyên chở",
      pickup: "Quận 1, TP.HCM",
      delivery: "Quận 7, TP.HCM",
      shipper: "Nguyễn Văn A",
      timeLeft: "15 phút",
      price: "150,000đ",
      image: "/images/corgi.jpg",
    },
  ]

  // Mock data for spa services
  const spaServices = [
    {
      id: 1,
      name: "Pet City Spa",
      rating: 4.8,
      reviews: 320,
      distance: "2.5km",
      services: "Tắm, cắt lông, làm móng",
      price: "Từ 250,000đ",
      image: "/images/spa1.jpg",
    },
    {
      id: 2,
      name: "LovePet Grooming",
      rating: 4.7,
      reviews: 245,
      distance: "1.8km",
      services: "Tắm, chăm sóc lông, spa",
      price: "Từ 200,000đ",
      image: "/images/spa2.jpg",
    },
    {
      id: 3,
      name: "Happy Paws Salon",
      rating: 4.9,
      reviews: 450,
      distance: "3.2km",
      services: "Toàn bộ dịch vụ chăm sóc",
      price: "Từ 300,000đ",
      image: "/images/spa3.jpg",
    },
  ]

  // Mock data for stats
  const stats = [
    { label: "Tổng đơn hàng", value: "24", icon: "📦" },
    { label: "Đơn hoàn thành", value: "22", icon: "✅" },
    { label: "Tiền tiết kiệm", value: "450k", icon: "💰" },
    { label: "Điểm thưởng", value: "1,250", icon: "⭐" },
  ]

  // Mock data for recent activity
  const recentActivity = [
    { date: "28/12/2024", action: "Hoàn thành vận chuyển", pet: "Miu", shipper: "Nguyễn Văn A" },
    { date: "27/12/2024", action: "Đã đặt dịch vụ Spa", pet: "Bella", service: "Happy Paws Salon" },
    { date: "26/12/2024", action: "Hoàn thành vận chuyển", pet: "Max", shipper: "Trần Văn B" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header with quick actions */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Chào mừng quay lại! 👋</h1>
              <p className="text-sm text-muted-foreground">Quản lý đơn hàng và dịch vụ của bạn</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Tạo đơn mới</span>
            </Button>
          </div>

          {/* Quick action buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/booking" className="block">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                <div className="text-2xl mb-2">🚗</div>
                <p className="text-sm font-medium text-foreground">Vận chuyển</p>
                <p className="text-xs text-muted-foreground">Đặt chuyến mới</p>
              </Card>
            </Link>
            <Link href="/spa-booking" className="block">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                <div className="text-2xl mb-2">🛁</div>
                <p className="text-sm font-medium text-foreground">Spa & Salon</p>
                <p className="text-xs text-muted-foreground">Booking dịch vụ</p>
              </Card>
            </Link>
            <Link href="/tracking" className="block">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                <div className="text-2xl mb-2">📍</div>
                <p className="text-sm font-medium text-foreground">Theo dõi</p>
                <p className="text-xs text-muted-foreground">Xem vị trí</p>
              </Card>
            </Link>
            <Link href="/chat" className="block">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                <div className="text-2xl mb-2">💬</div>
                <p className="text-sm font-medium text-foreground">Chat</p>
                <p className="text-xs text-muted-foreground">Liên hệ shipper</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-6 bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Active Orders Section */}
        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Đơn hàng đang thực hiện
            </h2>
          </div>
          <div className="p-6">
            {activeOrders.length > 0 ? (
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <div key={order.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <div className="bg-primary/10 rounded-lg p-4 h-32 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">🐕</div>
                            <p className="font-medium text-foreground text-sm">{order.petName}</p>
                            <p className="text-xs text-muted-foreground">{order.petType}</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">Shipper</p>
                            <p className="font-medium text-foreground">{order.shipper}</p>
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {order.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> Nhận tại
                            </p>
                            <p className="text-sm font-medium text-foreground">{order.pickup}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> Giao tới
                            </p>
                            <p className="text-sm font-medium text-foreground">{order.delivery}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-primary font-medium">Còn {order.timeLeft}</span>
                          </div>
                          <p className="text-lg font-bold text-primary">{order.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">Không có đơn hàng đang thực hiện</p>
                <Link href="/booking">
                  <Button className="bg-primary hover:bg-primary/90">Tạo đơn mới</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Featured Spa Services */}
        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Dịch vụ Spa nổi bật
            </h2>
            <Link href="/spa-services" className="text-primary text-sm font-medium hover:underline">
              Xem tất cả
            </Link>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {spaServices.map((spa) => (
                <Card key={spa.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="bg-gradient-to-r from-primary/20 to-primary/10 h-32 flex items-center justify-center">
                    <div className="text-5xl">🏪</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground">{spa.name}</h3>
                      <button
                        onClick={() => toggleFavorite(spa.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(spa.id) ? "fill-primary text-primary" : ""}`} />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(spa.rating) ? "fill-current" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({spa.reviews})</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{spa.services}</p>
                    <div className="flex items-center gap-1 mb-3 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {spa.distance}
                    </div>
                    <p className="font-bold text-primary mb-3">{spa.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm h-8">Đặt ngay</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Hoạt động gần đây
            </h2>
          </div>
          <div className="divide-y divide-border">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="px-6 py-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <span className="text-xs text-muted-foreground">{activity.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.pet && <span>{activity.pet}</span>}
                  {activity.shipper && <span>{activity.shipper}</span>}
                  {activity.service && <span>{activity.service}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Banner */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Nhận khuyến mãi hôm nay!</h3>
            <p className="text-white/90 mb-4">Sử dụng mã PETNEW2024 để giảm 20% cho đơn vận chuyển tiếp theo</p>
            <Button className="bg-white text-primary hover:bg-white/90 gap-2">
              Sao chép mã <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
