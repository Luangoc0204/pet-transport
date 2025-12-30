"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import Home from "@/components/home";

export default function HomePage() {
    return (
        <AuthGuard>
            <Home/>
        </AuthGuard>
    )
}
