import React from 'react'
import Button from './Button'
import Image from 'next/image'
import HeroImage from '@/assets/images/hero.png';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row pt-32 pb-8 md:pb-16 justify-between items-center w-full h-auto md:h-screen">
      <div className="flex flex-col justify-center md:justify-end items-start gap-8 md:gap-20 w-full md:w-1/2 h-auto md:h-full">
        <div className='flex flex-col items-start gap-4 md:gap-8 w-full'>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-snug md:leading-normal tracking-[-0.05rem] md:tracking-[-0.13875rem]">
            Combining data and creativity to deliver digital success.
          </h1>
          <p className="text-text-secondary text-sm md:text-md font-normal leading-6">
            Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod.
          </p>
          <div className="flex gap-3 justify-start items-center">
            <Button
              label="Start a Project"
              primary
            />
            <Button
              label="View our work"
            />
          </div>
        </div>
      </div>

      {/* Hide Image on Small Screens */}
      <div className='hidden md:flex p-10 flex-col items-center justify-center flex-shrink-0'>
        <Image
          src={HeroImage}
          width={500}
          height={500}
          alt='Illustration of a person holding a magnet emerging from a smartphone screen, attracting icons representing different services around a target with an arrow in the bullseye.'
        />
      </div>
    </section>
  )
}

export default Hero
