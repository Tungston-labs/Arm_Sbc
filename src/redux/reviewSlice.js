import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReviews, addReview } from "../services/reviewService";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async ({ productId }) => {
    return await getReviews(productId);
  }
);

export const createReview = createAsyncThunk(
  "reviews/createReview",
  async ({ productId, reviewData }) => {
    return await addReview(productId, reviewData);
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    items: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetReviewState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Reviews
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add Review
      .addCase(createReview.fulfilled, (state, payload) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetReviewState } = reviewSlice.actions;
export default reviewSlice.reducer;
