import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardCounts } from "../services/dashboardService";
import { data } from "react-router-dom";

export const fetchDashboardCounts = createAsyncThunk(
  "dashboard/fetchCounts",
  async () => {
    const token = localStorage.getItem("accessToken"); 
    if (!token) throw new Error("No token found. Please log in again.");
    return await getDashboardCounts(token);
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    counts: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardCounts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardCounts.fulfilled, (state, action) => {
        state.loading = false;
        state.counts = action.payload;
      })
      .addCase(fetchDashboardCounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
