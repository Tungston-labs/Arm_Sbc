import api from "./api";
import privateApi from "./api";


//  Create Inquiry (unauthenticated)
export const createInquiry = async (inquiryData) => {
  const response = await api.post("inquiries/create/", inquiryData);
  return response.data;
};

//  List all inquiries (admin)
export const getInquiries = async (token, page = 1) => {
  const response = await privateApi.get(`inquiries/?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

//  Get inquiry details (admin)
export const getInquiryDetail = async (id, token) => {
  const response = await privateApi.get(`inquiries/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

//  Update inquiry status (admin)
export const updateInquiryStatus = async (id, status, token) => {
  const response = await privateApi.patch(
    `inquiries/${id}/`,
    { status },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
