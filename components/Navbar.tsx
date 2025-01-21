'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        // Toggle the menu state
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <header className='max-width'>
            <nav className='flex justify-between items-center px-6 py-4'>
                {/* Logo */}
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={125}
                        height={22}
                        className='object-contain'
                    />
                </Link>

                {/* Navigation Links */}
                <div className='flex justify-center items-center gap-10'>
                    {/* Desktop view: hidden on small screens, visible on medium screens and up */}
                    <div className='hidden md:flex justify-center items-center gap-10'>
                        <Link href="/">
                            <p className="hover:text-white transition-colors custom-text">Home</p>
                        </Link>

                        <Link href="/aboutme">
                            <p className="hover:text-white transition-colors custom-text">About Me</p>
                        </Link>

                        <Link href="/mywork">
                            <p className="hover:text-white transition-colors custom-text">My Works</p>
                        </Link>

                        <Link href='/contact'> <CustomButton
                            title='Contact'
                            btnType='button'
                            containerStyles='bg-[#03030480] text-[#FFFFFF] border-[2px] border-[#FFFFFF4D] rounded-[30px] w-[138px] h-[47px] text-[14px] font-normal'
                        /></Link>
                    </div>

                    {/* Mobile view: hamburger menu */}
                    <div className='md:hidden'>
                        <button onClick={handleMenuToggle} className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden  top-16 left-0 w-full bg-[#131313] py-6'>
                    <div className='flex flex-col items-center'>
                        <Link href="/">
                            <p className="text-white py-2">Home</p>
                        </Link>

                        <Link href="/about">
                            <p className="text-white py-2">About Me</p>
                        </Link>

                        <Link href="/my-works">
                            <p className="text-white py-2">My Works</p>
                        </Link>

                        <CustomButton
                            title='Contact'
                            btnType='button'
                            containerStyles='bg-[#03030480] text-[#FFFFFF] border-[2px] border-[#FFFFFF4D] rounded-[30px] w-[138px] h-[47px] text-[14px] font-normal mt-4'
                        />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
