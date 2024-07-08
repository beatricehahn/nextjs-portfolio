"use client"
import Link from 'next/link'
import { useState } from 'react'

import '../public/styles/Menu.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Handles opening and closing nav bar icon
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function getMenuClasses() {
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[60px]",
                "bg-white",
                "w-full",
                "p-10",
                "left-0",
                "gap-10",
                "flex-col",
                "isolate",
            ]
        }
        // if menu is closed 
        else {
            menuClasses= [ "hidden", "flex"]
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="mix-blend-difference bg-transparent sticky z-20 top-2 w-full p-4 sm:p-3 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text:xl md:text-2xl lg:text-2xl font-bold">
                    Beatrice Hahn
                </a>
                <div className={getMenuClasses()}>
                    <Link href="#works" className="mx-2 hover:text-gray-300">
                        WORKS
                    </Link>
                    <Link href='#about' className="mx-2 hover:text-gray-300">
                        ABOUT
                    </Link>
                    <Link href="#contact" className="mx-2 hover:text-gray-300">
                        CONTACT
                    </Link>
                </div>

                <div className="isolate flex items-center">
                    <button onClick={toggleMenu}> 
                        <img 
                            src="/images/menu-icon.png"
                            alt="menu"
                            className='isolate sm:w-4 sm:h-auto md:w-6 md:h-auto lg:w-6 lg:h-auto' 
                        />
                    </button>
                </div>
            </div>
        </nav>
  )
}
