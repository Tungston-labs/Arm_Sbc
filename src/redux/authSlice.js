import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdmin,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  resetPassword,
  changePassword,
  logoutUser,
} from "../services/authService";

// 🔑 Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginAdmin(email, password);
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

// 🔑 Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = localStorage.getItem("refreshToken");
      await logoutUser(refresh);
    } catch (err) {
      console.error("Logout failed:", err);
      // still clear tokens even if API fails
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  }
);

// 🔑 Refresh Access Token
export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = localStorage.getItem("refreshToken");
      if (!refresh) throw new Error("No refresh token found");

      const data = await refreshAccessToken(refresh);
      localStorage.setItem("accessToken", data.access);
      return data.access;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Token refresh failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    loading: false,
    error: null,
  },
  reducers: {
    // ✅ Reducer to set token manually (for PersistLogin)
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // logout
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      })

      // refresh
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.error = action.payload;
      });
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
