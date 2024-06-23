import React from "react";
import { Link } from "react-router-dom";

import logo from '../../../public/Images/logo.svg'

export default function Header() {
  return (
    <header className="bg-customColor">
      <nav className="flex w-[90%] mx-auto items-center py-4 px-10 justify-between">

        <div className="nav-left flex gap-8">
          <div className="nav-lang flex items-center gap-2">
            <div className="eng_lang cursor-pointer">
              <img className="" src="/Images/great.png" alt="" />
            </div>
            <div className="ru_lang cursor-pointer">
              <img className=" object-cover" src="/Images/russia.png" alt="" />
            </div>
          </div>
          <div className="nav-search flex bg-custom-gradient rounded-md h-10">
            <button className="bg-transparent text-white px-4 py-2 cursor-pointer">
              <img src="/Images/magnifying-glass.png" alt="" />
            </button>
            <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 bg-transparent text-white w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="nav-logo">
          <Link>
            <img className="" src={logo} alt="logo" width={100}/>
          </Link>
        </div>

        <div className="nav-right">
          <div className="nav-links flex gap-5 my-2  relative">
            <Link to="/cars" className="text-white text-wrap uppercase">Cars</Link>
            <Link to="/brand" className="text-white text-wrap uppercase">Brand</Link>
            <Link to="/service" className="text-white text-wrap uppercase">Service</Link>
            <Link to="/about" className="text-white text-wrap uppercase">About Us</Link>
            <Link to="/contact" className="text-white text-wrap uppercase">Contact</Link>
            <Link to="/blog" className="text-white text-wrap uppercase">Blog</Link>
          </div>
          <div className="phone-links my-2">
            <a className="text-white text-wrap uppercase flex justify-end" href="">+998945142401</a>
            {/* <link>+998945142401</link> */}
          </div>
        </div>

      </nav>
    </header>
  );
}
