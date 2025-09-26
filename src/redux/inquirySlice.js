import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createInquiry,
  getInquiries,
  getInquiryDetail,
  updateInquiryStatus,
} from "../services/inquiryService";

// Create Inquiry (public)
export const submitInquiry = createAsyncThunk(
  "inquiry/submitInquiry",
  async (inquiryData) => {
    return await createInquiry(inquiryData);
  }
);

// List inquiries (admin)
export const fetchInquiries = createAsyncThunk(
  "inquiry/fetchInquiries",
  async (token) => {
    return await getInquiries(token);
  }
);

// Get inquiry details (admin)
export const fetchInquiryDetail = createAsyncThunk(
  "inquiry/fetchInquiryDetail",
  async ({ id, token }) => {
    return await getInquiryDetail(id, token);
  }
);

// Update inquiry status (admin)
export const changeInquiryStatus = createAsyncThunk(
  "inquiry/changeInquiryStatus",
  async ({ id, status, token }) => {
    return await updateInquiryStatus(id, status, token);
  }
);

const inquirySlice = createSlice({
  name: "inquiry",
  initialState: {
    inquiries: [],
    inquiryDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Inquiry
      .addCase(submitInquiry.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitInquiry.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(submitInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // List inquiries
      .addCase(fetchInquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiries = action.payload;
      })
      .addCase(fetchInquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Inquiry detail
      .addCase(fetchInquiryDetail.fulfilled, (state, action) => {
        state.inquiryDetail = action.payload;
      })

      // Update status
      .addCase(changeInquiryStatus.fulfilled, (state, action) => {
        const index = state.inquiries.findIndex(
          (inq) => inq.id === action.payload.id
        );
        if (index !== -1) {
          state.inquiries[index] = action.payload;
        }
        state.inquiryDetail = action.payload;
      });
  },
});

export default inquirySlice.reducer;
