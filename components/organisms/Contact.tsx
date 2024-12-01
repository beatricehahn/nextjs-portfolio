"use client"
import CopyButton from "../atoms/CopyButton"
import Image from "next/image"

const Contact = () => {
  return (
    <div id="contact" className='mb-10 flex flex-col items-center py-10 px-4 rounded-[16px] bg-blue-800'>
      <div>
        <h2 className="text-xl md:text-4xl text-white">Ready to bring your project to life?</h2>
        <p className="text-white text-lg mb-8 mt-2">Let's think outside the box together.</p>
        <div className="mb-[24px]">
          <Image className="inline mr-[8px]" src="/icons/email-white.svg" alt="email icon" width={22} height={22} />
          <span className="text-white">Email me at </span>
          <CopyButton link="hello@beahahn.com" />
        </div>
        <div>
          <Image className="inline mr-[8px]" src="/icons/linkedin-white.svg" alt="email icon" width={20} height={20} />
          <span className="text-white">Or Let's connect on </span>
          <a href="https://www.linkedin.com/in/beatrice-hahn/" target="_blank" className="text-white underline">
            LinkedIn
            <Image className="inline" src="/icons/slanted-arrow-white.svg" alt="diagonal arrow" width={22} height={22} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact