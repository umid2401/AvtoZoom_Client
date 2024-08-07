import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Home_card_sliders = () => {
  const [Brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const urlImage =
    "https://realauto.limsa.uz/api/uploads/images/";

  const getBrands = () => {
    fetch("https://realauto.limsa.uz/api/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data?.data));
  };

  const toBrand = (brand) => {
    navigate(`cars/brand/${brand}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    getBrands();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    initialSlide: 0,
    rows: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[rgb(30,31,39)]  py-10 lg:py-20 section">
      <div className="faq-container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
        <h2 className="text-white text-center md:text-left md:text-3xl text-2xl py-2 font-lato uppercase">
          {t("brand")}
        </h2>
        <div className=""></div>
        <Slider className="" {...settings}>
          {Brands.map((brand, index) => (
            <div
              onClick={() => toBrand(brand?.id)}
              key={index}
              className="p-5  !w-[290px] cursor-pointer border  my-4  border-gray-800 hover:bg-gray-900 rounded-sm flex flex-col justify-center items-center py-5"
            >
              <div className=" w-[120px] h-[180px] mx-auto ">
                <img
                  className=" w-full h-full object-contain "
                  src={`${urlImage}${brand?.image_src}`}
                  alt=""
                />
              </div>
              <p className="text-[20px] text-center text-gray-400 font-[600] tracking-tighter ">
                {brand?.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_card_sliders;
