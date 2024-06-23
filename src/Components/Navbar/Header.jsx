// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <img
              onClick={() => setShow_input(true)}
              className="hide-search block lg:hidden ml-4"
              src="/Images/glass.png"
              alt="err"
            />
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
              onClick={()=>setShow_input(false)}
            />
          </div>
          <div onClick={() => setShow_input(true)} className="">
            <button className="bg-transparent text-white px-4 py-2 cursor-pointer"></button>
          </div>
          <div className="nav-logo hidden lg:block">
            <Link>
              <img className="w-24" src="/Images/logo.png" alt="Error" />
            </Link>
          </div>
        </div>
        <div className="nav-logo lg:hidden block w-20">
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
          <img src="/Images/icon-menu.png" alt="" />
        </div>
      </nav>
    </header>
  );
}