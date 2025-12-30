"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, MapPin, Minus, Navigation, Plus, Search } from "lucide-react"
import { useState } from "react"

// Mock data for active orders
const mockOrders = [
  {
    id: 1,
    petName: "Bé Goldie",
    type: "Golden Retriever",
    status: "Đang đón",
    statusColor: "bg-green-500",
    address: "Happy Paws Spa",
    location: "Hanoixx - 261 + 123 45",
    timeEstimate: "5 phút nữa",
    image: "/images/image.png",
  },
  {
    id: 2,
    petName: "Mimi",
    type: "Có dấu chấm",
    status: "Trên đường",
    statusColor: "bg-blue-500",
    address: "Đang giao",
    location: "Dự kiến đón: 14:30 - 16:00",
    timeEstimate: null,
    image: "/images/image.png",
  },
]

const nearbySpa = [
  {
    id: 1,
    name: "Pet City Spa",
    distance: "2.5km",
    reviews: 6,
    rating: 3.4,
    image: "https://via.placeholder.com/100x100?text=Pet+City",
  },
  {
    id: 2,
    name: "LovePet Grooming",
    distance: "1.2km",
    reviews: 6,
    rating: 4.5,
    image: "https://via.placeholder.com/100x100?text=LovePet",
  },
]

export function TrackingContent() {
  const [zoom, setZoom] = useState(13)
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="flex bg-background">

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <div className="w-80 bg-card border-r border-border flex flex-col overflow-y-auto">
          {/* Header Section */}
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold mb-4">Theo dõi & Định vị</h2>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm Shipper, Spa hoặc Đón hàng..." className="pl-10 text-sm" />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("all")}
                className="rounded-full"
              >
                Tất cả
              </Button>
              <Button
                variant={activeTab === "shipper" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("shipper")}
                className="rounded-full"
              >
                Shipper
              </Button>
              <Button
                variant={activeTab === "spa" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("spa")}
                className="rounded-full"
              >
                Spa
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                Giao thông
              </Button>
            </div>
          </div>

          {/* Active Orders Section */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                ĐƠN HÀNG ĐANG CHẠY
              </h3>

              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-background rounded-lg p-4 border border-border hover:border-primary transition"
                  >
                    <div className="flex gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{order.petName}</p>
                        <p className="text-xs text-muted-foreground truncate">{order.type}</p>
                      </div>
                      <span
                        className={`${order.statusColor} text-white text-xs px-2 py-1 rounded-full whitespace-nowrap`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">{order.address}</p>
                          <p className="text-xs text-muted-foreground">{order.location}</p>
                        </div>
                      </div>

                      {order.timeEstimate && (
                        <div className="flex items-center gap-2 text-green-600">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{order.timeEstimate}</span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm h-8">
                      Tiếm đó
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Spa Section */}
            <div className="p-6">
              <h3 className="font-semibold text-sm mb-4">SPA GẦN ĐẦY</h3>

              <div className="space-y-3">
                {nearbySpa.map((spa) => (
                  <div
                    key={spa.id}
                    className="bg-background rounded-lg p-3 border border-border hover:border-primary transition"
                  >
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm">{spa.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {spa.distance} • {spa.reviews} đánh giá
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-medium">{spa.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Book Button */}
          <div className="p-6 border-t border-border">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white h-10">
              <Plus className="w-4 h-4 mr-2" />
              Đặt vận chuyển mới
            </Button>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative bg-gray-100">
          {/* Map Container - Using a static map for now */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
            {/* Map Background */}
            <img src="/images/image.png" alt="Map" className="w-full h-full object-cover" />

            {/* Map Controls */}
            <div className="absolute right-6 bottom-6 flex flex-col gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-lg w-10 h-10 bg-white border border-border shadow-lg"
                onClick={() => setZoom(Math.min(zoom + 1, 18))}
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-lg w-10 h-10 bg-white border border-border shadow-lg"
                onClick={() => setZoom(Math.max(zoom - 1, 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-lg w-10 h-10 bg-white border border-border shadow-lg"
              >
                <Navigation className="w-4 h-4" />
              </Button>
            </div>

            {/* Current Location Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-blue-200"></div>
              <div className="absolute w-12 h-12 border-2 border-blue-400 rounded-full -top-4 -left-4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
