import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className='contact bg-[#111219] h-[100%] text-[#fff] py-[2rem] section'>
        <div className=" 2xl:w-[1300px] xl:w-[1120px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">

            <div className='contact_title mt-[2rem] mb-[4rem]'>
                <p className='xl:text-[.9rem] font-lato lg:text-[.9rem] md:text-[.9rem] text-[.9rem] text-[#a5a5a9] mb-[1.8rem]'>Luxury Cars fr Rent in Dubai / Contacts </p>
                <h2 className='xl:text-[2.3rem] font-lato lg:text-[2.3rem] md:text-[2.3rem] text-[1.3rem] font-bold'>HAVE ANY QUESTIONS?</h2>
                <p className='xl:text-[1.1rem] font-lato lg:text-[1.1rem] md:text-[1.1rem] text-[.8rem] text-[#a5a5a9] mb-[.2rem] mt-[2.3rem]'>We woud love to help</p>
                <p className='xl:text-[1.1rem] font-lato lg:text-[1.1rem] md:text-[1.1rem] text-[.8rem] text-[#a5a5a9] '>Auto Zoom Car Rental Dubai, is the best luxury car
                    rental Dubai based company.
                </p>
            </div>

            <div className='contact border-solid border-[#ccc] border-b-[1px] pb-[1rem]'>
                <h2 className='text-[1.9rem] font-lato ml-[2.8rem]'>Head office</h2>
                <p className='my-[1rem] font-lato block xl:text-[1.4rem] lg:text-[1.4rem] md:text-[1.4rem] text-[.8rem]'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-[#a5a5a9] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]' />
                    Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                </p>
                <Link className='my-[1rem] font-lato block xl:text-[1.4rem] lg:text-[1.4rem] md:text-[1.4rem] text-[.8rem]'>
                    <FontAwesomeIcon icon={faPhone} className='text-[#a5a5a9] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]' />
                    +971 (55) 846 21 24
                </Link>
                <a className='my-[1rem] block xl:text-[1.4rem] lg:text-[1.4rem] md:text-[1.4rem] text-[.8rem]' href='office@autozoomrental.com' target="_blank">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-[#a5a5a9] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1.2rem] text-[.9rem] mr-[1.1rem]' />
                    office@autozoomrental.com
                </a>
            </div>

            <div className="iframe w-[100%]">
                <iframe className='w-[100%] h-[500px] border-none rounded-[10px]' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1714817439223!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d57839.24523334271!2d55.15401588842771!3d25.035674905610872!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1719836507945!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                 */}
            </div>

        </div>
    </div>
  )
}
