import api from "./api";

// Add product to cart (needs X-Cart-Token header)
export const addToCart = async (productId, cartToken) => {
  const response = await api.post(
    `cart/add/${productId}/`,
    {},
    {
      headers: { "X-Cart-Token": cartToken },
    }
  );
  if (!cartToken && response.data.cart_token) {
    localStorage.setItem("cartToken", response.data.cart_token);
  }
  return response.data;
};

// Get cart items
export const getCartItems = async (cartToken) => {
  const response = await api.get("cart/", {
    headers: { "X-Cart-Token": cartToken },
  });
  return response.data;
};

// Update quantity of a cart item
export const updateCartItem = async (itemId, quantity) => {
  const response = await api.patch(`cart/item/${itemId}/update/`, { quantity });
  console.log("dfsdfgsfdg",response.data)
  return response.data;
};

// Remove item from cart
export const removeCartItem = async (itemId) => {
  const response = await api.delete(`cart/item/${itemId}/delete/`);
  return response.data;
};
