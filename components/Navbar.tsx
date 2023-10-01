import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import Contact from '@/components/Contact'
const Navbar = () => {
  return (
    <>
        <main className=' bg-opacity-[47%] items-center pb-[30px]'>
            <nav className="flex flex-row justify-between items-center text-r-blue min-w-screen mx-[100px]">
                <div className="flex flex-row items-center gap-2 font-medium mt-[30px]">
                    <Image src={logo} alt="Rewire logo" className="w-max cursor-pointer" />
                    <Link href='/'className='text-base font-medium'>Rewire</Link>
                </div>
                <div className='flex flex-row items-center gap-12 text-r-blue mt-[30px] text-sm font-medium'>
                    <Link href='/about' className='cursor-pointer'>About Rewire</Link>
                    <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
                    <a className='cursor-pointer'><Contact /></a>
                    <a className='py-[12px] px-[44px] bg-[#000da1] font-bold rounded-[1.6rem] cursor-pointer text-white' href='https://play.google.com/store/apps/details?id=com.rewire.getbrainwise' target="_blank">Get the App</a>
                </div>
            </nav>
        </main>
    </>
  )
}

export default Navbar