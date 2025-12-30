import { Suspense } from "react"
import { ChatContent } from "@/components/chat-content"

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatContent />
    </Suspense>
  )
}
