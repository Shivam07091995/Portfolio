import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiJquery } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
      <p className='text-2xl text-black text-center sm:text-4xl font-bold pt-1'>
      Technology I use
      </p>
      <div className='flex flex-wrap justify-center pt-2'>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaHtml5 color='#e34c26' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>HTML 5</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaCss3Alt color='#2965f1' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>CSS 3</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <SiJavascript color='#F0DB4F' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>JavaScript</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaBootstrap color='#563d7c' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>Bootstrap</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaReact color='#61DBFB' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>React</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <SiTailwindcss color='#3490dc' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>Tailwind CSS</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <SiNextdotjs color='#5e7693' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>Nextjs</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaNodeJs color='#68a063' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>Node.Js</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <SiJquery color='#0769ad' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>Jquery</p>
        </div>

        <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white
        shadow-2xl rounded-xl sm:w-52'>
          <FaGithub color='#171515' className='mx-auto text-4xl' />
          <p className='mt-6  text-xl sm:text-2xl font-semibold text-center'>GitHub</p>
        </div>

      </div>
    </div>
  )
}

export default Skills;