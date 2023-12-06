import Image from 'next/image'
import React from 'react'
Image
import tailwind from './assets/logo/footertailwind.svg'
import react from './assets/logo/footerReact.svg'
import nextjs from './assets/logo/footerNextjs.svg'


const Footer = () => {
  return (
    <>
    <footer className='flex flex-col justify-center items-center text-white gap-3 bg-[#020611] h-[30vh] mt-[400px] max-lg:h-0 '>
        <div className='flex gap-3 justify-center items-center'>
            <p className='text-xs max-sm:text-[10px] font-extrabold leading-normal'>MADE WITH</p>
        <div className='flex gap-3' >
        <Image src={tailwind} alt=''/>
        <Image src={react} alt=''/>
        <Image src={nextjs} alt=''/>
        </div>
        </div>
        <div>
          <div className=' text-base mb-5 flex max-sm:flex-col justify-center items-center text-center '>
            <p className=' max-sm:text-[10px] text-white'>MADE BY ALAM RANOV. DESIGN BY YOPY RINALDY (YORI).</p>
            <span className='max-sm:text-[10px]'>ALL RIGHT  RESERVED</span>
          </div>
       
    </div>
    
    </footer>
    
    </>
    
  )
}

export default Footer