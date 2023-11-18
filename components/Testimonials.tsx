import test1 from "@/public/Images/test1.png"
import test2 from "@/public/Images/test2.png"
import test3 from "@/public/Images/test3.png"
import Image from "next/image"

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
                <Image src={test1} alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
                <Image src={test2} alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
                <Image src={test3} alt='testimonial' className="sm:w-full scale-75 sm:scale-100" />
            </div>
        </main>
    </>
  )
}

export default Testimonials