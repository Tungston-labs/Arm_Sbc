import api from "./api";

//  Create Inquiry (unauthenticated)
export const createInquiry = async (inquiryData) => {
  const response = await api.post("inquiries/create/", inquiryData);
  return response.data;
};

//  List all inquiries (admin)
export const getInquiries = async (token) => {
  const response = await api.get("inquiries/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

//  Get inquiry details (admin)
export const getInquiryDetail = async (id, token) => {
  const response = await api.get(`inquiries/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

//  Update inquiry status (admin)
export const updateInquiryStatus = async (id, status, token) => {
  const response = await api.patch(
    `inquiries/${id}/`,
    { status },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
