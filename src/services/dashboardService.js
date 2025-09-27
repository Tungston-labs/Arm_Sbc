import privateApi from "./api";


// Fetch dashboard counts (admin only)
export const getDashboardCounts = async (token) => {
  const response = await privateApi.get("inquiries/dashboard/", {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log("📊 Raw API response:", response.data);

  // handle wrapped format
  return response.data.data || response.data;
};

