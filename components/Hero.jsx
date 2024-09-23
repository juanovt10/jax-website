import React from 'react'
import Button from './Button'
import Image from 'next/image'
import HeroImage from '@/assets/images/hero.png';

const Hero = () => {
  return (
    <section className="flex px-28 pt-32 pb-16 place-content-startjustify-between items-center w-full h-screen">
      <div className="flex flex-col justify-end items-start gap-20 self-stretch w-1/2 h-full">
        <div className='flex flex-col items-start gap-8 self-stretch'>
          <h1 className="text-white text-5xl font-medium leading-normal tracking-[-0.13875rem]">
            Combining data and creativity to deliver digital success.
          </h1>
          <p className="text-[#ACACAC] text-md font-normal leading-8">
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
      <div className='flex p-10 flex-col items-center justify-center flex-shrink-0'>
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
