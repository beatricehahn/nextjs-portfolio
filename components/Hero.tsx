import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
//import { MagicButton } from './ui/MagicButton'
import { ShimmerButton } from './ui/ShimmerButton'

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
    // <div className='pb-20 pt-36'>
    //     <div>
    //         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
    //         <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
    //         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
    //     </div>
    //     <div>
    //         <TextGenerateEffect 
    //             className='text-center text-[40px] md:text-5xl lg:text-6xl text-black-100'
    //             words="Beatrice Hahn"
    //         />

    //         <a href="#about">
    //             <ShimmerButton 
    //                 title="See My Work"    
    //             />
    //         </a>
    //         <a href="#contact">
    //             <ShimmerButton 
    //                 title="Contact"    
    //             />
    //         </a>
    //     </div>
    // </div>
  )
}

export default Hero