import { FooterItem } from "../molecules/FooterItem"

export const Footer = () => {
  return (
    <footer className="bg-black w-full pt-20" id="footer-content-wrapper">
        <div className='flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-around'>
          <ul className='mt-[32px] mb-[32px] sm:mb-[64px]' id='navigation-links'>
            <h6 className='text-white font-semibold'>MENU</h6>
            <li className="mt-[16px]"><a href="/about" className='text-white-200'>About</a></li>
            <li className="mt-[16px]"><a href="/work" className='text-white-200'>Work</a></li>
            <li className="mt-[16px]"><a href="/contact" className='text-white-200'>Contact</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px]' id='social-links'>
            <h6 className='text-white font-semibold'>SOCIAL</h6>
            <li className="mt-[16px]"><a href="https://www.linkedin.com/in/beatrice-hahn/" className='text-white-200'>LinkedIn</a></li>
            <li className="mt-[16px]"><a href="https://www.instagram.com/777lemonades/" className='text-white-200'>Instagram</a></li>
            <li className="mt-[16px]"><a href="https://github.com/beatricehahn" className='text-white-200'>Github</a></li>
          </ul>
        </div>
        <div className='mt-[32px] mb-0 flex justify-center' id='copyright-and-details'>
            <span className='text-white-800  px-[20px] py-[20px]'>2024 &copy; Beatrice Hahn</span>
            <span className='text-white-800 px-[20px] py-[20px]'>Product Designer & Developer</span>
            <span className='text-white-800 px-[20px] py-[20px]'>Portfolio designed in Figma, developed in Next.JS</span>
        </div>
    </footer>
  )
}
