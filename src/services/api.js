import axios from "axios";
import { refreshToken } from "./useRefreshTokenService";
const api = axios.create({
  baseURL: "http://178.248.112.16:8002/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response?.status === 401 && !prevRequest._retry) {
      prevRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        prevRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(prevRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default api;