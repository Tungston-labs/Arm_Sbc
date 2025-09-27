import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdmin,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  resetPassword,
  changePasswordAPI,
  logoutUser,
} from "../services/authService";

// 🔹 LOGIN
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

// 🔹 CHANGE PASSWORD
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

// 🔹 LOGOUT
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = localStorage.getItem("refreshToken");
      await logoutUser(refresh);
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  }
);

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

// 🔹 FORGOT PASSWORD FLOW

// Send OTP
export const sendOtpAction = createAsyncThunk(
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

// Verify OTP
export const verifyOtpAction = createAsyncThunk(
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

// Reset Password
export const resetPasswordAction = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, new_password }, { rejectWithValue }) => {
    try {
      const data = await resetPassword(email, new_password);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Reset password failed");
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

    // Change password
    changePasswordLoading: false,
    changePasswordSuccess: false,
    changePasswordError: null,

    // Forgot password flow
    forgotLoading: false,
    otpSent: false,
    otpVerified: false,
    resetSuccess: false,
    forgotError: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    resetPasswordState: (state) => {
      state.changePasswordLoading = false;
      state.changePasswordSuccess = false;
      state.changePasswordError = null;
    },
    resetForgotState: (state) => {
      state.forgotLoading = false;
      state.otpSent = false;
      state.otpVerified = false;
      state.resetSuccess = false;
      state.forgotError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
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

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      })

      // REFRESH
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.error = action.payload;
      })

      // CHANGE PASSWORD
      .addCase(changePassword.pending, (state) => {
        state.changePasswordLoading = true;
        state.changePasswordError = null;
        state.changePasswordSuccess = false;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePasswordLoading = false;
        state.changePasswordSuccess = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordLoading = false;
        state.changePasswordError = action.payload;
      })

      // SEND OTP
      .addCase(sendOtpAction.pending, (state) => {
        state.forgotLoading = true;
        state.forgotError = null;
      })
      .addCase(sendOtpAction.fulfilled, (state) => {
        state.forgotLoading = false;
        state.otpSent = true;
      })
      .addCase(sendOtpAction.rejected, (state, action) => {
        state.forgotLoading = false;
        state.forgotError = action.payload;
      })

      // VERIFY OTP
      .addCase(verifyOtpAction.pending, (state) => {
        state.forgotLoading = true;
        state.forgotError = null;
      })
      .addCase(verifyOtpAction.fulfilled, (state) => {
        state.forgotLoading = false;
        state.otpVerified = true;
      })
      .addCase(verifyOtpAction.rejected, (state, action) => {
        state.forgotLoading = false;
        state.forgotError = action.payload;
      })

      // RESET PASSWORD
      .addCase(resetPasswordAction.pending, (state) => {
        state.forgotLoading = true;
        state.forgotError = null;
        state.resetSuccess = false;
      })
      .addCase(resetPasswordAction.fulfilled, (state) => {
        state.forgotLoading = false;
        state.resetSuccess = true;
      })
      .addCase(resetPasswordAction.rejected, (state, action) => {
        state.forgotLoading = false;
        state.forgotError = action.payload;
      });
  },
});

export const { setAccessToken, resetPasswordState, resetForgotState } = authSlice.actions;
export default authSlice.reducer;
