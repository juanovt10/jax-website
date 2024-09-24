import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceMenuCard = ({ title, href, image }) => {
  return (
    <Link 
      href={href}
      className='flex flex-col p-2 justify-between items-start self-stretch card bg-card-gradient shadow-card'
    >
      <Image
        src={image}
        width={500}
        height={500}
        className='rounded-xl'
        alt='Illustration of a person holding a magnet emerging from a smartphone screen, attracting icons representing different services around a target with an arrow in the bullseye.'
      />
      <div className='flex flex-col p-[2rem_0.75rem_0.75rem] items-start gap-[0.75rem] self-stretch'>
        <h3 className='text-white text-xl md:text-2xl font-semibold leading-normal'>
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default ServiceMenuCard