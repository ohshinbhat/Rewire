"use client";
import React, { useState, useRef } from 'react';



const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div onClick={togglePopup}>Contact Us</div>
            {showPopup && (
                <div className="fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-md bg-[rgba(255, 255, 255, 0.2)] flex items-center justify-center text-r-blue">
                    <div className="bg-white p-[20px] rounded-md shadow-lg px-[30px]">
                        <div className='font-bold text-[2rem] pb-3'>Contact Us</div>
                        <form className='flex flex-col gap-3'>
                            <div>
                                <label className='font-light'>Your Name*</label>
                                <input
                                    className='h-[30px] w-[100%] border-slate-300 border-[1px] rounded-md'
                                    type="text"
                                    placeholder="Enter your name"
                                    name="from_name"
                                />
                            </div>
                            <div>
                                <label className='font-light'>Message*</label>
                                <input
                                    className='pb-[90px] pt-2 w-[100%] overflow-y-hidden border-slate-300 border-[1px] rounded-md'
                                    placeholder="Enter your message"
                                    type="text"
                                    name="message"
                                />
                            </div>
                            <div className='flex flex-row gap-1 justify-around mx-1 my-5 items-center'>
                                <button type="submit" className='bg-r-blue text-white font-sm font-medium rounded-[30px] py-4 px-[40px] cursor-pointer'>Submit</button>
                                <button onClick={togglePopup} className='bg-white border-[1px] border-r-blue font-sm font-medium rounded-[30px] py-4 px-[40px] cursor-pointer text-r-blue'>Close</button>
                            </div>


                        </form>

                    </div>
                </div>
            )}
    
        </div>
    );
};

export default Contact;
