'use client'

import React, { useEffect, useRef, useState } from 'react'

type LinkCardProps = {
  coverUrl: string,
  text: string
}

const LinkCard = ({ text, coverUrl } : LinkCardProps) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (ref1.current) {
      observer.observe(ref1.current)
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref1}
      className={`relative h-[600px] w-full  transition-all duration-1000 ease-in
         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
      }
    >
      <div className={`bg-[url(${coverUrl})] bg-cover bg-center h-[600px] w-full rounded-xl hover:opacity-80 duration-300`}>
        <p 
          className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'
        >
          { text }
        </p>
      </div>
    </div>
  )
}

export default LinkCard