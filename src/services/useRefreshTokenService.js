import api from "./api";

export const refreshToken = async () => {
  try {
    const response = await api.post("accounts/token/refresh/", {
      refresh: localStorage.getItem("refreshToken"),
    });

    const newAccessToken = response.data.access;
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
    }
    return newAccessToken;
  } catch (err) {
    console.error("Refresh token failed", err);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return null;
  }
};