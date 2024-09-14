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
                "z-10",
                "inset-0",
                "height-full",
                "bg-white",
                "top-10",
                "p-20",
                "left-0",
                "flex-col",
                "flex",
                "justify-center",
                "align-items",
            ];
        }
        // if menu is closed 
        else {
            menuClasses = ["hidden", "flex"];
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="bg-white sticky z-20 top-0 py-4 mb-4 mx-[16px] md:mx-20 height-[32px] md:height-[64px] lg:height-[88px]">
            <div className="flex justify-between items-center">
                <a href="/" className="text-[16px] md:text-[20px] lg:text-[32px] font-bold">Beatrice Hahn</a>
                <button onClick={toggleMenu} className='sm:hidden'> 
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
                <div className='hidden sm:flex space-x-[24px]'>
                    <Link href="/#works" className="block md:text-[18px] lg:text-[24px] font-semi-bold">
                        WORK
                    </Link>
                    <Link href='/about' className="block md:text-[18px] lg:text-[24px] font-semi-bold">
                        ABOUT
                    </Link>
                    <Link href="/#contact" className="block md:text-[18px] lg:text-[24px] font-semi-bold">
                        CONTACT
                    </Link>
                </div>
                <div id='dropdown-content' className={getMenuClasses()}>
                    <Link href="/#works" className="text-4xl p-[20px] text-center hover:text-gray-300 font-bold" onClick={toggleMenu}>
                        WORK
                    </Link>
                    <Link href='/about' className="text-4xl p-[20px] text-center hover:text-gray-300 font-bold" onClick={toggleMenu}>
                        ABOUT
                    </Link>
                    <Link href="/#contact" className="text-4xl p-[20px] text-center hover:text-gray-300 font-bold" onClick={toggleMenu}>
                        CONTACT
                    </Link>
                </div>

            </div>
        </nav>
  )
}
