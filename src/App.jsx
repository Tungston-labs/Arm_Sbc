import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/cartpage/CartPage'
import InquiryPage from './pages/Inquiryform/InquiryPage'

function App() {

  return (
<Routes>
  <Route path='/cartpage' element={<CartPage/>}/>
    <Route path='/inquiry-page' element={<InquiryPage/>}/>
</Routes>
  )
}

export default App
