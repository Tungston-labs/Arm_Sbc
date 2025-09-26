import api from "./api";

// Fetch dashboard counts (admin only)
export const getDashboardCounts = async (token) => {
  const response = await api.get("inquiries/dashboard/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
