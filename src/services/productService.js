import api,{privateApi} from "./api";
const config = {
  headers: {
    "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  },
}
export const addProduct = async (productData) => {
  const response = await privateApi.post("products/create/", productData);
  return response.data;
};

export const listProductsAdmin = async ({ page = 1, pageSize = 20 } = {}) => {
  const response = await privateApi.get(
    `products/create/?page=${page}&page_size=${pageSize}`,
    config
  );
  return response.data; 
};

export const updateProduct = async (productId, productData) => {
  const response = await privateApi.put(`products/${productId}/`, productData);
  return response.data;
};
export const deleteProduct = async (productId) => {
  const response = await privateApi.delete(`products/${productId}/`, config);
  return response.data;
};

export const getProductByIdAdmin = async (productId) => {
  const response = await privateApi.get(`products/${productId}/`,config);
  return response.data;
};

export const listProductsPublic = async ({ currentPage = 1, limit = 10, search = "" }) => {
  const response = await api.get("products/public/", {
    params: {
      page: currentPage,
      page_size: limit,   
      search
    },
  });
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
