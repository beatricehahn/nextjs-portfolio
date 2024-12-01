"use client"
import Link from 'next/link'
import HamburgerIcon from './atoms/HamburgerIcon'
import CloseIcon from './atoms/CloseIcon'
import { useState, useEffect } from 'react'

import '../public/styles/Menu.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Handles opening and closing nav bar icon
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      }, [isOpen]);

    function getMenuClasses() {
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                "fixed",
                "z-5",
                "inset-0",
                "my-auto",
                "bg-white",
                "top-[40px]",
                "left-0",
                "flex-col",
                "flex",
                "justify-center"
            ];
        }
        // if menu is closed 
        else {
            menuClasses = ["hidden", "flex"];
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="bg-white top-0 z-20 py-[18px] mb-[48px] height-[24px] md:height-[32px] lg:height-[64px]">
            <div className="flex justify-between items-center max-w-screen-lg mx-auto px-[18px]">
                <a href="/" className="">
                    <img className='w-[24px] h-[24px] md:w-[32px] md:h-[32px]' src="/images/BH-logo.svg" alt="logo"/>
                </a>
                <button onClick={toggleMenu} className='sm:hidden'> 
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
                <div className='hidden sm:flex space-x-[24px]'>
                    <Link href="/#works" className="block text-sm md:text-base">
                        WORK
                    </Link>
                    <Link href='/about' className="block text-sm md:text-base">
                        ABOUT
                    </Link>
                    <Link href='/#articles' className="block text-sm md:text-base">
                        ARTICLES
                    </Link>
                    <Link href="/contact" className="block text-sm md:text-base">
                        CONTACT
                    </Link>
                </div>
                <div id='dropdown-content' className={getMenuClasses()}>
                    <Link href="/#works" className="text-4xl p-[20px] text-center hover:text-purple-bright font-semibold" onClick={toggleMenu}>
                        WORK
                    </Link>
                    <Link href='/about' className="text-4xl p-[20px] text-center hover:text-purple-bright font-semibold" onClick={toggleMenu}>
                        ABOUT
                    </Link>
                    <Link href='/#articles' className="text-4xl p-[20px] text-center hover:text-purple-bright font-semibold" onClick={toggleMenu}>
                        ARTICLES
                    </Link>
                    <Link href="/contact" className="text-4xl p-[20px] text-center hover:text-purple-bright font-semibold" onClick={toggleMenu}>
                        CONTACT
                    </Link>
                </div>

            </div>
        </nav>
  )
}
