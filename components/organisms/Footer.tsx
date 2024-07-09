import { FooterItem } from "../molecules/FooterItem"

export const Footer = () => {
  return (
    <footer className="bg-black w-full pt-2" id="footer-content-wrapper">
        <div className='flex justify-start m-10'>
          <ul className='mt-[32px] mb-[32px] mr-[32px] w-[50%]' id='navigation-links'>
            <h6 className='text-white font-bold'>MENU</h6>
            <li className="mt-[12px]"><a href="#works" className='text-white-200'>Works</a></li>
            <li className="mt-[12px]"><a href="#about" className='text-white-200'>About</a></li>
            <li className="mt-[12px]"><a href="#contact" className='text-white-200'>Contact</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px]' id='social-links'>
            <h6 className='text-white font-bold'>SOCIAL</h6>
            <li className="mt-[12px]"><a href="https://www.linkedin.com/in/beatrice-hahn/" className='text-white-200'>LinkedIn</a></li>
            <li className="mt-[12px]"><a href="https://www.instagram.com/777lemonades/" className='text-white-200'>Instagram</a></li>
            <li className="mt-[12px]"><a href="https://github.com/beatricehahn" className='text-white-200'>Github</a></li>
          </ul>
        </div>
        <div className='mt-[32px] mb-0 flex flex-col md:flex-row justify-center m-10' id='copyright-and-details'>
            <span className='text-white-800 p-4'>2024 &copy; Beatrice Hahn</span>
            <span className='text-white-800 p-4'>Product Designer & Developer</span>
            <span className='text-white-800 p-4'>Portfolio designed in Figma, developed in Next.JS</span>
        </div>
    </footer>
  )
}
