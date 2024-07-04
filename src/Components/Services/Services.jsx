// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import SevicesBox from './SevicesBox/SevicesBox';
import { dataService } from './mocData/MocData';
import countServices from './ServiceRouter/ServiceRouter';
import ServiceBoxInner from './SevicesBox/ServiceBoxInner';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const [name, dates, titleName] = countServices();
    const { t } = useTranslation();
  return (
    <div className='service  bg-[#111219] py-5  section'>
        <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
            <div className='service_inner w-full'>

                <div className='servic_title'>
                    <p className='text-[#98999c] font-lato md:text-[20px] sm:text-[.8rem] text-[.8rem]'>{t("top-rent")} / {t("service")} {name}</p>
                    <h2 className='text-[#fff] font-lato md:text-[2.4rem] md:my-[1.6rem]
                            sm:text-[2rem] sm:my-[1.6rem] my-[1rem]
                            ' >{t("service")}</h2>
                </div>

                <div className='service_boxes w-[100%] flex flex-wrap items-start '>
                    {
                        dates ? 
                        <div className='flex flex-wrap items-start justify-around'>
                            {dates?.map((elem, i) => <ServiceBoxInner key={i} {...elem} />)}
                        </div>           
                        :
                        dataService?.map((item, index) => <SevicesBox key={index} {...item} />)
                    }
                </div>

            </div>
        </div>
    </div>
  )
}
