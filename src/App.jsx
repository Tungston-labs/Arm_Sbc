import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Homepage/Header";
import Login from "./pages/Login/Login";
import Resetpassword from "./pages/Login/Resetpassword";
import Verification from "./pages/Login/Verification";
import SetNewPassword from "./pages/Login/SetNewPassword";
import Comparison from "./pages/Comparison/Comparison";
import CartPage from "./pages/cartpage/CartPage.jsx";
import Dashboard from "./pages/dashboard/Dashboard";
import Enquiry from "./pages/EnquiryPage/Enquiry";
import EnquiryDetails from "./pages/EnquiryPage/EnquiryDetails";
import InquiryPage from "./pages/Inquiryform/InquiryPage";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import ProductsContainer from "./pages/product/ProductsContainer.jsx";
import SingleProductContainer from "./pages/product/SingleProductContainer.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/compare" element={<Comparison />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/inquiry-page" element={<InquiryPage />} />
        <Route path="/product" element={<ProductsContainer />} />
        <Route path="/product/:id" element={<SingleProductContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enquiry-page" element={<Enquiry />} />
        <Route path="/enquiry-details/:id" element={<EnquiryDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/setnewpassword" element={<SetNewPassword />} />
        <Route path="/compare" element={<Comparison />} />
      </Routes>
    </>
  );
}

export default App;
