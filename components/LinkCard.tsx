import React from 'react'

type LinkCardProps = {
  coverUrl: string,
  text: string
}

const LinkCard = ({ text } : LinkCardProps) => {
  return (
    <div 
      className={`relative bg-[url('/images/link-card-1.webp')] bg-cover bg-center h-[610px] max-w-[30rem] rounded-xl`}
    >
      <p 
        className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
      >
        {text}
      </p>
    </div>
  )
}

export default LinkCard