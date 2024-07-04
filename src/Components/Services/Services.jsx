// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import SevicesBox from './SevicesBox/SevicesBox';
import { dataService } from './mocData/MocData';
import countServices from './ServiceRouter/ServiceRouter';
import ServiceBoxInner from './SevicesBox/ServiceBoxInner';

export default function Services() {
    const [name, dates, titleName] = countServices();
    
  return (
    <div className='service w-full bg-[#111219] p-[1rem] section'>
        <div className=" 2xl:w-[1300px] xl:w-[1120px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
            <div className='service_inner w-full'>

                <div className='servic_title mt-[5.1rem]'>
                    <p className='text-[#98999c] font-lato md:text-[1rem] sm:text-[.8rem] text-[.6rem]'>Luxy Cars for Rent in Dubai / Services {name}</p>
                    <h2 className='text-[#fff] font-lato md:text-[2.4rem] md:my-[1.6rem]
                            sm:text-[2rem] sm:my-[1.6rem] my-[1rem]
                            ' >{titleName}</h2>
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
