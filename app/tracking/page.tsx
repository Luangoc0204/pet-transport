import { Suspense } from "react"
import { TrackingContent } from "@/components/tracking-content"

export default function TrackingPage() {
  return (
    <Suspense fallback={null}>
      <TrackingContent />
    </Suspense>
  )
}
