// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

export default function SevicesBox({avatar, title, paragraf, link}) {
  const navigate = useNavigate();

  return (
    <div className='service_box lg:w-[29%] md:w-[29%] ms:w-[29%] lg:mr-[2.8rem] md:mr-[2.8rem] ms:mr-[2.8rem]'>
        <div className='box_images h-[13rem] overflow-hidden flex items-center justfy-center'>
          <img src={avatar} alt="" className='w-[100%]' />
        </div>
        <div className='box_title'>
          <h2 className='text-[#fff] lg:text-[1.7rem] md:text-[1.2rem] font-lato uppercase lg:my-[1.5rem] md:my-[.8rem] my-[1.5rem]'>{t(title)}</h2>
          <p className='text-[#fff] lg:text-[1.1rem] md:text-[.8rem] font-lato lg:leading-8 md:leading-6 mb-[2rem]'>{t(paragraf)}</p>
          <button className='text-[#fff] uppercase mb-[1rem] font-lato flex items-center' onClick={() => navigate(`/service${link}`)}>
            {t("learn-more")} 
            <FontAwesomeIcon 
              className='ml-[1rem] text-[.8rem] divide-solid border-[2px] tetx-[#fff] py-[6px] px-[8px] rounded-[50%]'
              icon={faChevronRight} 
            />
          </button>
        </div>
    </div>
  )
}
