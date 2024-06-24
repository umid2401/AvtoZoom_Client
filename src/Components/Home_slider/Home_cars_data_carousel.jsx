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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
      };
  return (
    <div className="bg-slate-800 py-20  truncate">
        <div className="2xl:w-[1300px] xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] mx-auto">
            <div className="flex flex-row justify-between">
               <h1 className="text-white font-[600] text-[30px]">BUDGET CARS RENTAL DUBAI</h1>
               <h1 className="text-white font-[600] text-[20px] hover:mr-2" >SEE ALL <span className="px-2  rounded-full border border-white"> {">"}</span></h1>
            </div>
           <div className="slider-container">
              <Slider {...settings}>
                {
                    Cars?.map((car, index) => (
                        <div key={index} className="mt-10" onClick={() => navigate(`/cars/:${car.id}`)}>
                            <div className="px-6 py-10  w-[300px] rounded-lg hover:bg-slate-500">
                               <img className="h-[120px] text-center mx-auto" src={`${urlImage}${car?.car_images[2]?.image?.src}`} alt="" />
                                <p className="text-white border-b pb-2 pt-6 ">
                                    {car.brand.title}
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
    </div>
  )
}

export default Home_cars_data_carousel