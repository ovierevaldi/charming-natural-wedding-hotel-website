'use client'

import React, { useEffect, useRef, useState } from 'react'

const Section = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setIsVisible(true)
      }
      else{
        setIsVisible(false)
      }
    }, { threshold: 0.2});

    if(ref.current){
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current){
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
   <div 
    ref={ref}
     className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-y-12 justify-center duration-700 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <p className="text-white text-4xl text-center">
      Registry
    </p>
    <p className="text-white text-2xl text-center">
      Your presence is the most cherished gift. Should you wish to contribute, 
      <br />
      we've created a honeymoon registry to help us embark on a memorable 
      <br />
      adventure to the Amalfi Coast.
    </p>
    <button className="bg-brown-1 hover:bg-brown-2  p-4 w-lg rounded-full cursor-pointer transition-colors duration-300">
      <p className="text-white text-lg">GO TO REGISTRY</p>
    </button>
  </div>

  )
}

export default Section