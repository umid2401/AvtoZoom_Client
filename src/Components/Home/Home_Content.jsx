import { useTranslation } from "react-i18next";

export default function Home_Content() {
  const { t } = useTranslation();
  return (
    <section className="bg-[rgb(39,41,51)]  py-4 section ">
      <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
        <h2 className="text-white md:text-3xl text-2xl py-2 font-lato">
          {t("luxury-car-rental")}
        </h2>
        <p className="text-white lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("are-you")}
        </p>
        <h3 className="font-lato lg:text-[28px] text-[22px] py-2 text-white">
          {t("what-are")}
        </h3>
        <p className="text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato">
          {t("to-rent")}
        </p>
      </div>
    </section>
  );
}
