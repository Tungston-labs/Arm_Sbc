
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Comparison from './pages/Comparison/Comparison'
import SingleProduct from './pages/product/SingleProduct.jsx'
import CartPage from './pages/cartpage/CartPage'
import Dashboard from './pages/dashboard/Dashboard'
import Enquiry from './pages/EnquiryPage/Enquiry'
import EnquiryDetails from './pages/EnquiryPage/EnquiryDetails'
import InquiryPage from './pages/Inquiryform/InquiryPage'
import ChangePasswordModal from './Components/ChangePasswordModal/ChangePasswordModal.jsx'

function App() {

  return (
<Routes>
<Route path="/compare" element={<Comparison/>}/>
  <Route path='/cartpage' element={<CartPage/>}/>
    <Route path='/inquiry-page' element={<InquiryPage/>}/>
<Route path='/product/:id' element={<SingleProduct/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/enquiry-page' element={<Enquiry/>}/>
<Route path="/enquiry-details/:id" element={<EnquiryDetails />} />
<Route path="/password" element={<ChangePasswordModal />} />
</Routes>  )
}

export default App
