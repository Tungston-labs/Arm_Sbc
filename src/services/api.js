import axios from "axios";
import { refreshToken } from "./useRefreshTokenService";

const api = axios.create({
  baseURL: "http://178.248.112.16:8002/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi = axios.create({
  baseURL: "http://178.248.112.16:8002/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔑 Attach token
privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔄 Handle expired token
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;

    if (error.response?.status === 403 && !prevRequest._retry) {
      prevRequest._retry = true;

      const newToken = await refreshToken();

      if (newToken) {
        prevRequest.headers.Authorization = `Bearer ${newToken}`;
        return privateApi(prevRequest); // ✅ use privateApi, not api
      }
    }
    return Promise.reject(error);
  }
);

export default api;
