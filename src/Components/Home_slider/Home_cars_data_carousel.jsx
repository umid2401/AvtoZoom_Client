// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

const Home_cars_data_carousel = ({setLoader}) => {
  const [Cars, setCars] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const urlImage =
    "https://realauto.limsa.uz/api/uploads/images/";

  const getCarsData = () => {
    
    fetch("https://realauto.limsa.uz/api/cars")
      .then((res) => res.json())
      .then((res) => setCars(res?.data));
  };

  useEffect(() => {
    getCarsData();
    
  }, []);
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const toCarInfo = (item) =>{
    scrollToTop();
    navigate(`/carinfo/${item}`);
    setLoader(true);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    initialSlide: 0,
    rows: 1,
    arrows: false,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[rgb(39,41,51)] py-10 lg:py-20  section">
      <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
        {Cars?.map((car, index) => (
          <div key={index}>
            <div className="flex md:flex-row my-5 items-center flex-col gap-2  md:justify-between ">
              <h1 className="text-white uppercase text-wrap font-regular md:text-[30px] text-[16px] ">
                {car?.category[t("lan")]}
              </h1>
              <h1
                className="text-white uppercase flex items-center  font-regular md:text-[20px] text-[12px] cursor-pointer hover:mr-2"
                onClick={() => navigate("/cars")}
              >
                <span>{t("see-all")}</span>
                <FontAwesomeIcon 
              className='ml-[.6rem] text-[.8rem] divide-solid border-[2px] tetx-[#fff] py-[6px] px-[8px] rounded-[50%]'
              icon={faChevronRight} 
            />
              </h1>
            </div>
            <div className="slider-">
              <Slider {...settings}>
                {car?.car_images?.map((images, imgndex) => (
                  <div
                    key={imgndex}
                    className="md:my-5 my-2 w-[20%]"
                    onClick={() =>toCarInfo(images?.car_id) }
                  >
                    <div className=" py-5 w-[290px] lg:w-[300px]  md:px-5 mr-8 px-0 ml-[0px] cursor-pointer rounded-xl hover:bg-[rgb(30,31,39)] hover:shadow-xl">
                     
                      <img
                        className="h-[160px] mx-auto text-center "
                        src={`${urlImage}${images?.image?.src}`}
                        alt=""
                      />
                      <p className="text-center md:text-left font-lato text-[16px] md:text-[18px] lg:text-[20px] text-white border-b pb-2 pt-6 ">
                        {car.brand.title} {car?.model?.name}
                      </p>
                      
                      <p className="text-center md:text-left font-lato text-[17px] md:text-[19px] lg:text-[22px] pt-3">
                        <span className="text-white ">
                          AED {car?.price_in_aed} /
                        </span>
                        <span className="text-gray-600 font-lato text-[14px] md:text-[16px] lg:text-[18px]">
                          {" "}
                          $ {car?.price_in_usd}
                        </span>
                      </p>
                      <p className="text-center md:text-left text-white font-lato text-[16px] md:text-[18px] lg:text-[20px]">per day</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_cars_data_carousel;
