"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { ChatContent } from "@/components/chat-content";
import { Suspense } from "react";

export default function ChatPage() {
  return (
    <AuthGuard>
      <Suspense fallback={null}>
        <ChatContent />
      </Suspense>
    </AuthGuard>
  )
}
