
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Comparison from './pages/Comparison/Comparison'
import Navbar from './Components/Navbar/Navbar'
import SingleProduct from './pages/product/SingleProduct.jsx'
// import Navbar from './Components/Navbar/Navbar'
import CartPage from './pages/cartpage/CartPage'
import InquiryPage from './pages/Inquiryform/InquiryPage'

function App() {

  return (
<Routes>
  <Route path='/nav' element={<Navbar/>}/>
<Route path="/compare" element={<Comparison/>}/>
  <Route path='/cartpage' element={<CartPage/>}/>
    <Route path='/inquiry-page' element={<InquiryPage/>}/>
<Route path='/product/:id' element={<SingleProduct/>}/>

</Routes>
  )
}

export default App
