import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Homepage/Header";
import Login from "./pages/Login/Login";
import Resetpassword from "./pages/Login/Resetpassword";
import Verification from "./pages/Login/Verification";
import SetNewPassword from "./pages/Login/SetNewPassword";
import Comparison from "./pages/Comparison/Comparison";
import SingleProduct from "./pages/product/SingleProduct.jsx";
import CartPage from "./pages/cartpage/CartPage.jsx";
import Dashboard from "./pages/dashboard/Dashboard";
import Enquiry from "./pages/EnquiryPage/Enquiry";
import EnquiryDetails from "./pages/EnquiryPage/EnquiryDetails";
import InquiryPage from "./pages/Inquiryform/InquiryPage";
import ChangePasswordModal from "./Components/ChangePasswordModal/ChangePasswordModal.jsx";
import Products from "./pages/product/Products.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/compare" element={<Comparison />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/inquiry-page" element={<InquiryPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/product" element={<Products />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/enquiry-page" element={<Enquiry />} />
      <Route path="/enquiry-details/:id" element={<EnquiryDetails />} />
      <Route path="/password" element={<ChangePasswordModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/setnewpassword" element={<SetNewPassword />} />
      <Route path="/compare" element={<Comparison />} />
    </Routes>
  );
}

export default App;
