import Image from 'next/image'
import React from 'react'
import headerLogo from '@/public/images/headerlogo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-[#44423ecc] flex justify-between px-12 py-5'>
      <div className='flex items-center gap-x-6'>
        <Image 
          src={headerLogo}
          alt='Header logo'
        />
        <p className='text-white text-xs'>June 23rd, 2025</p>
      </div>
      <div className='text-white flex gap-x-16'>
        <Link href={''} className='underline'>Home</Link>
        <Link href={''} className='underline'>Our Story</Link>
        <Link href={''} className='underline'>Details</Link>
        <Link href={''} className='underline'>RSVP</Link>
      </div>
    </div>
  )
}

export default Header