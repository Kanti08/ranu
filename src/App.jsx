
import './App.css'
import { Route, Routes } from "react-router-dom"

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
//import ProductList from './pages/ProductList'
import FilterPage from './pages/FilterPage';
import SingleProductPage from './pages/SingleProductPage'
import CartPage from "./pages/CartPage"



function App() {
  

  return (
    <>
   <Routes>
    <Route path='/'element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<FilterPage />} />
        <Route path='/cart' element={<CartPage />} />
       
        
 
        <Route path="/product/:productId" element={<SingleProductPage />} />

      

   </Routes>
     
    </>
  )
}

export default App
