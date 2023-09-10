"use client";
import Image from "next/image"
import footerlogo from "@/public/Images/logo2.png"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { IconContext } from "react-icons";
import playstore from "@/public/Images/playstore.png"

const Footer = () => {
  return (
    <>
        <main className="bg-r-blue">
            <div className="flex flex-row gap-5 px-[100px] py-[40px] text-white">
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-row items-center">
                        <Image src={footerlogo} alt="footer logo" className="w-[100px] h-[100px] " />
                        <div className="font-bold text-lg">Rewire</div>

                    </div>
                    <div>
                        Address: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rerum velit architecto necessita
                    </div>      

                </div>
                <div className="flex flex-col gap-2 flex-1 pt-7">
                    <div className="text-[2rem] font-bold ">
                        Get in touch

                    </div>
                    <div className="text-sm font-normal pl-2">
                        Contact

                    </div>

                </div>
                <div className="flex flex-col gap-2 flex-1 pt-7">
                    <div className="text-[2rem] font-bold ">
                        Follow Us

                    </div>
                    <IconContext.Provider value={{ color: 'white', size: '30' }}>
                        <div className="flex flex-row gap-2 text-center">
                            <AiFillFacebook />
                            <div className="font-medium text-sm">Facebook</div>

                        </div>
                        <div className="flex flex-row gap-2">
                            <AiFillInstagram />
                            <div className="font-medium text-sm">Instagram</div>

                        </div>
                        <div className="flex flex-row gap-2">
                            <AiFillLinkedin />
                            <div className="font-medium text-sm">LinkedIn</div>

                        </div>
                        <div className="flex flex-row gap-2">
                            <AiFillYoutube />
                            <div className="font-medium text-sm">Youtube</div>

                        </div>
                    </IconContext.Provider>
                    

                </div>
                <div className="flex flex-col flex-1 pt-6 gap-0">
                    <div className="text-lg font-bold text-center">
                        Start Free Today

                    </div>
                    <div className="text-base font-normal text-center mb-0 pb-0">
                        Download the App now
                    </div>
                    <Image src={playstore} alt="playstore logo" className="scale-80 pt-0 mt-0" />

                </div>
            </div>
            <div className="px-[100px]">
                <div className="text-center font-light text-lg text-white py-10 border-t-[1px]">
                    Terms and Conditions | Privacy Policy | 2023 Rewire Brain Training 
                </div>
            </div>

        </main>
    </>
  )
}

export default Footer