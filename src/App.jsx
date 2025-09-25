
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Comparison from './pages/Comparison/Comparison'
import Navbar from './Components/Navbar/Navbar'

// import Navbar from './Components/Navbar/Navbar'
import CartPage from './pages/cartpage/CartPage'

function App() {

  return (
<Routes>
  <Route path='/nav' element={<Navbar/>}/>
<Route path="/" element={<Comparison/>}/>
  <Route path='/cartpage' element={<CartPage/>}/>

</Routes>
  )
}

export default App
