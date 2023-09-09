import test1 from "@/public/Images/test1.png"
import test2 from "@/public/Images/test2.png"
import test3 from "@/public/Images/test3.png"
import Image from "next/image"

const Testimonials = () => {
  return (
    <>
        <main className="min-h-screen flex flex-col gap-[50px]">
            <div className="flex flex-col gap-2">
                <div className="text-lg mx-[100px] font-bold text-r-blue">Don’t take our word for it.

                </div>
                <div className="text-base mx-[100px] font-medium text-r-blue">Here’s what our users are saying:

                </div>
            </div>
            
            <div className="flex flex-row mx-[150px] justify-between">
                <Image src={test1} alt='testimonial' />
                <Image src={test2} alt='testimonial' />
                <Image src={test3} alt='testimonial' />
            </div>
        </main>
    </>
  )
}

export default Testimonials