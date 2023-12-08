const Testimonials = () => {
  return (
    <>
        <main className="flex flex-col gap-[50px] overflow-hidden mb-[100px]">
            <div className="flex flex-col gap-2">
                <div className="text-base sm:text-[3rem] mx-[25px] sm:mx-[100px] font-bold text-r-blue">Don’t take our word for it.

                </div>
                <div className="text-[0.75rem] sm:text-base mx-[25px] sm:mx-[100px] font-normal text-r-blue">Here’s what our users are saying.

                </div>
            </div>
            
            <div className="flex flex-col-reverse md:flex-row mx-[50px] sm:mx-[150px] justify-between gap-0 sm:gap-10 overflow-scroll">
                <img src="/Images/test1.png" alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
                <img src="/Images/test2.png" alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
                <img src="/Images/test3.png" alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
            </div>
        </main>
    </>
  )
}

export default Testimonials