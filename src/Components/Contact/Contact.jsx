import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="contact bg-[#111219] h-[100%] text-[#fff] py-[2rem] section">
      <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
        <div className="contact_title ">
          <p className="xl:text-[1rem] font-lato lg:text-[2rem] md:text-[.9rem] text-[.9rem] text-[#a5a5a9] mb-[1.8rem]">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              {t("cars-f")}
            </span>
            /{t("contact")}{" "}
          </p>
          <h2 className="text-white md:text-3xl text-xl py-2 font-lato">
            {t("have")}{" "}
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            {t("we-would")}{" "}
          </p>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato ">
            {t("a-car")}
          </p>
        </div>

        <div className="contact border-solid border-[#ccc] border-b-[1px] pb-[1rem]">
          <h2 className="text-white md:text-3xl text-xl py-2 font-lato">
            {t("head")}{" "}
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#a5a5a9] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]"
            />
            {t("location")}
          </p>
          <Link className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#a5a5a9] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]"
            />
            +971 (55) 846 21 24
          </Link>
          <a
            className="my-[1rem] font-lato block xl:text-[1.4rem] lg:text-[1.4rem] md:text-[1.4rem] text-[.8rem]"
            href="office@autozoomrental.com"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-[#a5a5a9] font-lato xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]"
            />
            office@autozoomrental.com
          </a>
        </div>

        <div className="iframe w-[100%]">
          <iframe
            className="w-[100%] h-[500px] border-none rounded-[10px]"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1714817439223!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
