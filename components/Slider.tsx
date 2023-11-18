import Image from "next/image"
import ss1 from "@/public/Images/slider1.jpg"
import ss2 from "@/public/Images/slider2.jpg"
import ss3 from "@/public/Images/slider3.jpg"
import ss4 from "@/public/Images/slider4.jpg"
import ss5 from "@/public/Images/slider5.jpg"

const Slider = () => {
  return (
    <>   
        <main className='slider-container'>
        <div className="flex flex-col text-r-blue py-[70px] px-[25px] sm:px-[100px]">
            <div className="font-bold text-base sm:text-[3rem]">Fun. Engaging. Easy to Use.</div>
            <div className="text-[0.75rem] sm:text-sm ">Games that are backed by Science.</div>
        </div>
        <div className='slider'>
            <div className="slider-track">
                <div className="slide">
                    <Image src={ss1} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss2} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss3} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss4} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss5} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss1} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss2} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss3} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss4} alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <Image src={ss5} alt="slider image" className="images"/>
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

export default Slider;