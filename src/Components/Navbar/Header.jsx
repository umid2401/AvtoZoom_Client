import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header className="bg-customColor">
      <nav className="flex w-[90%] mx-auto items-center py-4 px-10 justify-between">

        <div className="nav-left flex gap-8">
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
          <div className="nav-search flex bg-custom-gradient rounded-md h-10">
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
          <div className="nav-logo hidden lg:block">
            <Link>
              <img className="w-24" src="/Images/logo.png" alt="Error" />
            </Link>
          </div>
        </div>

        <div className="nav-logo">
          <Link>
            <img className="" src={logo} alt="logo" width={100}/>
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
            <a className="text-white text-wrap uppercase flex justify-end" href="">+998945142401</a>
            {/* <link>+998945142401</link> */}
          </div>
        </div>

      </nav>
    </header>
  );
}
