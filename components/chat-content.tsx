"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreVertical, Paperclip, Phone, Search, Send, Smile } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Conversation {
  id: string
  name: string
  role: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  type: "driver" | "spa"
}

interface Message {
  id: string
  sender: "user" | "contact"
  content: string
  image?: string
  time: string
}

export function ChatContent() {
  const [selectedConversation, setSelectedConversation] = useState("1")
  const [activeTab, setActiveTab] = useState<"drivers" | "spa">("drivers")
  const [messageInput, setMessageInput] = useState("")

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "Nguyễn Văn A",
      role: "Bạn ghi chối 150k đúng không?",
      avatar: "/images/image.png",
      lastMessage: "Ok, đã hiểu",
      time: "Vừa xong",
      unread: 0,
      type: "driver",
    },
    {
      id: "2",
      name: "Lê Thị B (Shipper)",
      role: "Đã đón nhận",
      avatar: "",
      lastMessage: "Đang giao hàng...",
      time: "5m",
      unread: 1,
      type: "driver",
    },
    {
      id: "3",
      name: "Trần Văn C",
      role: "Chuyên gia Spa hoàn thành",
      avatar: "",
      lastMessage: "Cảm ơn đã sử dụng dịch vụ",
      time: "5d",
      unread: 0,
      type: "spa",
    },
  ]

  const messages: Message[] = [
    {
      id: "1",
      sender: "contact",
      content: "Chào bạn, mình đã nhận được yêu cầu vận chuyển bé Corgi. Bạn chỉ mình họ bố quan điều xe không ạ?",
      time: "Hôm nay, 10:30 AM",
    },
    {
      id: "2",
      sender: "user",
      content: "Bé Corgi mia mình nhé, bạn chỉ mình tay giúp mình nhé.",
      time: "10:32 AM",
    },
    {
      id: "3",
      sender: "contact",
      content: "Dạ vâng, mình có hàng chuyên dụng và điểm ẩm lòi ạ. Bạn yên tâm nhé.",
      time: "10:32 AM",
    },
    {
      id: "4",
      sender: "user",
      image: "/images/image.png",
      content: "Hôm bé đây ạ",
      time: "10:34 AM",
    },
    {
      id: "5",
      sender: "contact",
      content: "Ghi chối là 150k đúng không ạ?",
      time: "10:35 AM",
    },
  ]

  const filteredConversations = conversations.filter((conv) =>
    activeTab === "drivers" ? conv.type === "driver" : conv.type === "spa",
  )

  return (
    <div className="flex bg-background">
      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Conversation List */}
        <div className="w-64 border-r border-border bg-background flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Tìm tài xế, spa..." className="pl-10 bg-muted text-sm" />
            </div>

            <div className="flex gap-2">
              <Button
                variant={activeTab === "drivers" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setActiveTab("drivers")}
              >
                Tài xế (3)
              </Button>
              <Button
                variant={activeTab === "spa" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setActiveTab("spa")}
              >
                Spa (1)
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-3 border-b border-border text-left transition-colors ${
                  selectedConversation === conv.id ? "bg-primary/10" : "hover:bg-muted"
                }`}
              >
                <div className="flex gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {conv.name.charAt(0)}
                    </div>
                    {conv.unread > 0 && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium text-sm">{conv.name}</h3>
                      <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{conv.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{conv.role}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-background">
          {/* Chat Header */}
          <div className="border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <h2 className="font-semibold text-sm">Nguyễn Văn A</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user" ? "bg-primary text-white" : "bg-muted text-foreground"
                  }`}
                >
                  {msg.image && (
                    <div className="relative w-48 h-32 mb-2">
                      <Image
                        src={msg.image || "/placeholder.svg"}
                        alt="Message"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <p className="text-sm">{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-5 h-5 text-muted-foreground" />
              </Button>
              <Input
                placeholder="Nhập tin nhắn..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 bg-muted"
              />
              <Button variant="ghost" size="icon">
                <Smile className="w-5 h-5 text-muted-foreground" />
              </Button>
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Order Details */}
        <div className="w-72 border-l border-border bg-card p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">Đơn hàng #6392</h3>
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded">ĐANG TÌM XE</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">📍</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Địa chỉ đón</p>
                <p className="text-sm font-medium">Quận 1, TP HCM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">📍</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Địa chỉ giao</p>
                <p className="text-sm font-medium">Quận 7, TP HCM</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground mb-1">Giá dự xuất</p>
            <p className="text-2xl font-bold text-primary">150.000đ</p>
          </div>

          <div className="border-t border-border pt-6 mb-6">
            <h4 className="font-semibold text-sm mb-4">Thông tin thú cưng</h4>
            <div className="bg-muted rounded-lg p-3 mb-4">
              <div className="flex gap-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/images/image.png" alt="Pet" fill className="object-cover rounded" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Miu</p>
                  <p className="text-xs text-muted-foreground">Chó Corgi · 12kg</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    "Bé sợ tiếng ồn, cần đón động vận chuyển chắc chắn."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">✓ Chấp nhận giá</Button>
            <Button variant="outline" className="w-full bg-transparent">
              👁️ Xem hồ sơ tài xế
            </Button>
            <a href="#" className="block text-center text-sm text-red-500 hover:text-red-600">
              Báo cáo sự cố
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
