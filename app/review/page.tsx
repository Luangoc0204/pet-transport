import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Clock, ImageIcon, ChevronLeft } from "lucide-react"

export default function ReviewPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted p-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary">
              Trang chủ
            </a>
            <span>/</span>
            <a href="#" className="hover:text-primary">
              Yêu cầu đơn đặt
            </a>
            <span>/</span>
            <span className="text-foreground">Hộ sơ & Xếp hạng</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left - Map and Details */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm">Bản đồ vận chuyển</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Vận chuyển thứ cung</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Mã đơn: <span className="font-medium">Tríp-88291</span>
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Thời gian đón</span>
                    </div>
                    <p className="font-bold">12/10/2023 - 10:30 AM</p>
                  </div>
                  <a href="#" className="text-primary text-sm font-medium hover:underline mt-4 inline-block">
                    Xem chi tiết đơn hàng
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Review Content */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6">
                {/* Shipper Info */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-xl font-bold">Nguyễn Văn Shipper</h2>
                      <p className="text-sm text-muted-foreground">Đối tác vận chuyển - 4.9 ⭐</p>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-4">Bạn cảm thấy chuyến đi thế nào?</h3>

                  {/* Rating Stars */}
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3, 4].map((star) => (
                      <button key={star} className="text-3xl hover:scale-110 transition cursor-pointer">
                        ⭐
                      </button>
                    ))}
                    <button className="text-3xl text-muted-foreground/30 hover:scale-110 transition cursor-pointer">
                      ⭐
                    </button>
                  </div>

                  <p className="text-primary font-medium text-sm">Hải lòng</p>
                </div>

                {/* Review Details */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-bold mb-3">Điểm nổi bật</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Đúng giờ", "Thân thiện", "Lái xe an toàn", "Chu đáo"].map((tag) => (
                      <button
                        key={tag}
                        className="px-3 py-1 border border-border rounded-full text-sm hover:border-primary hover:text-primary transition cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">Lồng xa sách</p>
                  <textarea
                    placeholder="Hãy chia sẻ một vài trải nghiệm của bạn với Shipper này..."
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm resize-none h-24"
                  />
                </div>

                {/* Image Upload */}
                <div className="border-t border-border pt-6 mt-6">
                  <h3 className="font-bold mb-3">Hình ảnh thực tế</h3>
                  <div className="flex gap-3">
                    <div className="w-20 h-20 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground hover:border-primary hover:bg-primary/5 transition cursor-pointer">
                      <ImageIcon className="text-2xl" />
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">16 đã 5 ảnh</p>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-medium mt-6 gap-2">
                  <span>Gửi đánh giá</span>
                  <ChevronLeft className="w-4 h-4 rotate-180" />
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">Bỏ qua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
