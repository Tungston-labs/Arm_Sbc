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


export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const data = await loginAdmin(email, password);
    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
    return data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const refresh = localStorage.getItem("refreshToken");
    await logoutUser(refresh);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      });
  },
});

export default authSlice.reducer;
