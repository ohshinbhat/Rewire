import Homepg from "@/components/Homepg"
import Works from "@/components/Works"
import Faq from "@/components/Faq"
import Testimonials from "@/components/Testimonials"
import Slider from "@/components/Slider"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Homepg />
      <Slider />
      <Works />
      <Testimonials />
      <Faq />
      <Footer />
      
      

    </main>
  )
}
