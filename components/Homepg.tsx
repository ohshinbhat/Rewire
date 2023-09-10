import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link'

const Homepg = () => {
  return (
    <main className="bg-black min-h-screen min-w-screen">
        <div className='min-h-screen min-w-screen bg-homebg3 bg-cover bg-center'>
            <nav className="flex flex-row justify-between items-center text-white min-w-screen mx-[100px]">

                <div className="flex flex-row items-center gap-2 font-medium mt-[30px]">
                    <Image src={logo} alt="Rewire logo" className="w-max cursor-pointer" />
                    <div className=''>Rewire</div>
                </div>
                <div className='flex flex-row items-center gap-12 font-medium text-white mt-[30px]'>
                    <Link href='/about'>About Rewire</Link>
                    <Link href='/blogs'>Blogs</Link>
                    <Link href='/contact'>Contact</Link>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer'>Get the App</a>
                </div>

            </nav>
            <div className='flex flex-col items-end mx-[100px] justify-center mt-[30vh] text-white'>
                <div className="font-bold">Rewire your brain</div>
                <div className=''>Brain Training Personalized to your needs.</div>
                <a className="mt-8 px-3 py-9 bg-[#000da1] font-bold w-[209px] rounded-[30px] cursor-pointer">Try for free</a>
            </div>
        </div>


    </main>
  )
}

export default Homepg