import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home_cars_data_carousel = () => {
    const [Cars, setCars] = useState([])

    const navigate = useNavigate()
    console.log(Cars);

    const urlImage = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/"

    const getCarsData = () => {
        fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cars")
        .then((res) => res.json())
        .then((res) => setCars(res?.data))
    }

    useEffect(() => {
        getCarsData()
    }, [])

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 0,
      initialSlide: 0,
      rows:1,
      arrows:false,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    };
  return (
    <div className="bg-[rgb(39,41,51)] py-20  truncate">
        <div className="2xl:w-[1300px] xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] mx-auto">

            {
              Cars?.map((car, index) => (
                <div key={index}>
                      <div className="flex md:flex-row flex-col gap-4 justify-between mt-28">
                        <h1 className="text-white font-[600] font-lato md:text-[30px] text-[20px] ">{car?.category?.name_en}</h1>
                        <h1 className="text-white font-[600] font-thin md:text-[20px] text-[17px] cursor-pointer hover:mr-2" onClick={() => navigate(`/cars/${car?.category_id}`)}>SEE ALL <span className="px-2  rounded-full border border-white"> {">"}</span>
                        </h1>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                car?.car_images?.map((images, imgndex) => (
                                    <div key={imgndex} className="mt-10" onClick={() => navigate(`/cars/:${images?.car_id}`)}>
                                        <div className="px-6 py-10  w-[300px] rounded-xl hover:bg-slate-500 hover:shadow-xl">
                                        <img className="h-[160px] my-5 text-center mx-auto" src={`${urlImage}${images?.image?.src}`} alt="" />
                                            <p className="text-white border-b pb-2 pt-6 ">
                                                {car.brand.title} {car?.model?.name}
                                            </p>
                                            {/* ##############  Price  ############## */}
                                            <p className="pt-3">
                                                <span className="text-white">AED {car?.price_in_aed} /</span> 
                                                <span className="text-gray-600"> $ {car?.price_in_usd}</span>
                                            </p>
                                            <p className="text-white">per day</p>
                                        </div>
                                    </div>
                                ))
                            }                           
                        </Slider>
                    </div>
                </div>
              ))
            }
           
        </div>
    </div>
  )
}

export default Home_cars_data_carousel