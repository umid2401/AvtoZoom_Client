import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home_card_sliders = () => {
   const [Brands, setBrands] = useState([])
   const navigate = useNavigate()

   const urlImage = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/"

   const getBrands = () => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
    .then((res) => res.json())
    .then((data) => setBrands(data?.data))
   }

   useEffect(() => {
    getBrands()
   }, [])

   const settings = {
    variableWidth: true,
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow:2,
    responsive: [
        {
          breakpoint: 1270,
          settings: {
            slidesToShow: 2,
            rows: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            rows: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          }
        }
      ]
  };

  return (
    <div className='bg-zinc-900 py-20  truncate'>
        <div  className='2xl:w-[1300px] xl:w-[1200px] lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] mx-auto'>
            <h1 className='font-[600] text-[40px] text-white pl-5'>BRANDS</h1>
            <div className="slider-container">
                <Slider {...settings}>
                  
                      {
                        Brands.map((brand, index) => (
                            <div key={index} className='p-4 ' onClick={() => navigate(`/cars/:${brand.id}`)}>
                                <div className='border border-gray-800 hover:bg-gray-900 rounded-sm flex flex-col justify-center items-center md:py-10 py-5 px-5'>
                                  <img className='md:h-[100px] h-[60px]' src={`${urlImage}${brand?.image_src}`} alt="" />
                                  <p className='md:text-[20px] text-gray-400 md:font-[600] tracking-tighter'>{brand?.title}</p>
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

export default Home_card_sliders