import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdmin,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  changePassword as changePasswordAPI,
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
      if (refresh) await logoutUser(refresh);
    } catch (err) {
      console.error("Logout failed:", err);
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

// 🔑 Send OTP (Forgot Password)
export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const data = await sendOTP(email);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to send OTP");
    }
  }
);

// 🔑 Verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const data = await verifyOTP(email, otp);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "OTP verification failed");
    }
  }
);

// 🔑 Change Password
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ current_password, new_password, confirm_new_password }, { rejectWithValue }) => {
    try {
      const data = await changePasswordAPI(current_password, new_password, confirm_new_password);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Password change failed");
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
    otpSent: false,
    otpVerified: false,
    changePasswordSuccess: false,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    resetFlags: (state) => {
      state.otpSent = false;
      state.otpVerified = false;
      state.changePasswordSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
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

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      })

      // Refresh Token
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(refresh.rejected, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      })

      // Send OTP
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpVerified = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.changePasswordSuccess = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setAccessToken, resetFlags } = authSlice.actions;
export default authSlice.reducer;
