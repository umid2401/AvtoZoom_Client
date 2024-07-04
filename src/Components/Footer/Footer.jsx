import {
  faFacebook,
  faGoogle,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toPage = () => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    console.log(cars);
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
              LUXURY CAR RENTAL IN DUBAI
            </h2>
            <p className="font-lato text-[15px]">
              Rent sports and luxury cars directly without intermediaries. Rent
              a car in Dubai with Auto Zoom Car Rental - safety and driving
              pleasure
            </p>
            <button className="mt-4 px-6 font-lato hover:bg-orange-500 py-3 bg-black text-white border rounded-xl ">
              GET BEST OFFER
            </button>
          </div>
          <div>
            <Link className="text-lg font-lato lg:mb-4 mb-2 block">CARS</Link>
            <ul>
              {cars &&
                cars.map((item, index) => (
                  <li key={item.id} className="mb-3 font-lato text-[16px]  ">
                    <Link to={`/cars/${item?.id}`}>{item?.name_en}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/contact"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              CONTACT
            </Link>
            <Link
              onClick={() => toPage()}
              to="/blog"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              BLOG
            </Link>
            <Link
              onClick={() => toPage()}
              to="/service"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              SERVICE
            </Link>
            <p className="font-lato ">
              Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
            </p>
            <p className="font-lato">+971 55 8462124</p>
            <p className="font-lato">Working hours: 24/7</p>
          </div>
          <div>
            <Link
              onClick={() => toPage()}
              to="/about"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              ABOUT US
            </Link>
            <Link
              onClick={() => toPage()}
              to="/faq"
              className="text-lg font-lato lg:mb-4 mb-2 block"
            >
              FAQ
            </Link>
            <h3 className="text-lg font-lato lg:mb-4 mb-2 uppercase">
              Follow Us
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
          <p>© 2024 Auto Zoom Car Rental. United Arab Emirates.</p>
          <a href="#" className="block mt-2">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
