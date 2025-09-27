import api, { privateApi } from "./api";

export const loginAdmin = async (email, password) => {
  const response = await api.post("accounts/login/", { email, password });
  return response.data;
};

export const refreshAccessToken = async (refresh) => {
  const response = await api.post("accounts/token/refresh/", { refresh });
  return response.data;
};

export const sendOTP = async (email) => {
  const response = await api.post("accounts/forgot-password/", { email });
  return response.data;
};

export const verifyOTP = async (email, otp) => {
  const response = await api.post("accounts/verify-otp/", { email, otp });
  return response.data;
};

export const resetPassword = async (email, new_password) => {
  const response = await api.post("accounts/reset-password/", { email, new_password });
  return response.data;
};

export const changePasswordAPI = async (
  current_password,
  new_password,
  confirm_new_password,
  token
) => {
  const response = await privateApi.post(
    "accounts/change-password/",
    { current_password, new_password, confirm_new_password },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};


export const logoutUser = async (refresh) => {
  const response = await privateApi.post("accounts/logout/", { refresh });
  return response.data;
};
