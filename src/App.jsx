import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import Header from './pages/Homepage/Header'
// import Navbar from './Components/Navbar/Navbar'
import CartPage from './pages/cartpage/CartPage'
import AboutUs from './pages/Homepage/AboutUs'

function App() {

  return (
<Routes>
<Route path='/' element={<Header/>}/>
<Route path='/cartpage' element={<CartPage/>}/>

</Routes>
  )
}

export default App
