import api from "./api";

//  Get all reviews for a product
export const getReviews = async (productId) => {
  const response = await api.get(`reviews/${productId}/reviews/`);
  return response.data;
};

// Add a review for a product
export const addReview = async (productId, reviewData) => {
  const response = await api.post(
    `reviews/${productId}/reviews/add/`,
    reviewData
  );
  return response.data;
};
