import React from 'react';
import foto from '../../../assets/Services/service-item-img1-BcBiZjWi.jpg';
import ServicePackegs from './ServicePackegs/ServicePackegs';

export default function ServiceBoxInner({avatar, type, count, person, title, packages}) {
  return (
    <div className='box_inner md:w-[31%] sm:w-[48%] bg-[#1e1f27] text-[#fff] rounded-[.6rem] overflow-hidden'>
        
        <div className='box_inner_images w-full lg:h-[13rem] overflow-hidden lg:mb-[2rem] md:h-[8rem] md:mb-[1rem]'>
            <img src={`/src/assets/Services/${avatar}`} alt="" className='w-[100%]' />
        </div>

        <div className='box_inner_title lg:p-[1rem] p-[.6rem]'>
            <p className='lg:text-[1.6rem] md:text-[1.2rem] text-[1rem] font-bold'>{type}</p>
            <p className='my-[1.3rem] text-[1.2rem] flex items-center '>
                <span className='px-[.7rem] py-[.1rem] divide-solid border-[#18d018] border-[1px] rounded-[.3rem] mr-[1rem]'>{count}</span> 
            {person}</p>
            <div className='box_paragraf mb-[1rem]'>
                <p className='lg:text-[1.1rem] sm:text-[.8rem] lg:leading-[2rem]'>{title}</p>
            </div>
            <div className='box_inner_packegs'>
                <p className='lg:text-[1.6rem] md:text-[1rem] mb-[1rem]'>Package Inclusions:</p>
                <div className='box_packegs'>
                    {
                        packages?.map((items, int) => <ServicePackegs key={int} names={items} />)
                    }
                </div>
            </div>
            <button className='w-full lg:h-[4rem] md:h-[3rem] h-[2.2rem] lg:text-[1.4rem] md:text-[1.1rem] bg-[#fe363b] my-[2rem] rounded-[.5rem] '>BOOK NOW</button>
        </div>

    </div>
  )
}
