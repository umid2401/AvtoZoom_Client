// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import HomePage from "./Pages/HomePage"

import BlogPage from "./Pages/BlogPage"
import BrandPage from "./Pages/BrandPage"
import ServicePage from "./Pages/ServicePage"
import ContactPage from "./Pages/ContactPage"
import AboutUsPage from "./Pages/AboutUsPage"
import CarsPages from './Pages/CarsPages'
export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Header/>
         <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cars" element={<CarsPages />}/>
          <Route path="/brand" element={<BrandPage  />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/service" element={<ServicePage />}/>
          <Route path="/about" element={<AboutUsPage />}/>
          <Route path="/blog" element={<BlogPage />}/>
         </Routes>
         <Footer/>
      </BrowserRouter> 
    </div>
  )
}
