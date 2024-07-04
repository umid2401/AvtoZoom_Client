import { Collapse } from "antd";

import { useTranslation } from "react-i18next";



export default function Faq() {
  const { t } = useTranslation();
  const texts = [
    {
      label: t("what-is"),
      text: t("answer-is"),
    },
    {
      label: t("what-do"),
      text: t("answer-do",)
    },
    {
      label: t("how-much"),
      text: t("includes"),
    },
    {
      label:t("what-are"),
      text: t("local-drive"),
    },
    {
      label: t("can"),
      text: t("contract"),
    },
  ];
  
  const items = texts.map((text, index) => ({
    key: (index + 1).toString(),
    label: (
      <p className="text-white lg:text-[20px] text-[16px] font-lato">{text.label}</p>
    ),
    children: <p className="text-white lg:text-[16px] text-[14px] font-lato">{text.text}</p>,
    
  }));
 
  return (
    <section className="faq bg-[rgb(30,31,39)] section ">
      <div className="faq-container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
      <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">{t("faq")}</h2>
      <Collapse
      className="custom-collapse pt-4 pb-8"
      ghost
      items={items}
      
    />
      </div>
    </section>
  );
}
