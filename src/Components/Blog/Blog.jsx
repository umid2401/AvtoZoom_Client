// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import BlogBox from './BlogBox/BlogBox';
import { BlogData } from './MocData/MocData';
import { useParams } from "react-router-dom";
import BlogInfo from './BlogInfo/BlogInfo';
import { BlogControl } from './BlogControll/BlogControll';
import { useTranslation } from 'react-i18next';

export default function Blog() {
    let {id} = useParams();
    const [dates] = BlogControl(id);
    const { t } = useTranslation();
  return (
    <div className='blog  bg-[#1e1f27] py-5 text-[#fff]  section'>
        <div className="container 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">

            <div className='blog_title p-[1.4rem]'>
                <p className='text-[20px] font-lato text-[#a5a5a9] mb-[1.2rem]'>{t("fr")} / {t("blog")} </p>
                <h2 className='uppercase font-lato   text-[2.7rem]'
                    style={{
                        display: id ? 'none' : 'block'
                    }}
                >{t("blog")}</h2>
            </div>

             {
                id ? <BlogInfo {...dates} /> :
                <div className='blog_boxes xl:my-[2rem] my-10 lg:my-[2rem] md:my-[2rem] bg-[#272933] p-[1.4rem]'>
                    {
                        BlogData?.map((item, index) => <BlogBox key={index} {...item} index={index} />)
                    }
                </div>
            }

        </div>
    </div>
  )
}
