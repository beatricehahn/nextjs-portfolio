import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
//import { MagicButton } from './ui/MagicButton'
import { ShimmerButton } from './ui/ShimmerButton'


const Hero = () => {
  return (
    <div id='hero-container' className='bg-hero rounded-lg mb-10 flex items-end justify-center mt-[1.4rem]'>
        <div id='hero-content' className='mb-10'>
            <div id='hero-header'>
                <h1 className='text-white'>Beatrice Hahn</h1>
                <h3 className='text-white'>PRODUCT DESIGNER & DEVELOPER</h3>
            </div>
            <p className='text-white'>Specializing in interactive storytelling and motion design</p>
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