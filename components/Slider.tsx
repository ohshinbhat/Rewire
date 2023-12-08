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
                    <img src="/Images/slider1.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider2.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider3.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider4.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider5.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider1.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider2.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider3.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider4.jpg" alt="slider image" className="images"/>
                </div>
                <div className="slide">
                    <img src="/Images/slider5.jpg" alt="slider image" className="images"/>
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

export default Slider;