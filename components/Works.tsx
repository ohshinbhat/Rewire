
const Works = () => {
  return (
    <main className="px-[25px] sm:px-[100px] py-[80px]">
        <div className="font-bold text-[#000da1] mb-5 text-base sm:text-[3rem] text-left xl:hidden">How Rewire Works</div>
        <div className="flex xl:flex-row flex-col-reverse items-center  gap-5 justify-between">
            <div className="flex-[45%] flex flex-col">
                <div className="hidden xl:flex font-bold text-[#000da1] mb-5 text-base sm:text-[3rem] text-left">How Rewire Works</div>
                

                <p className="text-black flex flex-col font-normal text-[0.75rem] sm:text-sm">
                    <span className="mt-[15px] ">Rewire&apos;s team of psychologists know that everyone&apos;s different, and not all of us can afford to sit for hours a day playing games. <br /></span>
                    <span className="mt-[15px]">So we came up with a system that takes <span className='font-bold text-r-blue'>only 20 minutes a day.</span> <br /></span>
                    <span className="mt-[15px]">Our carefully crafted games target key areas such as memory, attention, problem-solving, and more. By consistently challenging your brain, you&apos;ll notice improved focus, enhanced memory retention, and sharper cognitive skills in your everyday life. <br /></span>
                </p>
                <a className="mt-8 bg-[#000da1] text-white rounded-[30px] cursor-pointer p-5 text-center justify-start text-[1rem] sm:text-base font-bold" href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get Started</a>



            </div>
            <div className="items-center content-center text-center flex-[55%]">
                <img src="/Images/brainz.jpg" alt="brain" className="scale-[80%] self-center w-full"/>

            </div>

        </div>
    </main>
  )
}

export default Works