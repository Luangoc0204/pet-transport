import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Profile {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface AuthState {
  profile: Profile | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
}

const initialState: AuthState = {
  profile: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isHydrated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        profile: Profile;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.profile = action.payload.profile;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.isHydrated = true;

      if (typeof window !== 'undefined') {
        localStorage.setItem('auth', JSON.stringify(action.payload));
      }
    },
    clearAuth: (state) => {
      state.profile = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth');
      }
    },
    hydrateAuth: (state) => {
      state.isHydrated = true;
      if (typeof window !== 'undefined') {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
          try {
            const parsed = JSON.parse(storedAuth);
            state.profile = parsed.profile;
            state.accessToken = parsed.accessToken;
            state.refreshToken = parsed.refreshToken;
            state.isAuthenticated = true;
          } catch (e) {
            console.error('Failed to parse auth from localStorage', e);
          }
        }
      }
    },
  },
});

export const { setAuth, clearAuth, hydrateAuth } = authSlice.actions;
export default authSlice.reducer;
