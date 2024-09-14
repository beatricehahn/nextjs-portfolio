"use client"
import CopyButton from "../atoms/CopyButton"

const Contact = () => {
  return (
    <div id="contact" className='mb-10 flex flex-col items-center py-10 px-4 rounded-[16px] bg-purple'>
      <h1 className="font-bold text-xl md:text-4xl text-white">Ready to bring your project to life?</h1>
      <p className="text-white text-lg mb-8 mt-2">Let's think outside the box together.</p>
      <CopyButton link="hello@beahahn.com" />
    </div>
  )
}

export default Contact