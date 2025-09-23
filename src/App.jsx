import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar/Navbar'
import SingleProduct from './pages/product/SingleProduct.jsx'

function App() {

  return (
<Routes>
  <Route path='/nav' element={<Navbar/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/product/:id' element={<SingleProduct/>}/>

</Routes>
  )
}

export default App
