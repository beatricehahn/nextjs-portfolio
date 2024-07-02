import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
//import { MagicButton } from './ui/MagicButton'
import { ShimmerButton } from './ui/ShimmerButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>
        <div>
            <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl text-white-100'
                words="Beatrice Hahn"
            />

            <a href="#about">
                <ShimmerButton 
                    title="See My Work"    
                />
            </a>
        </div>
    </div>
  )
}

export default Hero