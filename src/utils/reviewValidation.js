
export const MAX_NAME = 20;
export const MAX_EMAIL = 50;
export const MAX_REVIEW = 1000;

export const validateReview = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) errors.name = "Name is required";
  else if (formData.name.length > MAX_NAME)
    errors.name = `Name cannot exceed ${MAX_NAME} characters`;

  if (!formData.email?.trim()) errors.email = "Email is required";
  else if (formData.email.length > MAX_EMAIL)
    errors.email = `Email cannot exceed ${MAX_EMAIL} characters`;
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
    errors.email = "Invalid email address";

  if (!formData.rating || formData.rating < 1)
    errors.rating = "Rating is required";

  if (!formData.review?.trim()) errors.review = "Review cannot be empty";
  else if (formData.review.length > MAX_REVIEW)
    errors.review = `Review cannot exceed ${MAX_REVIEW} characters`;

  return errors;
};
