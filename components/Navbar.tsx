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
                "h-full",
                "bg-white",
                "top-20",
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
        <nav className="bg-white top-0 z-20 py-4 mb-4 mx-[16px] md:mx-20 height-[24px] md:height-[32px] lg:height-[64px]">
            <div className="flex justify-between items-center w-full">
                <a href="/" className="text-[16px] md:text-[16px] lg:text-[20px] font-medium">Beatrice Hahn</a>
                <button onClick={toggleMenu} className='sm:hidden'> 
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
                <div className='hidden sm:flex space-x-[24px]'>
                    <Link href="/#works" className="block md:text-[16px] lg:text-[20px] font-medium">
                        WORK
                    </Link>
                    <Link href='/about' className="block md:text-[16px] lg:text-[20px] font-medium">
                        ABOUT
                    </Link>
                    <Link href="/#contact" className="block md:text-[16px] lg:text-[20px] font-medium">
                        CONTACT
                    </Link>
                </div>
                <div id='dropdown-content' className={getMenuClasses()}>
                    <Link href="/#works" className="text-4xl p-[20px] text-center hover:text-gray-300 font-semibold" onClick={toggleMenu}>
                        WORK
                    </Link>
                    <Link href='/about' className="text-4xl p-[20px] text-center hover:text-gray-300 font-semibold" onClick={toggleMenu}>
                        ABOUT
                    </Link>
                    <Link href="/#contact" className="text-4xl p-[20px] text-center hover:text-gray-300 font-semibold" onClick={toggleMenu}>
                        CONTACT
                    </Link>
                </div>

            </div>
        </nav>
  )
}
