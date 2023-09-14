import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import blog1 from "@/public/Images/blog1.png"
import blog2 from "@/public/Images/blog2.png"
import blog3 from "@/public/Images/blog3.png"

import Image from "next/image"
const Blogs = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="px-[100px] flex flex-col gap-[50px] mb-[100px]">
          <div className="text-[4rem] font-black text-center mt-10 border-b-[1px] border-r-blue text-r-blue pb-3">Blogs</div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-left pl-5 text-r-blue">Learn everything about your cognitive health, one blog at a time.</div>
            <div className="text-base text-left pl-5 text-r-blue font-light">We’re not just an app, we’re a community of curious minds that’s always ready to help each other.</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <Link href='/The-Role-of-Brain-Training-in-Enhancing-Cognitive-Abilities' className="flex flex-col gap-4 items-center">
              <div>
                <Image src={blog1} alt="blog1" />
              </div>
              <div className="font-bold px-4 text-base text-center">The Role of Brain Training in Enhancing Cognitive Abilities</div>
            </Link>
            <Link href='Exploring-the-Link-Between-Mental-Exercise-and-Cognitive-Function' className="flex flex-col gap-4 items-center">
              <div>
                <Image src={blog2} alt="blog1" />
              </div>
              <div className="font-bold px-4 text-base text-center">Exploring the Link Between Mental Exercise and Cognitive Function</div>
            </Link>
            <Link href='/Understanding-the-Impact-of-Stress-on-Brain-Development' className="flex flex-col gap-4 items-center">
              <div>
                <Image src={blog3} alt="blog1" />
              </div>
              <div className="font-bold px-4 text-base text-center">Understanding the Impact of Stress on Brain Development</div>
            </Link>



          </div>
      
          </div>
          <Footer />

      </main>
    </>
  )
}

export default Blogs