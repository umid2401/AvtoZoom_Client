import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home_Video() {
  const { t } = useTranslation();
  const scrollTo = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="videosection  gap-10  bg-[rgb(17,18,25)] mx-auto section">
      <div className="video pb-10 flex items-start w-full flex-wrap">
        <div className="lg:w-[60%]  w-full h-[320px] relative">
          <iframe
            height="820"
            className="w-full h-[320px] object-contain absolute top-0 left-0"
            src="https://www.youtube.com/embed/6Bcg46rxqAE"
            title="Auto Zoom Car Rental"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="right-content lg:w-[40%] w-full px-5">
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">
            {t("service")}
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            {t("auto-zoom")}
          </p>
          <Link
           
            to="/service"
            className="text-white uppercase text-[16px] lg:text-[20px] md:text-[18px] font-lato my-3 flex items-center gap-2"
          >
            <span>{t("learn-more")}</span>
            <FontAwesomeIcon
              className="ml-[.6rem] text-[.8rem] divide-solid border-[2px] tetx-[#fff] py-[6px] px-[8px] rounded-[50%]"
              icon={faChevronRight}
            />
          </Link>
        </div>
      </div>
      <div className="gallery bg-[rgb(39,41,51)] flex flex-wrap items-center">
        <div className="left w-full lg:w-[60%] h-[260px]">
          <img
            className="w-full h-full object-cover"
            src="/Images/supercar.webp"
            alt=""
          />
        </div>
        <div className="right w-full lg:w-[40%] p-5 lg:p-10">
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">
            {t("super")}
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            {t("hire")}
          </p>
          <Link
            onClick={scrollTo}
            to="/cars"
            className="text-white uppercase text-[16px] lg:text-[20px] md:text-[18px] font-lato my-3 flex items-center gap-2"
          >
            <span>{t("see-all")}</span>
            <FontAwesomeIcon
              className="ml-[.6rem] text-[.8rem] divide-solid border-[2px] tetx-[#fff] py-[6px] px-[8px] rounded-[50%]"
              icon={faChevronRight}
            />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
