import privateApi from "./api";

const config = {
  headers: {
    "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  },
}
// Fetch dashboard counts (admin only)
export const getDashboardCounts = async (token) => {
  const response = await privateApi.get("inquiries/dashboard/", config);

  console.log("📊 Raw API response:", response.data);

  // handle wrapped format
  return response.data.data || response.data;
};

