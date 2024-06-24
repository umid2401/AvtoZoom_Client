// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleXmark,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [show_menu, setShov_menu] = useState(false);
  const [show_input, setShow_input] = useState(false);
  const [brand_cars, setBrand_cars] = useState([]);
  // const urlImage =
  //   "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const getCarsData = () => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cars")
      .then((res) => res.json())
      .then((res) => setBrand_cars(res?.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarsData();
    console.log(brand_cars);
  }, [brand_cars]);
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

  return (
    <header className="">
      <nav className="  flex items-center py-4  px-4 lg:px-6 justify-between bg-customColor">
        <div className="nav-left flex gap-0 lg:gap-12 items-center">
          <div className="nav-lang flex items-center gap-2">
            <img
              className="eng_lang cursor-pointer w-6 lg:w-auto"
              src="/Images/great.png"
              alt=""
            />

            <img
              className=" ru_lang cursor-pointer w-6 lg:w-auto"
              src="/Images/russia.png"
              alt=""
            />

            <FontAwesomeIcon
              onClick={() => setShow_input(true)}
              icon={faMagnifyingGlass}
              className="hide-search block lg:hidden ml-4 text-white size-5"
            />
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

            <FontAwesomeIcon
              onClick={() => setShow_input(false)}
              icon={faCircleXmark}
              beatFade
              style={{ color: "#ffffff" }}
              className="cursor-pointer lg:hidden  block size-4"
            />
          </div>

          <div className="nav-logo hidden lg:block">
            <Link to="/">
              <img className="w-24" src="/Images/logo.png" alt="Error" />
            </Link>
          </div>
        </div>
        <div className="nav-logo lg:hidden block ">
          <Link to="/">
            <img className=" w-16 sm:w-20 md:w-24" src="/Images/logo.png" alt="Error" />
          </Link>
        </div>
        <div className={`overflow-hidden ${
            show_menu ? "translate-x-0" : "-translate-x-full"
          } z-10 transition-all lg:translate-x-0 duration-300 ease-all w-3/4 nav-right transform  absolute lg:static lg:py-0 lg:px-0 py-4 px-4 top-0 left-0 bg-customColor  lg:w-1/2 h-screen lg:h-auto`}
        >
          <div
            onClick={hideMenu}
            className="hide-menu flex lg:hidden justify-end"
          >
            <FontAwesomeIcon icon={faXmark} className="text-white size-7" />
          </div>
          <div className="w-full nav-links lg:flex-row flex-col justify-end flex-wrap gap-y-2  gap-x-9  flex  my-2 ">
            {routes &&
              routes.map((item, index) => (
                <Link
                  onClick={hideMenu}
                  key={index}
                  to={item.to}
                  className=" px-1  links transition duration-300 ease-in-out  text-white hover:text-orange-500 hover:underline-offset-2 font-lato text-nowrap uppercase"
                >
                  {item.name}
                </Link>
              ))}
          <div className="phone-links    ">
              <a
                className="text-white font-lato text-wrap uppercase flex justify-start lg:justify-end"
                href=""
              >
                +998945142401
              </a>
            
            </div>
          </div>
          
        </div>
        <div onClick={openMenu} className="nav-menu lg:hidden block">
          <FontAwesomeIcon icon={faBars} className="text-white size-7" />
        </div>
      </nav>
      <div className="dropdown bg-dropColor  h-6">
        {brand_cars ? (
          brand_cars.map((item, index) => (
            <Link to="/" className="text-white" key={index}>
              {item.id}
            </Link>
          ))
        ) : (
          <div>
            <h2 className="text-center text-white">Data not found</h2>
          </div>
        )}
      </div>
    </header>
  );
}
