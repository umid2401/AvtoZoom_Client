// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import HomePage from "./Pages/HomePage"

import BlogPage from "./Pages/BlogPage"
import BrandPage from "./Pages/BrandPage"
import ServicePage from "./Pages/ServicePage"
import ContactPage from "./Pages/ContactPage"
import AboutUsPage from "./Pages/AboutUsPage"
import CarsPage from "./Pages/CarsPage"
export default function App() {

  const [search, setSearch] = useState('')

  return (
    <div className=''>
      <BrowserRouter>
        <Header setSearch={setSearch} />
         <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cars" element={<CarsPage search={ search } />}/>
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
