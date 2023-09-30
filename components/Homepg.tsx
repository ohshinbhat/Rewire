import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import Contact from './Contact'
const Homepg = () => {
  return (
    <main className="bg-black min-h-screen min-w-screen">
        <div className='min-h-screen min-w-screen bg-homebg3 bg-cover bg-center'>
            <nav className="flex flex-row justify-between items-center text-white min-w-screen mx-[100px]">

                <div className="flex flex-row items-center gap-2 font-medium mt-[30px]">
                    <Image src={logo} alt="Rewire logo" className="w-max cursor-pointer" />
                    <Link href='/' className='text-base font-medium'>Rewire</Link>
                </div>
                <div className='flex flex-row items-center gap-12 text-white mt-[30px] text-sm font-medium'>
                    <Link href='/about'>About Rewire</Link>
                    <Link href='/blogs'>Blogs</Link>
                    <a className='cursor-pointer'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer'>Get the App</a>
                </div>

            </nav>
            <div className='flex flex-col items-end mx-[100px] justify-center mt-[30vh] text-white'>
                <div className="font-bold text-[4rem]">Rewire your brain</div>
                <div className='font-sm'>Brain Training Personalized to your needs.</div>
                <a className="mt-8 py-3 px-9 bg-[#000da1] font-bold w-[209px] rounded-[40px] cursor-pointer text-center text-sm ">Try for free</a>
            </div>
        </div>


    </main>
  )
}

export default Homepg