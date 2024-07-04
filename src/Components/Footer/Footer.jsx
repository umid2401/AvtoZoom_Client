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
                src="/Images/logo.png"
                alt="Auto Zoom"
                className="mb-4 w-20 lg:w-24 md:w-20"
              />
            </Link>
            <h2 className="text-xl font-lato mb-4">
             {t("luxury-car-rental")}
            </h2>
            <p className="font-lato text-[15px]">
              {t("rent-s")}
            </p>
            <button className="mt-4 px-6 font-lato hover:bg-orange-500 py-3 bg-black text-white border rounded-xl ">
              {t("get")}
            </button>
          </div>
          <div>
            <Link className="text-lg font-lato lg:mb-4 mb-2 block">CARS</Link>
            <ul>
              {cars &&
                cars.map((item, index) => (
                  <li key={item.id}  className="mb-3 font-lato text-[16px]  ">
                    <Link to={`/cars/${item?.id}`}>{item?.[t("lan")]}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/contact"
              className="text-lg uppercase font-lato lg:mb-4 mb-2 block"
            >
              {t("contact")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/blog"
              className="text-lg uppercase font-lato lg:mb-4 mb-2 block"
            >
              {t("blog")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/service"
              className="text-lg uppercase font-lato lg:mb-4 mb-2 block"
            >
              {t("service")}
            </Link>
            <p className="font-lato ">
              {t("elit")}
            </p>
            
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/about"
              className="lg:text-lg uppercase font-lato lg:mb-4 mb-2 block"
            >
              {t("about")}
            </Link>
            <Link
              onClick={() => toPage()}
              to="/faq"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              {t("faq")}
            </Link>
            <h3 className="text-lg font-lato lg:mb-4 mb-2 uppercase">
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
          <p> {t("zoom")} </p>
          <a href="#" className="block mt-2">
           {t("app")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
