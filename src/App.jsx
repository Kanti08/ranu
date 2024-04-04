
import './App.css'
import { Route, Routes } from "react-router-dom"

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
//import ProductList from './pages/ProductList'
import FilterPage from './pages/FilterPage';
import SingleProductPage from './pages/SingleProductPage'
import CartPage from "./pages/CartPage"
import CheckoutPage from './pages/CheckoutPage'
import Success from './pages/success'
import { Home } from '@mui/icons-material'
import HomePage1 from "./pages/HomePage1"
import List from "./pages/List"
import Invoice from "./pages/Invoice"
import InvoiceSingle from "./pages/InovoiceSingle"


function App() {
  

  return (
    <>
   <Routes>
    <Route path='/home'element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<FilterPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/' element={<HomePage1 />} />
        <Route path='/list' element={<List />} />
        <Route path='/fetch/:orderId' element={<InvoiceSingle />} />


        <Route path='/invoice' element={<Invoice />} />
       
       
        
 
        <Route path="/product/:productId" element={<SingleProductPage />} />
         <Route path="/all" element={<CheckoutPage/>}></Route>
        <Route path="/thank-you" element={<Success />}></Route>
      

   </Routes>
     
    </>
  )
}

export default App;
