import { useTranslation } from "react-i18next"


export default function PageNot() {
    const {t} = useTranslation();
  return (
    <div className=" lg:min-h-[600px] md:min-h-[500px] min-h-[400px] bg-[rgb(30,31,39)] section flex flex-col justify-center items-center">
      <img src="/Images/404-error.png" alt="" />
      <h1 className="text-xl md:text-[18px] lg:text-[30px] font-lato text-white mb-4">{t("not-found")} </h1>
      <p className="text-[14px] md:text-[16px] lg:text-[22px] text-center font-lato text-white">{t("sorry")} </p>
    </div>
  )
}
