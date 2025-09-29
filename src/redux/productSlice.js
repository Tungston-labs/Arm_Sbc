import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  listProductsAdmin,
  updateProduct,
  getProductByIdAdmin,
  listProductsPublic,
  getProductByIdPublic,
  getRelatedProducts,
} from "../services/productService";

// Admin Thunks
export const fetchProductsAdmin = createAsyncThunk(
  "product/fetchProductsAdmin",
  async () => {
    const data = await listProductsAdmin();
    return data;
  }
);

export const fetchProductAdmin = createAsyncThunk(
  "product/fetchProductAdmin",
  async (productId) => {
    const data = await getProductByIdAdmin(productId);
    return data;
  }
);

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (productData) => {
    return await addProduct(productData);
  }
);

export const updateExistingProduct = createAsyncThunk(
  "product/updateExistingProduct",
  async ({ productId, productData }) => {
    const data = await updateProduct(productId, productData);
    return data;
  }
);

export const fetchProductsPublic = createAsyncThunk(
  "product/fetchProductsPublic",
  async () => {
    const data = await listProductsPublic();
    return data;
  }
);

export const fetchProductPublic = createAsyncThunk(
  "product/fetchProductPublic",
  async (productId) => {
    const data = await getProductByIdPublic(productId);
    return data;
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  "product/fetchRelatedProducts",
  async (productId) => {
    const data = await getRelatedProducts(productId);
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsAdmin: [],
    productsPublic: [],
    productDetailAdmin: null,
    productDetailPublic: null,
    relatedProducts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Admin
      .addCase(fetchProductsAdmin.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProductsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.productsAdmin = action.payload.results || [];
      })
      .addCase(fetchProductAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetailAdmin = action.payload;
      })

      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.productsAdmin.push(action.payload);
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        const index = state.productsAdmin.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) state.productsAdmin[index] = action.payload;
      })
      // Public
      .addCase(fetchProductsPublic.fulfilled, (state, action) => {
        state.productsPublic = action.payload;
      })
      .addCase(fetchProductPublic.fulfilled, (state, action) => {
        state.productDetailPublic = action.payload;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts = action.payload.results;
      });
  },
});

export default productSlice.reducer;
