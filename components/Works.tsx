import Image from "next/image"
import works from "@/public/Images/brainz.jpg"
const Works = () => {
  return (
    <main>
        <div className="flex flex-row items-center mx-[100px] my-[80px] gap-[70px] justify-between">
            <div className="flex-[45%] flex flex-col">
                <div className="font-bold text-[#000da1] mb-5 text-[3rem] text-left">How Rewire Works</div>

                <p className="text-[#000da1] flex flex-col font-medium text-base">
                    <span className="mt-[15px] ">Rewire&apos;s team of psychologists know that everyone&apos;s different, and not all of us can afford to sit for hours a day playing games. <br /></span>
                    <span className="mt-[15px]">So we came up with a system that takes <span className='font-bold'>only 20 minutes a day.</span> <br /></span>
                    <span className="mt-[15px]">Our carefully crafted games target key areas such as memory, attention, problem-solving, and more. By consistently challenging your brain, you&apos;ll notice improved focus, enhanced memory retention, and sharper cognitive skills in your everyday life. <br /></span>
                </p>
                <a className="mt-8 bg-[#000da1] text-white rounded-[30px] cursor-pointer p-5">Get Started</a>



            </div>
            <div className="items-center content-center text-center">
                <Image src={works} alt="brain" className="scale-[80%] self-center"/>

            </div>

        </div>
    </main>
  )
}

export default Works