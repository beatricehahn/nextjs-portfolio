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
                "flex-col"
            ]
        }
        // if menu is closed 
        else {
            menuClasses= [ "hidden", "flex"]
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="z-20 top-4 absolute w-full back-blur text-black-100 p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
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

                <div className=" flex items-center">
                    <button onClick={toggleMenu}> Menu</button>
                </div>
            </div>
        </nav>
  )
}
