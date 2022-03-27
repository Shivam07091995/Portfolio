import React from 'react'
import { FaGithub, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-5 border-t-3/2'>
      <div className='flex justify-center mt-4'>
        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full
      hover:text-white transition-colors' href="https://github.com/Shivam07091995" target="_blank">
          <FaGithub />
          <span className='sr-only'>GitHub</span>
        </a>

        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full
      hover:text-white transition-colors' href="mailto:shivambhagat0709@gmail.com">
          <FaEnvelope />
          <span className='sr-only'>Email</span>
        </a>

        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-700 rounded-full
      hover:text-white transition-colors' href="https://www.facebook.com/shivam.bhagat.71" target="_blank">
          <FaFacebook />
          <span className='sr-only'>Facebook</span>
        </a>

        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full
      hover:text-white transition-colors' href="https://twitter.com/shivamB89766344" target="_blank">
          <FaTwitter />
          <span className='sr-only'>Twitter</span>
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-black mb-4'>
        Made with <span className='mr-2' role="link" aria-aria-label='heart'>❤️</span>by
        <a href="mailto:shivambhagat0709@gmail.com" className='text-blue-500 hover:underline'> Shivam</a> 
        </p>
      </div>
    </div>
  )
}

export default Footer;