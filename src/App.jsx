import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Header from "./pages/Homepage/Header";
import CartPage from "./pages/cartpage/CartPage";
import Login from "./pages/Login/Login";
import Resetpassword from "./pages/Login/Resetpassword";
import Verification from "./pages/Login/Verification";
import SetNewPassword from "./pages/Login/SetNewPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/verification" element={<Verification />} />
     <Route path="/setnewpassword" element={<SetNewPassword />} />

    </Routes>
  );
}

export default App;
