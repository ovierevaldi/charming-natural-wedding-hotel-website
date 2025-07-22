'use client'

import React, { useEffect, useRef, useState } from 'react'
import ourStoryImg from '@/public/images/backstory-img.webp'
import Image from 'next/image'
import Button1 from '@/components/Button1';
import ourstory1 from '@/public/images/ourstory-1.webp';
import ourstory2 from '@/public/images/ourstory-2.webp';

const page = () => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const [isImg1Visible, setIsImg1Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([items]) => {
      if(items.isIntersecting){
        setIsImg1Visible(true)
      }
    }, { threshold: 0.2});

    if(img1Ref.current)
      observer.observe(img1Ref.current);

    return () => {
      if(img1Ref.current)
        observer.unobserve(img1Ref.current)
    }
  },[])

  return (
    <div className='pt-44 max-w-4xl mx-auto'>
      <Image 
        ref={img1Ref}
        src={ourStoryImg}
        alt=''
        width={450}
        className={`mx-auto ${isImg1Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 rotate-6 mb-16`}
      />
      <p className='text-center text-4xl'>Where The Wild Things Wed</p>
      <br />
      <br />
      <p className=' text-3xl'>We met at an art walk in Seattle, literally bumping into each other. We started hiking together, a lot. We both love the PNW, the mountains, the coast, everything. We’d be out on trails, just hanging out, talking around a fire. It clicked. We were on the same wavelength. One time, we were hiking and I complained about my boots and Jenny just stopped and started tying my laces for me. That's when I knew. It wasn't some grand gesture. It was just...us.
      </p>
      <br />
      <br />
      <p className=' text-3xl'>
        We’ve built a life together. It’s chill, it’s real. We love low-key adventures, but also appreciate good wine with friends. From those first hikes to figuring out life together under countless starry skies, we've always found our best moments in the wild.
      </p>

      <div className='h-[800px] my-12'>
        <div className='relative translate-x-1/4'>
          <Image 
            alt='image 1'
            src={ourstory1}
            width={380}
            className='-rotate-6 '
          />

           <Image 
            alt='image 2'
            src={ourstory2}
            width={380}
            className='absolute rotate-6 translate-x-1/2 top-1/2'
          />
        </div>

       
      </div>

      <p className=' text-3xl'>
        It feels right to celebrate surrounded by the people who get us.
        We're stoked to start this next chapter with you.
      </p>
      <br />
      <br />
      <p className=' text-3xl'>
        Onward and upward to the next adventure!
      </p>
      <br />
      <br />
      <br />
      
      <div 
        className='flex justify-center'
      >
        <Button1 
          text='RSVP'
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default page