import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function FollowUs() {
    const images = [
        {imgurl:"/Images/insta-img-1.webp"},
        {imgurl:"/Images/insta-img-2.webp"},
        {imgurl:"/Images/insta-img-3.webp"},
        {imgurl:"/Images/insta-img-4.webp"},
        {imgurl:"/Images/insta-img-5.webp"},
        {imgurl:"/Images/insta-img-6.webp"},
    ]
    const [cities, setCities] = useState([]);
    const [locations, setLocations] = useState([]);

const getCities = () =>{
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cities")
    .then(res=>res.json())
    .then(res=>{
        setCities(res?.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
const getLocations = () =>{
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/locations")
    .then(res=>res.json())
    .then(res=>{
        setLocations(res?.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

useEffect(()=>{
    getCities();
    getLocations();
    console.log(cities)
},[])
  return (
    <section className="faq bg-[rgb(30,31,39)]  ">
            <div className="2xl:w-[1300px] xl:w-[1120px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
            <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">Follow Us Instagram</h2>
            <div className="gallery py-5 w-[90%] mx-auto justify-center flex items-center gap-4 lg:flex-nowrap flex-wrap">
                {images&&images.map((item, index)=>(
                    <div key={index} className="card lg:w-[170px] md:w-[320px] sm:w-[250px] w-[125px] h-[180px]">

                        <img className="w-full h-full object-cover"  src={item.imgurl} alt="Err" />
                    </div>
                ))}
            </div>
            <div className="location-city flex gap-6 py-10">
                <div className="location">
                <h2 className="font-lato text-white  text-[24px]">Locations</h2>
                    {locations&&locations.map((item, index)=>(
                        <Link to={`/cars/${item?.id}`} className="block underline text-white font-lato text-[18px] my-1" key={item.id} >{item.name}</Link>
                    ))}
                </div>
                <div className="city flex flex-col">
                    <h2 className="font-lato text-white  text-[24px]">Cities</h2>
                    {cities&&cities.map((item, index)=>(
                        <Link to={`/cars/${item?.id}`} className="block underline text-white font-lato text-[18px] my-1" key={item.id} >{item.name}</Link>
                    ))}
                </div>
            </div>
            </div>
    </section>
  )
}
