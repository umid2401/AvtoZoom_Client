import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Nav and Footer
import Header from "./Components/Navbar/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";

// Car pages
// import CarsPage from "./Pages/CarsPage"
import Cars from "./Components/Cars/Cars";
import CarInfo from "./Components/Cars/CarInfo";

// Brand pages
// import BrandPage from "./Pages/BrandPage";

// About Us pages
import AboutUsPage from "./Pages/AboutUsPage";

// Service pages
import ServicePage from "./Pages/ServicePage";

// Contact pages
import ContactPage from "./Pages/ContactPage";
// import AboutUsPage from "./Pages/AboutUsPage"
// import CarsPage from "./Pages/CarsPage"

import Faq from "./Components/Home/Faq";

// BlogPage page
import BlogPage from "./Pages/BlogPage";
// import Blog from './Components/Blog/Blog'

// BlogInfo Page
import BlogInfo from "./Components/Blog/BlogInfo/BlogInfo";
import PageNot from "./Components/PageNotFound/PageNot";
import Loader from "./Components/Loader";

export default function App() {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  return (
    <div className="">
      {loader && <Loader />}
      <BrowserRouter>
        <Header setSearch={setSearch} setLoader={setLoader} />
        <Routes>
          <Route path="*" element={<PageNot />} />
          <Route path="/" element={<HomePage setLoader={setLoader} />} />
          <Route
            path="/cars/:type/:id"
            element={<Cars search={search} setLoader={setLoader} />}
          />
          <Route
            path="/cars"
            element={<Cars search={search} setLoader={setLoader} />}
          />
          <Route
            path="/carinfo/:id"
            element={<CarInfo setLoader={setLoader} />}
          />
          {/* <Route path="/cars" element={<CarsPage/>}>
              <Route index path="" element={<Cars search={search}/>}/>
              <Route  path="/:id" element={<Cars/>}/>
             
            </Route>   */}
          {/* <Route path="/brand" element={<BrandPage />} /> */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/sport_car_rent" element={<ServicePage />} />
          <Route
            path="/service/photoshoot-with-luxury-car-in-dubai"
            element={<ServicePage />}
          />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="blog" element={<BlogPage />}>
            <Route path=":id" element={<BlogInfo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
