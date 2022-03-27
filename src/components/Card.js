import React from 'react';
import profile from '../Images/profile.png';
import {FaGithub, FaEnvelope, FaTwitter, FaFacebook} from 'react-icons/fa';

const Card = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl 
        rounded-xl p-5'>
            <div className=''>
            <img src={profile} alt="profile photo" className='w-32 mx-auto shadow-xl
            rounded-full drop-shadow-sm'/>
            </div>
            <div className='text-center mt-5'>
                <p className='text-xl sm:text-2xl text-gray-900'>
                  Shivam Bhagat
                </p>
                <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5
                w-auto inline-block border-b-2'>
                 Front End Developer
                </p>
                <div className= 'flex align-center justify-center mt-4'>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full
                hover:text-white transition-colors' href="https://github.com/Shivam07091995" target="_blank">
                <FaGithub/>
                <span className='sr-only'>GitHub</span>
                </a>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full
                hover:text-white transition-colors' href="mailto:shivambhagat0709@gmail.com">
                <FaEnvelope/>
                <span className='sr-only'>Email</span>
                </a>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-700 rounded-full
                hover:text-white transition-colors' href="https://www.facebook.com/shivam.bhagat.71" target="_blank">
                <FaFacebook/>
                <span className='sr-only'>Facebook</span>
                </a>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full
                hover:text-white transition-colors' href="https://twitter.com/shivamB89766344" target="_blank">
                <FaTwitter/>
                <span className='sr-only'>Twitter</span>
                </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Card