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
    const data = await addProduct(productData);
    return data;
  }
);

export const updateExistingProduct = createAsyncThunk(
  "product/updateExistingProduct",
  async ({ productId, productData }) => {
    const data = await updateProduct(productId, productData);
    return data;
  }
);

// Public Thunks
export const fetchProductsPublic = createAsyncThunk(
  "product/fetchProductsPublic",
  async ( {currentPage, limit} ) => {
    const data = await listProductsPublic(currentPage, limit);
    return data;
  }
);

export const fetchProductPublic = createAsyncThunk(
  "product/fetchProductPublic",
  async ({productId}) => {
    const data = await getProductByIdPublic(productId);
    console.log({data})
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
    productsPublic: {
      results: [],
      currentPage: 0,
      totalPages: 0,
    },
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
      .addCase(fetchProductsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.productsAdmin = action.payload;
      })
      .addCase(fetchProductsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductAdmin.fulfilled, (state, action) => {
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
       .addCase(fetchProductsPublic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsPublic.fulfilled, (state, action) => {
        state.loading = false;
        state.productsPublic = {
          results: action.payload.results,
          currentPage: action.payload.current_page,
          totalPages: action.payload.total_pages,
        };
      })
      .addCase(fetchProductsPublic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch products";
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
