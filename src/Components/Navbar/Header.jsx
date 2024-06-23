// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../../public/Images/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [show_menu, setShov_menu] = useState(false);
  const [show_input, setShow_input] = useState(false);
  const routes = [
    { name: "Cars", to: "/cars" },
    { name: "Brand", to: "/brand" },
    { name: "About Us", to: "/about" },
    { name: "Service", to: "/service" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blog" },
  ];
  const openMenu = () => {
    setShov_menu(true);
  };
  const hideMenu = () => {
    setShov_menu(false);
  };
  const openInput = () => {
    setShow_input(true);
  };

  return (
    <header className="bg-customColor">
      <nav className="flex w-[90%] mx-auto items-center py-4 px-10 justify-between">

        <div className="nav-left flex gap-8">
    <header className="">
      <nav className="  flex items-center py-4 px-4 justify-between bg-customColor">
        <div className="nav-left flex gap-0 lg:gap-6 items-center">
          <div className="nav-lang flex items-center gap-2">
            <img
              className="eng_lang cursor-pointer w-2/3 lg:w-auto"
              src="/Images/great.png"
              alt=""
            />

            <img
              className=" ru_lang cursor-pointer w-2/3 lg:w-auto"
              src="/Images/russia.png"
              alt=""
            />
            <FontAwesomeIcon onClick={() => setShow_input(true)} icon={faMagnifyingGlass} className="hide-search block lg:hidden ml-4 text-white size-4" />
            {/* <img
              
              className="
              src="/Images/glass.png"
              alt="err"
            /> */}
          </div>
          <div
            className={`nav-search ${
              show_input
                ? "flex absolute top-24 left-1/2 -translate-x-1/2"
                : "hidden"
            } px-2 w-10/12 lg:w-1/2   lg:static  lg:flex items-center bg-custom-gradient rounded-md `}
          >
            <button className="bg-transparent text-white px-4 py-2 cursor-pointer">
              <img src="/Images/magnifying-glass.png" alt="" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-transparent text-white w-full focus:outline-none"
            />

            <img
              className="cursor-pointer lg:hidden block"
              src="/Images/cancel.png"
              alt=""
              onClick={() => setShow_input(false)}
            />
          </div>
          <div onClick={() => setShow_input(true)} className="">
            <button className="bg-transparent text-white px-4 py-2 cursor-pointer"></button>
          </div>
        </div>

        <div className="nav-logo">
            <Link>
              <img className="" src={logo} alt="logo" width={100}/>
            </Link>
          <div className="nav-logo hidden lg:block">
            <Link>
              <img className="w-24" src="/Images/logo.png" alt="Error" />
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
        <div className="nav-logo lg:hidden block w-14 md:w-20">
          <Link>
            <img className="w-24" src="/Images/logo.png" alt="Error" />
          </Link>
        </div>
        <div
          className={`overflow-hidden ${
            show_menu ? "translate-x-0" : "-translate-x-full"
          } z-10 transition-all lg:translate-x-0 duration-300 ease-all nav-right transform  absolute lg:static lg:py-0 lg:px-0 py-4 px-4 top-0 left-0 bg-customColor w-2/3 lg:w-auto h-screen lg:h-auto`}
        >
          <div
            onClick={hideMenu}
            className="hide-menu flex lg:hidden justify-end"
          >
            <img src="/Images/hide-menu.png" alt="Error" />
          </div>
          <div className="nav-links lg:flex-row flex-col  flex gap-4 my-2 ">
            {routes &&
              routes.map((item, index) => (
                <Link
                  onClick={hideMenu}
                  key={index}
                  to={item.to}
                  className="text-white text-wrap uppercase"
                >
                  {item.name}
                </Link>
              ))}
          </div>
          <div className="phone-links my-2">
            <a
              className="text-white text-wrap uppercase flex justify-start lg:justify-end"
              href=""
            >
              +998945142401
            </a>
            {/* <link>+998945142401</link> */}
          </div>
        </div>
        <div onClick={openMenu} className="nav-menu lg:hidden block">
        <FontAwesomeIcon icon={faBars} className="text-white size-7" />
        </div>
      </nav>
    </header>
  );
}
