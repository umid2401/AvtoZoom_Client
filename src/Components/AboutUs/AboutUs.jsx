import { useTranslation } from "react-i18next";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    
    <section className="about-us py-10 text-white section">
      <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
      
          <h1 className="uppercase text-white md:text-3xl text-2xl py-2 font-lato">{t("about")} </h1>
          <p className="text-white  lg:text-[17px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("welcome")}
          </p>
          <span className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("in-world")}
          </span>
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato">
          {t("why")}
          </h2>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <span className="text-[16px] font-regular ">{t("elegant")}</span> 
            {t("provide")}
          </p>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <span className="text-[16px] lg:text-[18px] font-regular">{t("worry")}</span>
            {t("our-goal")}
          </p>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <span className="text-[16px] lg:text-[18px] font-regular">{t("trust")}</span>
            {t("we-value")}
          </p>
          <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
            <span className="text-[16px] lg:text-[18px] font-regular">{t("service_at")}</span>
            {t("our-friendly")}
          </p>
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato">
          {t("our-miision")}
          </h2>
          <span className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("a-mission")}
          </span>
          <h2 className="text-white md:text-3xl text-2xl py-2 font-lato">
          {t("contact-us")}
          </h2>
          <span className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("c-trust")}
          </span>
      </div>
    </section>
  );
}

export default AboutUs;
