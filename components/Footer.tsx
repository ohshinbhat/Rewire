"use client";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <>
        <main className="bg-r-blue">
            <div className="flex flex-col sm:flex-row gap-15 px-[25px] sm:px-[100px] py-[20px] text-white">
                <div className="flex flex-row gap-2 flex-[65%]">
                    <div className="flex flex-row items-start">
                        <img src="/Images/logo2.png" alt="footer logo" className=" md:w-[100px] md:h-[100px] w-[50px] h-[50px] " />
                        

                    </div>
                    <div className="flex flex-col flex-wrap pt-2 md:pt-6">
                        <div className="font-bold text-sm md:text-lg">Rewire</div>
                        <div className="text-[0.75rem] md:text-base font-bold ">
                            Get in touch

                        </div>
                        <div className="text-[0.4rem] md:text-[1rem] font-normal">
                            <div>
                                <div className="font-bold">
                                    Contact
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div>Email: </div>
                                    <a href="mailto:rewirebraintraining@gmail.com" target="_blank" className="font-medium underline"> rewirebraintraining@gmail.com 
                                    </a>

                                </div>
                        
                            </div>

                        </div>
                        
                    </div>      

                </div>
                <div className="flex flex-row flex-[35%] gap-7 md:gap-0 md:px-0 px-12">      
                    <div className="flex flex-col gap-2 flex-1 pt-3 md:pt-7 ">
                        <div className="text-sm lg:text-[2rem] font-bold ">
                            Follow Us

                        </div>
                        <IconContext.Provider value={{ color: 'white', size: '30' }}>
                            <a href="https://www.instagram.com/rewirebrainapp/" target="_blank" className="flex flex-row gap-2 items-center">
                                <AiFillInstagram />
                                <div className="font-medium text-[0.75rem] md:text-sm">Instagram</div>

                            </a>
                            <a href="https://www.linkedin.com/company/rewire-brain-training/" target="_blank" className="flex flex-row gap-2 items-center">
                                <AiFillLinkedin />
                                <div className="font-medium text-[0.75rem] md:text-sm">LinkedIn</div>

                            </a>
                        </IconContext.Provider>
                        

                    </div>
                    <div className="flex flex-col flex-1 pt-3 md:pt-7 gap-0">
                        <div className="text-sm lg:text-[2rem] font-bold text-center">
                            Start Free Today

                        </div>
                        <div className="text-[0.75rem] md:text-sm font-normal text-center mb-0 pb-4">
                            Download the App now
                        </div>
                        <a href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">
                            <img src="/Images/playstore.png" alt="playstore logo" className="scale-100 md:scale-80 pt-0 mt-0" />

                        </a>
                        

                    </div>
                </div>
            </div>
            <div className="px-[25px] md:px-[100px]">
                <div className="text-center font-light text-[0.75rem] md:text-sm text-white pb-8 pt-5 border-t-[1px] border-slate-400">
                    Terms and Conditions | Privacy Policy | 2023 Rewire Brain Training 
                </div>
            </div>

        </main>
    </>
  )
}

export default Footer