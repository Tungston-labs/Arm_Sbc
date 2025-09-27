import api from "./api";

// Admin Login
export const loginAdmin = async (email, password) => {
  const response = await api.post("accounts/login/", { email, password });
  return response.data;
};

// Refresh Access Token
export const refreshAccessToken = async (refresh) => {
  const response = await api.post("accounts/token/refresh/", { refresh });
  return response.data;
};

// Forgot Password / Send OTP
export const sendOTP = async (email) => {
  const response = await api.post("accounts/forgot-password/", { email });
  return response.data;
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
  const response = await api.post("accounts/verify-otp/", { email, otp });
  return response.data;
};

// Change Password
export const changePassword = async (current_password, new_password, confirm_new_password) => {
  const response = await api.post("accounts/change-password/", {
    current_password,
    new_password,
    confirm_new_password,
  });
  return response.data;
};

// Logout
export const logoutUser = async (refresh) => {
  const response = await api.post("accounts/logout/", { refresh });
  return response.data;
};
