import React from 'react';
import './BlogBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BlogBox({ id, avatar, titleKey, paragrafKey, date }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='blog_box xl:flex lg:flex md:flex items-start xl:h-[auto]  md:h-[8.1rem] w-[100%]'>

      <div className='blog_box_img flex items-center justify-center xl:h-[92%]  md:h-[92%] w-[94%] xl:w-[24%] lg:w-[24%] md:w-[24%] overflow-hidden sm:mr-[1rem] xl:mr-[1.8rem] lg:mr-[1.8rem] md:mr-[1.8rem] mx-auto mb-[2rem]'>
        <img src={avatar} alt="" className='w-[100%]' />
      </div>

      <div className='blog_box_titles flex flex-col content-between xl:w-[76%] lg:w-[76%] md:w-[76%] h-[100%]'>
        <h2 className='text-white md:text-3xl text-xl py-2 font-lato'>{t(titleKey)}</h2>
        <p className='text-white  lg:text-[18px] lg:leading-9 text-[14px] leading-7 py-2 font-lato'>{t(paragrafKey)}</p>
        <div className='blog_box_inner flex items-center justify-between h-[10%]'>
          <p className='font-lato text-[#a5a5a9]'>{date}</p>
          <button className='blog_box_btn xl:px-[.7rem] lg:px-[.7rem] md:px-[.7rem] px-[.4rem] xl:py-[.3rem] lg:py-[.3rem] md:py-[.3rem] py-[.04rem] border-solid border border-[#ccc] rounded-[50%]'
            onClick={() => navigate(`${id}`)}
          >
            <FontAwesomeIcon icon={faChevronRight} className='pointer-events-none' />
          </button>
        </div>
      </div>

    </div>
  )
}
