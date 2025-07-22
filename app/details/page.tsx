import Image from 'next/image'
import React from 'react'
import bg1 from '@/public/images/bg-details-section.webp';
import bg3 from '@/public/images/link-card-1.webp';
import bg2 from '@/public/images/bg-travel-stay.webp'
import imgSection2 from '@/public/images/image-section-2.avif';
import imgSection3 from '@/public/images/img-section-3.webp'

const page = () => {
  return (
    <div>
      <div className='relative'>
        <Image 
          alt='bg-1'
          src={bg1}
          style={{
            height: '700px',
            objectFit: 'cover',
          }}
        />
        <div className='absolute inset-0 bg-black opacity-30'>
          
        </div>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl'>THE DETAILS</p>
      </div>
      <br /><br />

      <div className='px-36 space-y-12 mx-auto mb-12'>
        <div className='bg-brown-1 h-[600px] mx-auto p-24 rounded-xl flex flex-col items-center justify-center gap-y-8'>
          <p className='text-white text-3xl text-center'>
            We invite you to our wedding at Golden Elm Manor, an enchanting
            <br />
            place where towering elms meet candlelit pathways. And where our
            <br />
            next adventure begins.
          </p>

          <button className="bg-[#e1dbcb] hover:bg-white  p-4 w-2xl rounded-full cursor-pointer transition-colors duration-300">
            <p className="text-black text-lg">RSVP</p>
          </button>
        </div>
      
        <Image 
          src={bg3}
          alt=''
          className='h-[600px] object-cover mx-auto rounded-xl'
        />

        <div className='flex gap-x-8 h-[600px]'>
          <div className='p-8 space-y-12 bg-[#f3f3f1] text-2xl w-full text-center justify-center flex flex-col'>
            <p>Date: 
              <br /> 
              Saturday, September 20, 2025
            </p>
            <p>Venue: 
              <br /> 
              The Golden Elm Manor, St. Augustine, NY
            </p>
            <p>Ceremony Begins:
              <br /> 
              4:30 PM
            </p>
            <p>Reception:
              <br /> 
              6:00 PM – Midnight
            </p>
          </div>

            <div className='p-8 space-y-12 bg-[#f3f3f1] text-2xl w-full text-center justify-center flex flex-col'>
            <p>Musical Guest: 
              <br /> 
              The Starlight Quartet, followed by a surprise jazz ensemble.
            </p>
            <p>Dinner:
              <br /> 
              A seasonal farm-to-table menu featuring dishes inspired by our favorite travels.
            </p>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image 
          alt='bg-2'
          src={bg2}
          style={{
            height: '700px',
            objectFit: 'cover',
          }}
        />
        <div className='absolute inset-0 bg-black opacity-30'>
          
        </div>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl'>TRAVEL & STAY</p>
      </div>

      <div className='flex h-[600px] justify-center items-center px-36 my-16'>
        <div className='bg-[#f3f3f1] text-3xl h-[550px] items-center w-1/2 rounded-tl-2xl rounded-bl-2xl text-center justify-center flex'>
          <p>
            Golden Elm Manor is a 90-minute train
            <br />
            ride from Grand Central Station, with
            <br />
            direct routes to
            <br />
            St. Augustine. Complimentary shuttles will
            <br />
            be available from the station to the T.
          </p>
        </div>
        <Image 
          src={imgSection2}
          alt='img section 2'
          className='rounded-tr-2xl rounded-br-2xl'
          style={{
            width: '50%',
            height: '600px',
            objectFit:'cover',
            objectPosition: 'left'
          }}
        />
      </div>

       <div className='flex h-[600px] justify-center items-center px-36 my-16'>
        <Image 
          src={imgSection3}
          alt='img section 3'
          className='rounded-tl-2xl rounded-bl-2xl'
          style={{
            width: '50%',
            height: '600px',
            objectFit:'cover',
            objectPosition: 'left'
          }}
        />

         <div className='bg-[#f3f3f1] text-3xl h-[550px] items-center w-1/2 rounded-tr-2xl rounded-br-2xl text-center justify-center flex'>
          <p>
            We’ve reserved charming accommodations 
            <br />
            at The Wildflower Inn – Cozy & quaint, 
            <br />
            direct routes to
            <br />
            right in town. The Fox & Finch Manor – A
            <br />
            historic stay just minutes from the venue.
          </p>
        </div>
      </div>

      <div className='relative'>
        <Image 
          alt='bg-1'
          src={bg1}
          style={{
            height: '700px',
            objectFit: 'cover',
          }}
        />
        <div className='absolute inset-0 bg-black opacity-30'>
          
        </div>
        <div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white '>
            <p className='text-center text-3xl mb-4'>Registry</p>
            <p className='text-center text-2xl mb-8'>
              Your presence is the most cherished gift. Should you wish to contribute, 
              we've created a honeymoon registry to help us embark on a memorable adventure to the Amalfi Coast.
            </p>
             <button className="bg-[#7d7662] hover:bg-black hover:text-white p-4 w-2xl rounded-full cursor-pointer transition-colors duration-300">
              <p className="text-white text-lg">GO TO REGISTRY</p>
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  )
}

export default page