"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Zap } from "lucide-react";

export default function OrderPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-muted p-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary">
              Trang chủ
            </a>
            <span>/</span>
            <a href="#" className="hover:text-primary">
              Yêu cầu #8821
            </a>
            <span>/</span>
            <span className="text-foreground">Báo giá #1234</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Section */}
              <div>
                <h1 className="text-3xl font-bold mb-2">Chi tiết báo giá & Thanh toán</h1>
                <p className="text-muted-foreground">
                  Xem lại báo giá và tiến hành thanh toán để xác nhận đơn hàng vận chuyển thú cưng của bạn.
                </p>
              </div>

              {/* Shipper Card */}
              <div className="bg-card rounded-lg p-6">
                <h2 className="font-bold mb-4">Thông tin shipper</h2>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Nguyễn Văn Shipper</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 mb-3">
                      <span className="text-yellow-400">★ 4.9</span>
                      <span>(120 chuyến)</span>
                      <span className="flex items-center gap-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Đã xác minh
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <button className="flex items-center gap-1 text-foreground hover:text-primary">
                        <Phone className="w-4 h-4" />
                        Nhắn tin
                      </button>
                      <button className="flex items-center gap-1 text-foreground hover:text-primary">
                        <Phone className="w-4 h-4" />
                        Gọi điện
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="bg-card rounded-lg p-6">
                <h2 className="font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Thông tin vận chuyển
                </h2>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-0.5 h-12 bg-border" />
                    </div>
                    <div className="pb-4">
                      <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Điểm đi</p>
                      <p className="font-medium">123 Nguyễn Trãi, Thạnh Xuân, Hà Nội</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Điểm đến</p>
                      <p className="font-medium">456 Lê Lợi, Quận 1, TP.HCM</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex items-center gap-2 mb-3 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Thời gian dự kiến</span>
                    </div>
                    <p className="font-bold text-lg">10:00 AM, 25/10/2023</p>
                  </div>

                  <div className="bg-muted rounded-lg p-3 mt-4 text-sm">
                    <p className="font-semibold mb-1">Thông tin thu cung</p>
                    <p className="text-muted-foreground">Golden Retriever - 25kg</p>
                    <p className="text-muted-foreground">Đặc điểm: Cộc tai, nâu vàng, kích thước chân lớn</p>
                  </div>

                  <a href="#" className="text-primary text-sm font-medium hover:underline inline-block mt-2">
                    Xem lại báo giá đơn hàng
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cost Summary */}
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-4">Tổm tắt chi phí</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí vận chuyển cơ bản</span>
                    <span>150.000đ</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí bảo hiểm thu cung 🟢</span>
                    <span>20.000đ</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí dịch vụ nên tặng</span>
                    <span>10.000đ</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold">
                    <span>Tổng cộng</span>
                    <span className="text-primary text-xl">180.000đ</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-4">Phương thức thanh toán</h3>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center gap-3 p-3 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer">
                    <input type="radio" name="payment" checked className="w-4 h-4" />
                    <div>
                      <p className="text-sm font-medium">Chuyển khoản / Ví điện tử</p>
                      <p className="text-xs text-muted-foreground">Tiền mặt sẽ nhân thù cung</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-muted-foreground transition">
                    <input type="radio" name="payment" className="w-4 h-4" />
                    <span className="text-sm font-medium">Tiền mặt sẵn khi nhận được thú cung</span>
                  </label>
                </div>
              </div>

              {/* Shipper Info */}
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-4 text-sm">Quết mã để thanh toán chứng</h3>
                <div className="mb-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">QR Code</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Hình ảnh thực tế</p>
                <div className="flex gap-2">
                  <button className="flex-1 aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs hover:bg-border transition">
                    📷 Tải ảnh
                  </button>
                  <div className="flex-1 aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg" />
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ngân hàng:</span>
                    <span className="font-medium">Techcombank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số TK:</span>
                    <span className="font-medium">1903 0000 9999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nội dung:</span>
                    <span className="font-medium text-primary">DH8821</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-medium gap-2">
                <Zap className="w-4 h-4" />
                Chấp nhận & Thanh toán
              </Button>

              <p className="text-xs text-muted-foreground text-center">Từ chối báo giá</p>

              {/* Security Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex gap-2 text-xs">
                  <span className="text-blue-600 mt-0.5">ℹ️</span>
                  <p className="text-blue-700">
                    Đây là từ giấp của được gầy công động PetTransport an toàn, Chúng tôi cam kết bảo mật thông tin cá
                    nhân bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
