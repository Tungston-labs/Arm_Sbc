
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Comparison from './pages/Comparison/Comparison'
import Navbar from './Components/Navbar/Navbar'

import Home from './pages/Home'
import SingleProduct from './pages/product/SingleProduct.jsx'
// import Navbar from './Components/Navbar/Navbar'
import CartPage from './pages/cartpage/CartPage'
import Dashboard from './pages/dashboard/Dashboard'
import Enquiry from './pages/EnquiryPage/Enquiry'
import EnquiryDetails from './pages/EnquiryPage/EnquiryDetails'

function App() {

  return (
<Routes>
  <Route path='/nav' element={<Navbar/>}/>
<Route path="/compare" element={<Comparison/>}/>
  <Route path='/cartpage' element={<CartPage/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/product/:id' element={<SingleProduct/>}/>


<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/enquiry-page' element={<Enquiry/>}/>
\<Route path="/enquiry-details/:id" element={<EnquiryDetails />} />
</Routes>
  )
}

export default App
