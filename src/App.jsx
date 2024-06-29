import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Nav and Footer
import Header from './Components/Navbar/Header'
import HomePage from "./Pages/HomePage"
import Footer from './Components/Footer/Footer'

// Car pages
// import CarsPage from "./Pages/CarsPage"
import Cars from './Components/Cars/Cars'
import CarInfo from './Components/Cars/CarInfo'

// Brand pages
import BrandPage from "./Pages/BrandPage"

// About Us pages
import AboutUsPage from "./Pages/AboutUsPage"

// Service pages
import ServicePage from "./Pages/ServicePage"

// Contact pages
import ContactPage from "./Pages/ContactPage"
// import AboutUsPage from "./Pages/AboutUsPage"
import CarsPage from "./Pages/CarsPage"
import BlogPage from './Pages/BlogPage'
export default function App() {

  const [search, setSearch] = useState('')

  return (
    <div className=''>
      <BrowserRouter>
        <Header setSearch={setSearch}/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cars" element={<CarsPage/>}>
              <Route index element={<Cars search={search}/>}/>
              <Route path=":id" element={<CarInfo/>}/>
            </Route>
            <Route path="/brand" element={<BrandPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/service" element={<ServicePage/>}/>
            <Route path="/service/sport_car_rent" element={<ServicePage />}/>
          <Route path="/service/photoshoot-with-luxury-car-in-dubai" element={<ServicePage />}/>
            <Route path="about" element={<AboutUsPage/>}/>
            <Route path="blog" element={<BlogPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  )
}
