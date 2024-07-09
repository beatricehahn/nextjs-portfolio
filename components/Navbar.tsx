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
                "fixed",
                "inset-0",
                "top-[35px]",
                "bg-white",
                "p-20",
                "left-0",
                "gap-10",
                "flex-col",
                "justify-center",
                "align-items",
            ];
            document.body.classList.add("overflow-y-hidden");
        }
        // if menu is closed 
        else {
            menuClasses = [ "hidden", "flex"];
            document.body.classList.remove("overflow-y-hidden");
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="bg-white sticky z-20 top-0 w-full p-2 mb-2 md:flex md:justify-around md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text:xl md:text-2xl lg:text-2xl font-bold">
                    Beatrice Hahn
                </a>
                <div className={getMenuClasses()}>
                    <Link href="#works" className="text-4xl mx-2 hover:text-gray-300 font-bold" onClick={toggleMenu}>
                        WORKS
                    </Link>
                    <Link href='#about' className="text-4xl mx-2 hover:text-gray-300 font-bold" onClick={toggleMenu}>
                        ABOUT
                    </Link>
                    <Link href="#contact" className="text-4xl mx-2 hover:text-gray-300 font-bold" onClick={toggleMenu}>
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
