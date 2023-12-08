import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

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
                <img src="/Images/blog1.jpg" alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">The Role of Brain Training in Enhancing Cognitive Abilities</div>
            </Link>

            <Link href='./blogs/Exploring-the-Link-Between-Mental-Exercise-and-Cognitive-Function' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog2.jpg" alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Exploring the Link Between Mental Exercise and Cognitive Function</div>
            </Link>

            <Link href='./blogs/Understanding-the-Impact-of-Stress-on-Brain-Development' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog3.jpg" alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Understanding the Impact of Stress on Brain Development</div>
            </Link>

            <Link href='./blogs/Building-Emotional-Intelligence-Key-Skills-for-Mental-Wellness' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog4.jpg" alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Building Emotional Intelligence: Key Skills for Mental Wellness</div>
            </Link>

            <Link href='./blogs/Building-Healthy-Sleep-Habits-Vital-for-Growing-Minds' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog5.jpg" alt="blog5" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">The Importance of Building Healthy Sleep Habits for Growing Minds</div>
            </Link>
            
            <Link href='./blogs/Helping-Children-Manage-Stress' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog6.jpg" alt="blog1" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Helping Children Manage Stress: A Guide for Parents</div>
            </Link>

            <Link href='./blogs/Managing-Stress-in-College-Tips-for-Students-Mental-Health' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog7.jpg" alt="blog7" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Managing Stress in College: Essential Tips for Students&apos; Mental Health</div>
            </Link>

            <Link href='./blogs/Self-Care-Practices-for-Mental-Health-and-Brain-Optimization' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog8.jpg" alt="blog8" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">The Ultimate Guide to Self-Care for Mental Health and Brain Optimization</div>
            </Link>

            <Link href='./blogs/The-Role-of-Nutrition-in-Brain-Development-and-Mental-Health' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog9.jpg" alt="blog9" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">The Role of Nutrition in Brain Development and Mental Health</div>
            </Link>

            <Link href='./blogs/The-Importance-of-Play-for-Brain-Development-in-Early-Childhood' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog10.jpg" alt="blog10" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">The Importance of Play for Brain Development in Early Childhood</div>
            </Link>

            <Link href='./blogs/Screen-Time-and-Brain-Development-Finding-the-Right-Balance' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog11.jpg" alt="blog11" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Finding the Right Balance: Screen Time and Brain Development</div>
            </Link>

            <Link href='./blogs/Promoting-Positive-Peer-Relationships-Social-Skills-for-Young-Minds' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog12.jpg" alt="blog12" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Promoting Positive Peer Relationships: Nurturing Social Skills in Young Minds</div>
            </Link>

            <Link href='./blogs/Understanding-Anxiety-Disorders-Causes-Symptoms-and-Treatment-Options' className="flex flex-col gap-4 items-center pt-0 mt-0">
              <div>
                <img src="/Images/blog13.jpg" alt="blog13" className="w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] rounded-xl"/>
              </div>
              <div className="font-bold text-sm sm:text-base text-center sm:w-[500px]">Understanding Anxiety Disorders: Causes, Symptoms, and Treatment Options</div>
            </Link>
            

          </div>
      
          </div>
          <Footer />

      </main>
    </>
  )
}

export default Blogs