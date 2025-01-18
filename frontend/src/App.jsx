import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './pages/Footer'
import SignUp from './pages/SignUp'
import Buyer from './pages/Buyer'
import Seller from './pages/Seller'
import Product from './pages/Product'
import SellerProducts from './pages/SellerProducts'
import BuyerPayments from './pages/BuyerPayments'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar will show on all pages except Login, Buyer and Seller Dashboard */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/signup" element={null} />
          <Route path="/buyer/dashboard" element={null} />
          <Route path="/seller/dashboard" element={null} />
          <Route path="/seller/products" element={null} />
          <Route path="/buyer/payments" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/buyer/dashboard" element={<Buyer />} />
            <Route path="/seller/dashboard" element={<Seller />} />
            <Route path="/products" element={<Product />} />
            <Route path="/seller/products" element={<SellerProducts />} />
            <Route path="/buyer/payments" element={<BuyerPayments />} />
            {/* Add more routes here */}
          </Routes>
        </main>

        {/* Footer will show on all pages except Login, Buyer and Seller Dashboard */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/signup" element={null} />
          <Route path="/buyer/dashboard" element={null} />
          <Route path="/seller/dashboard" element={null} />
          <Route path="/seller/products" element={null} />
          <Route path="/buyer/payments" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
