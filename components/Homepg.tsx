"use client";
import Link from 'next/link'
import Contact from './Contact'
import React, { useState } from 'react';
import "@/app/globals.css"
const Homepg = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <main className="bg-black min-h-screen min-w-screen">
        <div className='min-h-screen min-w-screen bg-mbbg lg:bg-homebg3 bg-cover bg-center bg-no-repeat bg'>
            <nav className="flex flex-row justify-between items-center text-white min-w-screen mx-[25px] sm:mx-[100px] py-[40px] ">
                <div className="flex flex-row items-center gap-0 sm:gap-2 font-medium ">
                    <img src="/logo.svg" alt="Rewire logo" className=" h-10 md:h-20 lg:h-30 w-max cursor-pointer" />
                    <Link href='/'className='text-base font-bold'>Rewire</Link>
                </div>

                    <div className="space-y-2 xl:hidden flex items-center flex-col" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>


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
                    <Link href='/about' className='cursor-pointer text-r-blue'>About Rewire</Link>
                    <Link href='/blogs' className='cursor-pointer text-r-blue'>Blogs</Link>
                    <a className='cursor-pointer text-r-blue'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer text-white' href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get the App</a>
                    

                </div>
                <div className='nav-links xl:flex flex-row items-center gap-12 text-r-blue text-sm font-medium hidden'>
                    <Link href='/about' className='cursor-pointer text-white'>About Rewire</Link>
                    <Link href='/blogs' className='cursor-pointer text-white'>Blogs</Link>
                    <a className='cursor-pointer text-white'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer text-white' href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get the App</a>
                </div>
                
            </nav>
            <div className='flex flex-col md:items-end items-center mx-[50px] md:mx-[100px] justify-center mt-[30vh] text-white'>
                <div className="font-bold text-lg sm:text-[4rem] md:text-right text-center">Rewire your brain</div>
                <div className='text-[0.75rem] sm:text-sm md:text-right text-center'>Brain Training Personalized to your needs.</div>
                <a className="mt-8 py-3 px-9 bg-[#000da1] font-bold w-[209px] rounded-[40px] cursor-pointer text-center text-sm " href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Try for free</a>
            </div>
        </div>


    </main>
  )
}

export default Homepg