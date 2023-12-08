import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const About = () => {
  return (
    <>  
      <main>
        <Navbar />
        <div className="px-[25px] sm:px-[100px] flex flex-col gap-[50px] mb-[100px]">
          <div className="text-r-blue font-bold text-base sm:text-xl xl:hidden text-center ">20 minutes of your time</div> 
          <div className="flex xl:flex-row items-center flex-col-reverse">
            
            <div className="flex flex-col gap-7 flex-[50%] xl:pl-[50px]">
              <div className="text-r-blue font-bold text-xl hidden xl:flex">20 minutes of your time</div>              
              <div className="text-black font-medium text-[0.75rem] sm:text-base px-[25px] sm:px-[50px]">Welcome to Rewire, your partner in building resilient minds and defying cognitive challenges. With an unwavering dedication to halting cognitive decline and empowering individuals with learning disabilities, we proudly introduce an innovative brain training app designed to inspire cognitive growth and nurture mental strength.</div>
            </div>
            <img src="/Images/20mins.png" alt="20 mins" className="flex-[50%]"/>
          </div>

          <div className="px-[25px] sm:px-[50px]"> 
            <div className="text-r-blue font-bold text-base sm:text-xl xl:hidden text-center">Our Mission </div>           
            <div className="flex xl:flex-row items-center gap-4 flex-col">
              <img src="/Images/mission.png" alt="mission"/>
              <div className="flex flex-col gap-7 xl:pr-[50px]">
                <div className="text-r-blue font-bold text-lg text-left hidden xl:flex">Our Mission </div>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">At Rewire, our mission is clear: to help everyone improve their cognitive abilities and empower those with learning disabilities to develop unbreakable mental resilience. </span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">We&apos;re committed to transforming the lives of individuals by providing personalized brain training exercises that foster improved cognitive function, self-confidence, and lifelong learning.</span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">With our pioneering app, we&apos;re giving countless individuals the tools to triumph over cognitive challenges. Our app offers a range of engaging exercises tailored to different cognitive skills, equipping users to excel and thrive.</span>
              </div>
            </div>
          </div>

          <div className="px-[25px] sm:px-[50px] flex flex-col gap-7">  
            <div className="text-r-blue font-bold text-base sm:text-xl xl:hidden text-center">Built By Psychologists. Made for EVERYONE.</div>          
            <div className="flex xl:flex-row gap-7 items-center flex-col-reverse">
              
              <div className="flex flex-col gap-7 flex-[60%]">
                <div className="text-r-blue font-bold text-lg text-left hidden xl:flex">Built By Psychologists. Made for EVERYONE.</div>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">It all started with an itch to solve one of the most misunderstood issues in children in India: learning disabilities. As a psychologist, Dr. Akila Sadashivan, has been working with children with learning disabilities for decades.</span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">Rewire comes as a culmination of all these years of experience.</span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">Today, Rewire is a comprehensive program that includes a variety of exercises and activities that are designed to improve memory, attention, focus, problem-solving, and creativity.</span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">The program is backed by scientific research, and it has been shown to be effective in improving cognitive function in people of all ages.</span>
                <span className="text-black font-medium text-[0.75rem] sm:text-base">If you are looking for a way to improve your cognitive function, Rewire is a great option for you.</span>
              </div>
              <div className="flex-[40%]">
                <img src="/Images/profile.jpg" alt="Dr. Akila Sadashivan" className="rounded-[30px] scale-[85%] xl:scale-[65%]"/>
              </div>              
            </div>
          </div>
          <div className="flex flex-col items-center gap-7">
              <div className="font-bold text-base sm:text-xl text-r-blue">Ready to get started?</div>
              <a className="font-medium text-white bg-r-blue rounded-[32px] py-5 text-sm sm:text-base px-16" href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Yes! Sign me up!</a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default About