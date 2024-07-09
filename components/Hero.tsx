import { TextGenerateEffect } from './ui/TextGenerateEffect'

import '../public/styles/Menu.css'

const Hero = () => {
  return (
    <div id='hero-container' className='overflow-hidden bg-hero rounded-lg'>
        <div id='hero-content' className='mb-10 flex flex-col md:flex-row justify-end'>
          <img 
            src="/images/hero-portrait.png" 
            alt="portrait illustration"
            className='object-cover w-[70%] h-[auto] mx-auto' 
          />
          <div id='hero-header' className='flex flex-col z-10 m-10'>
            <h1 className='font-bold text-white text-4xl md:text-5xl lg:text-6xl'>
              BEATRICE HAHN
            </h1>
            <h4 className='text-xl font-bold'>PRODUCT DESIGNER & DEVELOPER</h4>
            <p className='text-white'>Specializing in visual storytelling and motion design</p>
            <button className='mt-8 p-2 rounded-md bg-black-100 text-white-200'><a href="#works">View My Work</a></button>
          </div>
        </div>
    </div>
  )
}

export default Hero