"use client";

import { useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { accessToken, profile, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      // If not authenticated and not on login page, redirect to login
      if ((!accessToken || !profile) && pathname !== '/login') {
        router.replace('/login');
      }

      // If authenticated and on login page or root, redirect to home
      if (accessToken && profile && (pathname === '/login' || pathname === '/')) {
        router.replace('/home');
      }
    };

    checkAuth();
  }, [accessToken, profile, pathname, router]);

  // If we are checking and need to redirect, we could return a loading state or nothing
  // For now, just return children and let useEffect handle the redirect
  return <>{children}</>;
}
