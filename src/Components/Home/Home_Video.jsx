import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home_Video() {
  return (
    <section className="videosection  gap-10  bg-[rgb(17,18,25)] mx-auto">
      <div className="video pb-10 flex items-start w-full flex-wrap">
       
          <div className="lg:w-[60%]  w-full h-[320px] relative" >
            <iframe 
               height="820" 
              className="w-full h-[320px] object-contain absolute top-0 left-0"
              src="https://www.youtube.com/embed/6Bcg46rxqAE"
              title="Auto Zoom Car Rental"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        
        <div className="right-content lg:w-[40%] w-full px-5" >
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">
            Service
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based
            company, We offer sports car rental, and supercar rental in Dubai.
            The best luxury car rental process provided by our fleet . We own a
            diverse range of luxury supercar rental and sports car rental Dubai
            style , including Rolls Royce, Lamborghini, Maserati, Ferrari,
            Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car
            with the best car rental company in Dubai.
          </p>
          <Link to="/service" className="text-white uppercase text-[16px] lg:text-[20px] md:text-[18px] font-lato my-3 flex items-center gap-2">
                <span>Learn More</span>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </Link>
        </div>
      </div>
      <div className="gallery bg-[rgb(39,41,51)] flex flex-wrap items-center">
        <div className="left w-full lg:w-[60%] h-[260px]">
            <img className="w-full h-full object-cover" src="/Images/supercar.webp" alt="" />
        </div>
        <div className="right w-full lg:w-[40%] p-5 lg:p-10">
        <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">
        SUPERCAR RENTAL DUBAI
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          Hire the latest supercar
          </p>
          <Link className="text-white uppercase text-[16px] lg:text-[20px] md:text-[18px] font-lato my-3 flex items-center gap-2">
                <span>See All</span>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </Link>
        </div>
      </div>
    </section>
  );
}
