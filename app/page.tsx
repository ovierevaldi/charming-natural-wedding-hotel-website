import Image from "next/image";
import background1 from '@/public/images/background_1.webp'
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <div>
      <p className="text-[9rem] text-center">Jenny & Jason</p>

      <div
        className="relative"
      >
        <Image 
          src={background1}
          alt="Background 1"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '628px'
          }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
          <p className="text-white text-3xl font-semibold">
            With love and gratitude, we invite you to 
            <br />
            share in the joy of our wedding day.
          </p>
          <br />
          <br />
          <p className="text-white text-3xl text-center font-semibold">
            Saturday, September 20, 2025
            <br />
            The Golden Elm Manor,
            <br />
            St. Augustine, New York
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 p-12 gap-6 justify-items-center max-w-6xl mx-auto">
        <div 
          className={`relative bg-[url('/images/link-card-1.webp')] bg-cover bg-center h-[610px] w-full rounded-xl`}
        >
          <p 
            className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'
          >
            Our Story
          </p>
        </div>
        <div 
          className={`relative bg-[url('/images/link-card-2.webp')] bg-cover bg-center h-[610px] w-full  rounded-xl`}
        >
          <p 
            className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'
          >
            The Details
          </p>
        </div>
        <div 
          className={`relative bg-[url('/images/link-card-3.webp')] bg-cover bg-center h-[610px] w-full rounded-xl`}
        >
          <p 
            className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'
          >
            RSVP
          </p>
        </div>
        <div 
          className={`relative bg-[url('/images/link-card-4.webp')] bg-cover bg-center h-[610px] w-full rounded-xl`}
        >
          <p 
            className='underline text-white text-4xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer'
          >
            Registry
          </p>
        </div>
      </div>
    </div>
  );
}
