import { FooterItem } from "../molecules/FooterItem"

export const Footer = () => {
  return (
    <footer className="bg-black w-full" id="footer-content-wrapper">
        <div className='flex justify-start mt-10 mb-10 mx-[24px] md:mx-20'>
          <ul className='mt-[32px] mb-[32px] mr-[32px] w-[50%]' id='navigation-links'>
            <h6 className='text-white font-bold'>MENU</h6>
            <li className="mt-[12px]"><a href="#works" className='text-white-200'>Work</a></li>
            <li className="mt-[12px]"><a href="#about" className='text-white-200'>About</a></li>
            <li className="mt-[12px]"><a href="#contact" className='text-white-200'>Contact</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px]' id='social-links'>
            <h6 className='text-white font-bold'>NETWORK</h6>
            <li className="mt-[12px]"><a href="https://www.linkedin.com/in/beatrice-hahn/" target="_blank" className='text-white-200'>LinkedIn</a></li>
            <li className="mt-[12px]"><a href="https://github.com/beatricehahn" target="_blank" className='text-white-200'>Github</a></li>
          </ul>
        </div>
        <div className='mt-[32px] mb-0 flex mx-[24px] md:mx-20' id='copyright-and-details'>
            <span className='text-white-800 pb-4'>2024 &copy; Beatrice Hahn</span>
            <span className='text-white-800 pl-8 pb-4'>Product Designer & Developer</span>
        </div>
    </footer>
  )
}
