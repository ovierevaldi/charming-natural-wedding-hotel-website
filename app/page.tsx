import Image from "next/image";
import background1 from '@/public/images/background_1.webp'
import imageSection2 from '@/public/images/image-section-2.avif'
import LinkCard from "@/components/LinkCard";
import Section from "@/components/Section";

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
            height: '650px'
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
        <LinkCard 
          text="Our Story"
          coverUrl="'/images/link-card-1.webp'"
        />
        <LinkCard 
          text="The Details"
          coverUrl="'/images/link-card-2.webp'"
        />
        <LinkCard 
          text="RSVP"
          coverUrl="'/images/link-card-3.webp'"
        />
        <LinkCard 
          text="Registry"
          coverUrl="'/images/link-card-4.webp'"
        />
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
            height: '700px',
            width: '100%'
          }}
        />
        <Section />
      </div>
    </div>
  );
}
