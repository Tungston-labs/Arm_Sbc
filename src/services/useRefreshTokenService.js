import api from "./api";

export const refreshToken = async () => {
  try {
    const response = await api.post("accounts/refresh/", {
      refresh: localStorage.getItem("refresh_token"),
    });

    const newAccessToken = response.data.access;
    if (newAccessToken) {
      localStorage.setItem("access_token", newAccessToken);
    }
    return newAccessToken;
  } catch (err) {
    console.error("Refresh token failed", err);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return null;
  }
};