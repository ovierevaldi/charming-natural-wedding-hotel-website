'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import headerLogo from '@/public/images/headerlogo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  const [yTranslateVal, setYTranslateVal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYTranslateVal(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const maxTranslateY = 200
  const translateY = Math.min(yTranslateVal, maxTranslateY);

  return (
    <div className=''>
      
      <div className={
        `bg-[#44423ecc] flex justify-between px-12 py-5 fixed z-10 w-full items-center`
      }>
        <div className='flex items-center gap-x-6'>
          <Image 
            src={headerLogo}
            alt='Header logo'
          />
          <p className='text-white text-xs'>June 23rd, 2025</p>
        </div>
        <div className='text-white flex gap-x-16'>
          <Link href={'/'} className='underline'>Home</Link>
          <Link href={'/our-story'} className='underline'>Our Story</Link>
          <Link href={'/details'} className='underline'>Details</Link>
          <Link href={''} className='underline'>RSVP</Link>
        </div>
      </div>

      {
        pathname === '/' && (
          <p 
            className={`text-[9.5rem] text-center pt-12}`}
            style={{
              transform: `translateY(${translateY}px)`,
              paddingTop: '3rem',
            }}
          >
            Jenny & Jason
          </p>
        )
      }
    </div>
  )
}

export default Header