"use client"
import Link from 'next/link'
import { use, useState, useEffect } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function getMenuClasses() {
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[60px]",
                "bg-gray-800",
                "w-full",
                "p-10",
                "left-0",
                "gap-10",
                "flex-col"
            ]
        } else {
            menuClasses= ["hidden", "md-flex"]
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className="bg-white-100 text-black-100 p-4 sm:p-6 md:flex md:justify-between md:items-center">
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
                <div className="md:hidden flex items-center">
                    <button onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <img src="../public/menu-icon.svg" alt="menu icon" />
                    </button>
                </div>
            </div>
        </nav>
  )
}
