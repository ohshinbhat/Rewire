"use client";
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import Contact from '@/components/Contact'

import React, { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <>
        <main className=' bg-opacity-[47%] items-center pb-[30px]'>

            <nav className="flex flex-row justify-between items-center  text-r-blue min-w-screen mx-[25px] my-[40px] sm:mx-[100px] ">
                <div className="flex flex-row items-center gap-0 sm:gap-2 font-medium ">
                    <Image src={logo} alt="Rewire logo" className="scale-75 sm:scale-100 w-max cursor-pointer" />
                    <Link href='/'className='text-base font-bold'>Rewire</Link>
                </div>

                    <div className="space-y-2 pt-3 xl:hidden flex items-center flex-col" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-r-blue"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-r-blue"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-r-blue"></span>

                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                        <svg
                            className="h-8 w-8 text-r-blue"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <Link href='/about' className='cursor-pointer'>About Rewire</Link>
                    <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
                    <a className='cursor-pointer'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer text-white' href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get the App</a>
                    

                </div>
                <div className='nav-links xl:flex flex-row items-center gap-12 text-r-blue text-sm font-medium hidden '>
                    <Link href='/about' className='cursor-pointer'>About Rewire</Link>
                    <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
                    <a className='cursor-pointer'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer text-white' href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get the App</a>
                </div>
                
            </nav>
        </main>
    </>
  )
}

export default Navbar