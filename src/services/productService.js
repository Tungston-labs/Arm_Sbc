import api from "./api";

// Admin APIs
export const addProduct = async (productData) => {
  const response = await api.post("products/create/", productData);
  return response.data;
};

export const listProductsAdmin = async () => {
  const response = await api.get("products/create/");
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await api.put(`products/${productId}/`, productData);
  return response.data;
};

export const getProductByIdAdmin = async (productId) => {
  const response = await api.get(`products/${productId}/`);
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
