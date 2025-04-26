"use client";

import Link from "next/link"
import Nav from "./Nav";
import { useState } from "react";

// React Icons
import { TfiAlignRight } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return(
        <>
        <header className="py-2">
                <div className="container flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl uppercase bg-gradient-to-r from-[#ede862] to-[#f23557] bg-clip-text text-transparent">Moumita Maity
                        </h1>

                    </Link>
                    {/* Desktop NavBar */}
                    <div className="hidden lg:flex gap-1">
                        <Nav />
                    </div>

                    {/* Mobile NavBar */}
                    <div className="lg:hidden text-3xl text-[#f23557]">
                        {mobileNavOpen ? (
                            <IoMdClose onClick={toggleMobileNav} className="mr-10" />
                        ) : (
                            <TfiAlignRight onClick={toggleMobileNav}  className="mr-10"/>
                        )}
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                {mobileNavOpen && (
                    <div className="md:hidden flex flex-col items-center justify-center h-full space-y-6">
                    <Nav />
                </div>
                )}
            </header>
        </>
    )
  
}

export default Header