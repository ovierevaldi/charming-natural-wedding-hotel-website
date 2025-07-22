import React from 'react'
import headerLogo from '@/public/images/headerlogo.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="py-16 bg-pink">
      <Image 
        src={headerLogo}
        alt='Header logo'
        className="bg-black mx-auto"
        width={72}
      />
      <br />

      <p className="text-4xl text-center">
        Saturday, 
        <br></br>
        September 20, 2025
      </p>
    </div>
  )
}

export default Footer