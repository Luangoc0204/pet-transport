"use client";
import { AuthGuard } from "@/components/auth/auth-guard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="flex">
        {/* Sidebar */}


        {/* Main Content */}

      </div>
    </AuthGuard>
  )
}
