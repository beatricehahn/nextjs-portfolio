import { FooterItem } from "../molecules/FooterItem"
//max-w-screen-lg mx-auto px-4
export const Footer = () => {
  return (
    <footer className="bg-blue-800 w-full bottom-0 mt-auto" id="footer-content-wrapper">
        <div className='flex justify-start mt-[24px] mb-[24px] px-[18px] mx-auto max-w-screen-lg'>
          <ul className='mt-[32px] mb-[32px] mr-[32px] w-[50%]' id='navigation-links'>
            <h6 className='text-white'>MENU</h6>
            <li className="mt-[12px]"><a href="/#works" className='text-white-200'>Work</a></li>
            <li className="mt-[12px]"><a href="/about" className='text-white-200'>About</a></li>
            <li className="mt-[12px]"><a href="/#contact" className='text-white-200'>Contact</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px]' id='social-links'>
            <h6 className='text-white'>NETWORK</h6>
            <li className="mt-[12px]"><a href="https://www.linkedin.com/in/beatrice-hahn/" target="_blank" className='text-white-200'>LinkedIn</a></li>
            <li className="mt-[12px]"><a href="https://github.com/beatricehahn" target="_blank" className='text-white-200'>Github</a></li>
          </ul>
        </div>
        <div className='mt-[32px] mb-0 flex mx-auto px-[18px] max-w-screen-lg' id='copyright-and-details'>
            <span className='text-white-200 pb-4 text-[12px]'>2024 &copy; Beatrice Hahn</span>
            <span className='text-white-200 pl-[12px] pb-4 text-[12px]'>Product Designer & Front-End Developer</span>
        </div>
    </footer>
  )
}
