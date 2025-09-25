import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Homepage/Header";
import CartPage from "./pages/cartpage/CartPage";
import Login from "./pages/Login/Login";
import Resetpassword from "./pages/Login/Resetpassword";
import Verification from "./pages/Login/Verification";
import SetNewPassword from "./pages/Login/SetNewPassword";
import Comparison from './pages/Comparison/Comparison'
import SingleProduct from './pages/product/SingleProduct.jsx'
import Navbar from './Components/Navbar/Navbar'
import InquiryPage from './pages/Inquiryform/InquiryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/setnewpassword" element={<SetNewPassword />} />
      <Route path="/compare" element={<Comparison />} />
      <Route path='/nav' element={<Navbar />} />
      <Route path='/inquiry-page' element={<InquiryPage />} />
      <Route path='/product/:id' element={<SingleProduct />} />

    </Routes>
  );
}

export default App;
