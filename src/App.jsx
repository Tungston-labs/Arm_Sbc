import "./App.css";
import { Route, Routes } from "react-router-dom";
import Comparison from "./pages/Comparison/Comparison";
import Navbar from "./Components/Navbar/Navbar";

import SingleProduct from "./pages/product/SingleProduct.jsx";
import CartPage from "./pages/cartpage/CartPage";
import AddProduct from "./pages/addproduct/addProduct";
import AddForm from "./pages/addproduct/addForm/addForm.jsx";

function App() {
  return (
    <Routes>
      <Route path="/nav" element={<Navbar />} />
      <Route path="/compare" element={<Comparison />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/addform" element={<AddForm />} />
    </Routes>
  );
}

export default App;
