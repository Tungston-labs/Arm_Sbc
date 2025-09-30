import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
} from "../services/cartService";

// Add product to cart
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async ({ productId, cartToken }) => {
    const data = await addToCart(productId, cartToken);
    return data;
  }
);

// Get cart items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async ({ cartToken }) => {
    const data = await getCartItems(cartToken);
    return data;
  }
);

// Update item quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ itemId, quantity }) => {
    const data = await updateCartItem(itemId, quantity);
    return data;
  }
);

// Remove item
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (itemId) => {
    await removeCartItem(itemId);
    return itemId;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add product
      .addCase(addProductToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.loading = false;
        // state.items.push(action.payload);
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Get cart
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update quantity
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const index = state.items.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items.items[index] = action.payload;
        }
      })

      // Delete item
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        if (state.items.items) {
          state.items.items = state.items.items.filter(
            (item) => item.id !== action.payload
          );
        }
      });
  },
});

export default cartSlice.reducer;
