"use client";

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { HydrationWrapper } from './hydration-wrapper';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HydrationWrapper>
        {children}
      </HydrationWrapper>
    </Provider>
  );
}
