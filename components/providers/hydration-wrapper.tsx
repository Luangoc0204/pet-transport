"use client";

import { useAppDispatch } from '@/redux/hooks';
import { hydrateAuth } from '@/redux/slices/authSlice';
import { useEffect } from 'react';

export function HydrationWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  return <>{children}</>;
}
