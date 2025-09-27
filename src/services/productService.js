import api from "./api";
import privateApi from "./api";

// Admin APIs
export const addProduct = async (productData) => {
  const response = await privateApi.post("products/create/", productData);
  return response.data;
};

export const listProductsAdmin = async () => {
  const response = await privateApi.get("products/create/");
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await privateApi.put(`products/${productId}/`, productData);
  return response.data;
};

export const getProductByIdAdmin = async (productId) => {
  const response = await privateApi.get(`products/${productId}/`);
  return response.data;
};

// Public APIs
export const listProductsPublic = async () => {
  const response = await api.get("products/public/");
  return response.data;
};

export const getProductByIdPublic = async (productId) => {
  const response = await api.get(`products/public/${productId}/`);
  return response.data;
};

export const getRelatedProducts = async (productId) => {
  const response = await api.get(`products/${productId}/related/`);
  return response.data;
};
