"use client";

import { useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { accessToken, profile, isHydrated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait until hydration is finished before checking auth
    if (!isHydrated) return;

    const checkAuth = () => {
      // If not authenticated and not on login page, redirect to login
      if ((!accessToken || !profile) && pathname !== '/login') {
        router.replace(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      }

      // If authenticated and on login page, redirect to home or callbackUrl
      if (accessToken && profile && pathname === '/login') {
        const query = new URLSearchParams(window.location.search);
        const callbackUrl = query.get('callbackUrl') || '/home';
        router.replace(callbackUrl);
      }
    };

    checkAuth();
  }, [accessToken, profile, pathname, router, isHydrated]);

  // If we are checking and need to redirect, we could return a loading state or nothing
  // For now, just return children and let useEffect handle the redirect
  return <>{children}</>;
}
