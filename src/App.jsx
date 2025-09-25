import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Navbar from './Components/Navbar/Navbar'
import CartPage from './pages/cartpage/CartPage'
import Dashboard from './pages/dashboard/Dashboard'
import Enquiry from './pages/EnquiryPage/Enquiry'
import EnquiryDetails from './pages/EnquiryPage/EnquiryDetails'

function App() {

  return (
<Routes>
  <Route path='/cartpage' element={<CartPage/>}/>
<Route path='/' element={<Home/>}/>


<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/enquiry-page' element={<Enquiry/>}/>
<Route path='/enquiry-details' element={<EnquiryDetails/>}/>
</Routes>
  )
}

export default App
