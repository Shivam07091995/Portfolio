import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className=' max-w-lg w-full text-center m-auto pt-20 pb-10'>
            <h1 className='text-2xl sm:text-4xl'>Intersted in working together</h1>
            <a href="mailto:shivambhagat0709@gmail.com">
                <span className='mt-6 inline-block w-auto bg-black font-display text-white
                    text-base md:text-xl py-4 px-7 cursor-pointer'>
                    <div className='flex flex-row items-center'>
                        <span className='mr-3'>Please get in touch</span>
                        <FaArrowRight color='white' />
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Contact;