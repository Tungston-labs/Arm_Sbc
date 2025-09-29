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

export const fetchProductsAdmin = createAsyncThunk(
  "product/fetchProductsAdmin",
  async ({ page = 1, pageSize = 20 }) => {
    const data = await listProductsAdmin({ page, pageSize });
    return {
      results: data.results,
      count: data.count,
      page,
      pageSize,
    };
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

// Public Thunks
export const fetchProductsPublic = createAsyncThunk(
  "product/fetchProductsPublic",
  async ({ currentPage, limit }) => {
    const data = await listProductsPublic(currentPage, limit);
    return data;
  }
);

export const fetchProductPublic = createAsyncThunk(
  "product/fetchProductPublic",
  async ({ productId }) => {
    const data = await getProductByIdPublic(productId);
    return data;
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  "product/fetchRelatedProducts",
  async ({ productId }) => {
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
      totalCount: 0,
    },
    productDetailAdmin: null,
    productDetailPublic: null,
    productDetailLoading: false,
    productDetailError: null,
    relatedProducts: [],
    loading: false,
    error: null,
    relatedLoading: false,
    relatedError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.productsAdmin = action.payload.results || [];
        state.totalCount = action.payload.count || 0;
        state.currentPage = action.payload.page;
        state.pageSize = action.payload.pageSize;
      })
      .addCase(fetchProductsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
          totalCount: action.payload.count,
        };
      })
      .addCase(fetchProductsPublic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch products";
      })

      .addCase(fetchProductPublic.pending, (state) => {
        state.productDetailLoading = true;
        state.productDetailError = null;
      })
      .addCase(fetchProductPublic.fulfilled, (state, action) => {
        state.productDetailLoading = false;
        state.productDetailPublic = action.payload;
      })
      .addCase(fetchProductPublic.rejected, (state, action) => {
        state.productDetailLoading = false;
        state.productDetailError =
          action.error?.message || "Failed to fetch product details";
      })

      .addCase(fetchRelatedProducts.pending, (state) => {
        state.relatedLoading = true;
        state.relatedError = null;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.relatedLoading = false;
        state.relatedProducts = action.payload.results || [];
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.relatedLoading = false;
        state.relatedError =
          action.error?.message || "Failed to fetch related products";
      });
  },
});

export default productSlice.reducer;
