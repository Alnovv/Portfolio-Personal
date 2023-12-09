'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Transition from './transition';
Link;
const Navigation = () => {
    const [isRouting,setIsRouting] = useState(false)
    const path =  usePathname()
    const [prevPath, setprevPath] = useState('/')
    useEffect(()=>{
        if(prevPath !== path){
            setIsRouting(true)
        }
    },[path,prevPath])
    useEffect(()=>{
        if(isRouting){
            setprevPath(path)
            const timeout = setTimeout(()=>{
                setIsRouting(false)
            },1200)
            return() => clearTimeout(timeout)
        }
    },[isRouting,path])
    const [active,setActive] = useState(0)

    const handleSetActive = (index:any) => {
      setActive(index);
    };

  return (
    <header className="sticky top-0 z-50  max-sm:flex max-sm:justify-center">
        {isRouting && <Transition />}
        <nav className="justify-center items-center py-8 flex text-white z-auto ">
          <ul className="flex backdrop-blur-lg bg-white/10   rounded-[25px] gap-4 p-3 z-10">
            <Link
              href="/" 
              className={`ml-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300 ${active === 0 ? 'text-[#FD9A3E] ' : ''}`}
              onClick={() => handleSetActive(0)}
            >
              <li>Home</li>{" "}
            </Link>
            <Link
              href="/profile" 
              className={`ml-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300 ${active === 1 ? 'text-[#FD9A3E] ' : ''}`}

              onClick={() => handleSetActive(1)}
            >
              <li>Profile </li>{" "}
            </Link>
            <Link
              href="/portfolio" 
              className={`ml-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300 ${active === 2 ? 'text-[#FD9A3E]' : ''}`}
              onClick={() => handleSetActive(2)}
            >
              <li>Portfolio</li>{" "}
            </Link>
            <Link
              href="/contact" 
              className={`mr-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300 ${active === 3 ? 'text-[#FD9A3E]' : ''}`}
              onClick={() => handleSetActive(3)}
            >
              <li>Contact </li>{" "}
            </Link>
          </ul>
        </nav>
      </header>
  )
}

export default Navigation