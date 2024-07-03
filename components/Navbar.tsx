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
                "bg-gray-200",
                "w-full",
                "p-10",
                "left-0",
                "gap-10",
                "flex-col",
                "isolate"
            ]
        }
        // if menu is closed 
        else {
            menuClasses= [ "hidden", "flex"]
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="bg-transparent mix-blend-difference sticky z-20 top-2 w-full p-4 sm:p-3 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-clip-inverse text:xl md:text-2xl lg:text-2xl font-bold">
                    Beatrice Hahn
                </a>
                <div className={getMenuClasses()}>
                    <Link href='/about' className="mx-2 hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/work" className="mx-2 hover:text-gray-300">
                        Work
                    </Link>
                    <Link href="/contact" className="mx-2 hover:text-gray-300">
                        Contact
                    </Link>
                </div>

                <div className="isolate flex items-center">
                    <button onClick={toggleMenu}> 
                        <img 
                            src="/images/menu-icon.svg"
                            alt="menu"
                            className='sm:w-4 sm:h-auto md:w-6 md:h-auto lg:w-6 lg:h-auto' 
                        />
                    </button>
                </div>
            </div>
        </nav>
  )
}
