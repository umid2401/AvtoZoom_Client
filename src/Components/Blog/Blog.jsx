import React, {useState, useEffect} from 'react';
import BlogBox from './BlogBox/BlogBox';
import { BlogData } from './MocData/MocData';
import { useParams } from "react-router-dom";
import BlogInfo from './BlogInfo/BlogInfo';
import { BlogControl } from './BlogControll/BlogControll';

export default function Blog() {
    let {id} = useParams();
    const [dates] = BlogControl(id);
    
  return (
    <div className='blog w-full bg-[#1e1f27] text-[#fff] xl:p-[1.6rem] lg:p-[1.6rem] md:p-[1.6rem] section'>
        <div className="container 2xl:w-[1300px] xl:w-[1120px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">

            <div className='blog_title p-[1.4rem]'>
                <p className='text-[.9rem] font-lato text-[#a5a5a9] mb-[1.2rem]'>Luxury Cars fr Rent in Dubai / Blog {dates && '/ ' + dates.title}</p>
                <h2 className='uppercase font-lato   text-[2.7rem]'
                    style={{
                        display: id ? 'none' : 'block'
                    }}
                >Blog</h2>
            </div>

             {
                id ? <BlogInfo {...dates} /> :
                <div className='blog_boxes xl:my-[2rem] lg:my-[2rem] md:my-[2rem] bg-[#272933] p-[1.4rem]'>
                    {
                        BlogData?.map((item, index) => <BlogBox key={index} {...item} index={index} />)
                    }
                </div>
            }

        </div>
    </div>
  )
}
