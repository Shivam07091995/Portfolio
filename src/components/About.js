import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

const About = () => {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
      <p className='text-2xl text-black md:text-4xl font-bold text-center'>
        Hey👋
      </p>

      <p className='text-base text-center sm:text-xl text-gray-600 leading-relaxed
      mt-4'>
      Innovative Front End Developer with building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript, plus modern libraries and frameworks
      </p>

      <ScrollIntoView selector = '#tech'>
        <div className='mx-auto p-20'>
      <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500"/>
        </div>
      </ScrollIntoView>
    </div>
 
  )
}

export default About;