import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
// ###################   Cars pictures   ######################
import ferrari from '../../assets/ferrari.png'
import audi from '../../assets/audi.png'
import rols_roy from '../../assets/rols-roy.png'
import mers from '../../assets/mers.png'

const Home_slider = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        centerPadding: "60px",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
      };
  
  return (
    <div className="truncate">
        <div className="bg-gray-900 flex flex-col items-center gap-2 lg:pb-20 pb-10 lg:pt-12 pt-6">
            <h1 className="text-white lg:text-[45px]  text-[30px] font-[600]">TOP LUXURY CAR</h1>
            <h1 className="text-white lg:text-[45px]  text-[30px] font-[600]">RENTAL DUBAI</h1>
            <p className="text-gray-400 md:text-[20px] text-[16px] font-[600] text-wrap lg:w-[700px] w-full lg:px-0 px-20 text-center">
              Best sports car & supercar rental Dubai, Exclusive offers on luxury car rental Dubai Cheap price
            </p>
            <p className="text-gray-400 md:text-[20px] text-[18px] font-[600] flex-wrap pt-5">
            RENT A CAR DUBAI CATALOG
            </p>
        </div>
        <div className='w-screen bg-gray-800 py-20'>
            <div className="slider-container truncate">
                <Slider  ref={slider => {
                    sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div>
                        <Link to={"/cars"}>
                           <img className="px-[50px]" src={ferrari} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cars"}>
                           <img className="px-[50px]" src={audi} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cars"}>
                           <img className="px-[50px]" src={rols_roy} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cars"}>
                           <img className="px-[50px]" src={mers} alt="" />
                        </Link>
                    </div>   
                </Slider>
            </div>

            <div className="flex justify-center 2xl:gap-48  lg:gap-28 pb-10 md:gap-80 sm:gap-40 gap-20">

                <button className="button border-b-2  w-[100px] border-l-2 h-[30px]" onClick={previous}>
                
                </button>
                <button className="button border-b-2  w-[100px] border-r-2 h-[30px]" onClick={next}>
                
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home_slider