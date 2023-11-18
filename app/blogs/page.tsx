import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import blog1 from "@/public/Images/blog1.jpg"
import blog2 from "@/public/Images/blog2.jpg"
import blog3 from "@/public/Images/blog3.jpg"

import Image from "next/image"
const Blogs = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="px-[25px] sm:px-[100px] flex flex-col gap-[50px] mb-[100px] min-h-screen">
          <div className="flex flex-col">
            <div className="text-sm sm:text-xl font-bold text-left pl-5 text-r-blue">Learn everything about your cognitive health, one blog at a time.</div>
            <div className="text-[0.75rem] sm:text-base text-left pl-5 text-r-blue font-light">We’re not just an app, we’re a community of curious minds that’s always ready to help each other.</div>
          </div>
          <div className="flex flex-row flex-wrap items-start gap-7 justify-center">
            <Link href='./blogs/The-Role-of-Brain-Training-in-Enhancing-Cognitive-Abilities' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <Image src={blog1} alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center w-[500px]">The Role of Brain Training in Enhancing Cognitive Abilities</div>
            </Link>
            <Link href='./blogs/Exploring-the-Link-Between-Mental-Exercise-and-Cognitive-Function' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <Image src={blog2} alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center w-[500px]">Exploring the Link Between Mental Exercise and Cognitive Function</div>
            </Link>
            <Link href='./blogs/Understanding-the-Impact-of-Stress-on-Brain-Development' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <Image src={blog3} alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center w-[500px]">Understanding the Impact of Stress on Brain Development</div>
            </Link>



          </div>
      
          </div>
          <Footer />

      </main>
    </>
  )
}

export default Blogs