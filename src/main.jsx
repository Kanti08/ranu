import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/context/cart.jsx'
import { AuthProvider } from './components/context/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>


    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>

  </AuthProvider>


)
