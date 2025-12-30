"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { TrackingContent } from "@/components/tracking-content";
import { Suspense } from "react";

export default function TrackingPage() {
  return (
    <AuthGuard>
      <Suspense fallback={null}>
        <TrackingContent />
      </Suspense>
    </AuthGuard>
  )
}
