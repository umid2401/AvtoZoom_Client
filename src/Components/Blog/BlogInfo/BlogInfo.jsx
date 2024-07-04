
import { useTranslation } from 'react-i18next';

export default function BlogInfo({id, avatar, titleKey, info, paragrafKey, informKey}) {
  const { t } = useTranslation();
  return (
    <div className='bg-[#1e1f27] text-[#fff] p-[1rem]'>
        <div className='blog_box w-[100%] xl:mt-[1.4rem] lg:mt-[1.4rem] md:mt-[1.4rem] sm:mt-[.2rem]'>

            <div className='blog_box_titles flex flex-col content-between w-[100%] '>
                <h2 className='xl:text-[3rem] font-lato lg:text-[2.4rem] md:text-[1.7rem] text-[1.1rem] xl:mb-[2rem] lg:mb-[2rem] md:mb-[2rem] sm:mb-[1rem] mb-[1.2rem] font-bold '>{t(titleKey)}</h2>
                <p className=' xl:text-[1.1rem] font-lato lg:text-[.8rem] md:text-[.7rem] text-[.6rem]'>{t(paragrafKey)}</p>
                <p className=' xl:text-[1.4rem] font-lato lg:text-[1.1rem] md:text-[1rem] xl:my-[1.8rem] lg:my-[1.5rem] md:my-[1rem] my-[1.5rem]'>{t(info)}</p>
            </div>

            <div className='blog_box_img flex items-center justify-center xl:h-[92%] lg:h-[92%] md:h-[92%] w-[100%] overflow-hidden sm:mr-[1rem] xl:mr-[1.8rem] lg:mr-[1.8rem] md:mr-[1.8rem] mx-auto mb-[2rem]'>
                <img src={avatar} alt="" className='w-[100%] ' />
            </div>

            <p className='font-lato xl:text-[1.1rem] lg:text-[.8rem] md:text-[.7rem] text-[.6rem]'>{t(informKey)}</p>

        </div> 
    </div>
  )
}
