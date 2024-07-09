import { TextGenerateEffect } from './ui/TextGenerateEffect'

import '../public/styles/Menu.css'

const Hero = () => {
  return (
    <div id='hero-container' className='overflow-hidden bg-hero rounded-lg'>
        <div id='hero-content' className='mb-10 relative flex items-center justify-center'>
          <img 
            src="/images/hero-portrait.png" 
            alt="portrait illustration"
            className='object-cover w-full h-full md:w-[80%]' 
          />
          <div id='hero-header' className='absolute inset-0 flex flex-col items-center justify-center z-10'>
            <h1 className='font-bold text-white text-6xl md:text-7xl lg:text-8xl'>
              BEATRICE HAHN
            </h1>
            <TextGenerateEffect 
              className='text-center text-[20px]'
              words="PRODUCT DESIGNER & DEVELOPER"
            />
            <p className='text-white'>Specializing in interactive storytelling and motion design</p>
          </div>
        </div>
    </div>
  )
}

export default Hero