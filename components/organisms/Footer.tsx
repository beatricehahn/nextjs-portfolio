import { FooterItem } from "../molecules/FooterItem";
import { DiagonalArrowIcon } from "../atoms/Icons/DiagonalArrowIcon";

//max-w-screen-lg mx-auto px-4
export const Footer = () => {
  return (
    <footer className="bg-blue-800 w-full bottom-0 mt-auto rounded-t-[32px]" id="footer-content-wrapper">
        <div className='flex flex-col sm:flex-row justify-start mt-[24px] mb-[24px] px-[18px] mx-auto max-w-screen-lg tracking-[0.1em]'>
          <ul className='mt-[32px] mb-[32px] mr-[32px]' id='navigation-links'>
            <h6 className='text-white tracking-[0.2em]'>NAVIGATION</h6>
            <li className="mt-[12px]"><a href="/#works" className='text-white-200'>Work</a></li>
            <li className="mt-[12px]"><a href="/#articles" className='text-white-200'>Articles</a></li>
            <li className="mt-[12px]"><a href="/about" className='text-white-200'>About</a></li>
            <li className="mt-[12px]"><a href="/contact" className='text-white-200'>Contact</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px] mr-[32px]' id='navigation-links'>
            <h6 className='text-white tracking-[0.2em]'>CASE STUDIES</h6>
            <li className="mt-[12px]"><a href="/" className='text-white-200'>React DX Mobile UX Redesign</a></li>
            <li className="mt-[12px]"><a href="/" className='text-white-200'>Weingart Desktop Portal Design</a></li>
            <li className="mt-[12px]"><a href="/" className='text-white-200'>Digital Demons (Mobile Game)</a></li>
          </ul>
          <ul className='mt-[32px] mb-[32px]  sm:px-[32px]' id='social-links'>
            <h6 className='text-white tracking-[0.2em]'>DIGITAL ACTIVITY</h6>
            <li className="mt-[24px] mb-[32px]">
              <a href="https://www.linkedin.com/in/beatrice-hahn/" target="_blank" className='bg-blue-100 rounded-md p-[12px]'>
                <div className="inline">
                  <span>LinkedIn</span>
                  <DiagonalArrowIcon color={"#0A2540"} h={24} w={24} />
                </div>
              </a>
            </li>
            <li className="mt-[12px]">
              <a href="https://github.com/beatricehahn" target="_blank" className='bg-blue-100 rounded-md p-[12px]'>
                <div className="inline">
                    <span>Github</span>
                    <DiagonalArrowIcon color={"#0A2540"} h={24} w={24} />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-[32px] mb-0 flex mx-auto px-[18px] max-w-screen-lg tracking-[0.1em]' id='copyright-and-details'>
            <span className='text-white-200 pb-4 text-[12px]'>&copy; 2024 Beatrice Hahn</span>
            {/* <span className='text-white-200 pl-[12px] pb-4 text-[12px]'>Product Design & Development</span> */}
        </div>
    </footer>
  )
}
