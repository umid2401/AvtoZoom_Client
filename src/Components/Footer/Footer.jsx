import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Footer = () => {
  const [cars, setCars] = useState([]);
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toPage = () => {
    scrollToTop();
   
  };
  const getCars = () => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((res) => res.json())
      .then((res) => {
        setCars(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCars();
    
  }, []);
  return (
    <footer className="bg-black text-white py-10  section">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-6">
          <div>
            <Link to="/" onClick={toPage}>
              <img
                src="/Images/red1.png"
                alt="Auto Zoom"
                className="mb-4 w-20 lg:w-24 md:w-20"
              />
            </Link>
            <h2 className="uppercase text-white  lg:text-[18px] lg:leading-9 text-[16px] leading-7 py-2 font-lato mb-4">
             {t("luxury-car-rental")}
            </h2>
            <p className="text-white  lg:text-[16px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
              {t("rent-s")}
            </p>
            <button className="mt-4 px-6   lg:text-[16px] lg:leading-9 text-[14px] leading-7 font-lato hover:bg-orange-500 py-2 bg-black text-white border rounded-xl ">
              {t("get")}
            </button>
          </div>
          <div>
            <Link className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato block">CARS</Link>
            <ul>
              {cars &&
                cars.map((item, index) => (
                  <li key={item.id}  className="uppercase text-white  lg:text-[16px] lg:leading-9 text-[15px] leading-7 py-2 font-lato  ">
                    <Link to={`/cars/${item?.id}`}>{item?.[t("lan")]}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/contact"
              className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-latoblock"
            >
              {t("contact")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/blog"
              className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato block"
            >
              {t("blog")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/service"
              className=" uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato"
            >
              {t("service")}
            </Link>
            <p className="text-white  lg:text-[16px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
              {t("elit")}
            </p>
            
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/about"
              className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato block"
            >
              {t("about")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/faq"
              className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato block"
            >
              {t("faq")}
            </Link>
            <h3 className="uppercase text-white  lg:text-[17px] lg:leading-9 text-[15px] leading-7 py-2 font-lato uppercase">
             {t("follow-us")}
            </h3>
            <div className="flex space-x-3 items-center">
              <a href="#" className="text-xl">
                <FontAwesomeIcon
                  className="hover:text-orange-500"
                  icon={faInstagram}
                />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon
                  className="hover:text-orange-500"
                  icon={faFacebook}
                />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon
                  className="hover:text-orange-500"
                  icon={faYoutube}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7  font-lato"> {t("zoom")} </p>
          <a href="#" className="block text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7  font-lato mt-2">
           {t("app")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
