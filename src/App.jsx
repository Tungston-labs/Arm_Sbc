
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Comparison from './pages/Comparison/Comparison'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
<Routes>
  <Route path='/nav' element={<Navbar/>}/>
<Route path='/' element={<Home/>}/>
<Route path="/compare" element={<Comparison/>}/>
</Routes>
  )
}

export default App
