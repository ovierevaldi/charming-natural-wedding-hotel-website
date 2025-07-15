import Image from "next/image";
import background1 from '@/public/images/background_1.webp'
import imageSection2 from '@/public/images/image-section-2.avif'

export default function Home() {
  return (
    <div>
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

      <div className="grid grid-cols-2 p-12 gap-6 justify-items-center max-w-6xl mx-auto mb-16">
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

      <div
        className="relative"
      >
        <Image 
          src={imageSection2}
          alt="Background 2"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '628px',
            width: '100%'
          }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-y-12 justify-center">
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
      </div>
    </div>
  );
}
