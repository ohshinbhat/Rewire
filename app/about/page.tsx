import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import mins from "@/public/Images/20mins.png"
import mission from "@/public/Images/mission.png"
import Profile from "@/public/Images/profile.jpg"



const About = () => {
  return (
    <>  
      <main>
        <Navbar />
        <div className="px-[100px] flex flex-col gap-[50px] mb-[100px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-7 flex-[50%] pl-[50px]">
              <div className="text-r-blue font-bold text-lg ">20 minutes of your brain time</div>
              <div className="text-black font-medium text-base ">Welcome to Rewire, your partner in building resilient minds and defying cognitive challenges. With an unwavering dedication to halting cognitive decline and empowering individuals with learning disabilities, we proudly introduce an innovative brain training app designed to inspire cognitive growth and nurture mental strength.</div>
            </div>
            <Image src={mins} alt="20 mins" className="flex-[50%]"/>
          </div>

          <div className="px-[50px]">            
            <div className="flex flex-row items-center gap-4">
              <Image src={mission} alt="mission"/>
              <div className="flex flex-col gap-7 pr-[50px]">
                <div className="text-r-blue font-bold text-lg text-left ">Our Mission </div>
                <span className="text-black font-medium text-base">At Rewire, our mission is clear: to help everyone improve their cognitive abilities and empower those with learning disabilities to develop unbreakable mental resilience. </span>
                <span className="text-black font-medium text-base">We're committed to transforming the lives of individuals by providing personalized brain training exercises that foster improved cognitive function, self-confidence, and lifelong learning.</span>
                <span className="text-black font-medium text-base">With our pioneering app, we're giving countless individuals the tools to triumph over cognitive challenges. Our app offers a range of engaging exercises tailored to different cognitive skills, equipping users to excel and thrive.</span>
              </div>
            </div>
          </div>

          <div className="px-[50px] flex flex-col gap-7">            
            <div className="flex flex-row gap-7 items-center">
              <div className="flex flex-col gap-7 flex-[60%]">
                <div className="text-r-blue font-bold text-lg text-left">Built By Psychologists. Made for EVERYONE.</div>
                <span className="text-black font-medium text-base">It all started with an itch to solve one of the most misunderstood issues in children in India: learning disabilities. As a psychologist, Dr. Akila Sadashivan, has been working with children with learning disabilities for decades.</span>
                <span className="text-black font-medium text-base">Rewire comes as a culmination of all these years of experience.</span>
                <span className="text-black font-medium text-base">Today, Rewire is a comprehensive program that includes a variety of exercises and activities that are designed to improve memory, attention, focus, problem-solving, and creativity.</span>
                <span className="text-black font-medium text-base">The program is backed by scientific research, and it has been shown to be effective in improving cognitive function in people of all ages.</span>
                <span className="text-black font-medium text-base">If you are looking for a way to improve your cognitive function, Rewire is a great option for you.</span>
              </div>
              <div className="flex-[40%]">
                <Image src={Profile} alt="Dr. Akila Sadashivan" className="rounded-[30px] scale-[65%]"/>
              </div>              
            </div>
          </div>
          <div className="flex flex-col items-center mt-[100px] gap-7">
              <div className="font-bold text-xl text-r-blue">Ready to get started?</div>
              <div className="font-medium text-white bg-r-blue rounded-[32px] py-5 text-base px-16">Yes! Sign me up!</div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default About