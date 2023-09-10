import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
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
          <div>

          </div>
      
          </div>
          <Footer />

      </main>
    </>
  )
}

export default Blogs