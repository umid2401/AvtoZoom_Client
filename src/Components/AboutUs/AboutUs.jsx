import { useTranslation } from "react-i18next";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    
    <section className="about-us py-10 text-white section">
      <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
      
          <h1 className="uppercase text-4xl font-lato mb-8">{t("about")} </h1>
          <p className="text-white text-2xl font-lato mb-7">
          {t("welcome")}
          </p>
          <span className="font-lato text-[18px]">
          {t("in-world")}
          </span>
          <h2 className="text-2xl mt-10 mb-5 font-lato">
          {t("why")}
          </h2>
          <p className="text-[18px] mb mb-7 font-lato">
            <span className="text-2xl ">{t("elegant")}</span> 
            {t("provide")}
          </p>
          <p className="text-[18px] mb-7 font-lato">
            <span className="text-2xl">{t("worry")}</span>
            {t("our-goal")}
          </p>
          <p className="text-[18px] mb-7 font-lato">
            <span className="text-2xl">{t("trust")}</span>
            {t("we-value")}
          </p>
          <p className="text-[18px] mb-16 font-lato">
            <span className="text-2xl">{t("service_at")}</span>
            {t("our-friendly")}
          </p>
          <h2 className="text-2xl mt-10 mb-5 font-lato">
          {t("our-miision")}
          </h2>
          <span className="text-2xl mb-16 font-lato">
          {t("a-mission")}
          </span>
          <h2 className="text-2xl mt-10 mb-5 font-lato">
          {t("contact-us")}
          </h2>
          <span className="text-sm mb-7 font-lato">
          {t("c-trust")}
          </span>
      </div>
    </section>
  );
}

export default AboutUs;
