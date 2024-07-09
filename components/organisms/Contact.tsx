"use client"
import CopyButton from "../atoms/CopyButton"

const Contact = () => {
  return (
    <div id="contact" className='m-10 p-2 border-2 rounded-md border-white-800'>
      <h1 className="font-bold text-xl md:text-4xl text-purple">Ready to bring your project to life?</h1>
      <p className="text-white-200 text-lg mb-6">Let's think outside the box together.</p>
      <CopyButton link="hello@beahahn.com" />
    </div>
  )
}

export default Contact