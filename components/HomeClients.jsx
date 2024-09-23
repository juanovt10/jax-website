import Image from 'next/image'
import React from 'react'
import IYS from '@/assets/images/logo_infraestruc.png'

const HomeClients = () => {
  return (
    <section className="flex flex-col w-full items-start gap-8 relative z-10 pb-8 md:pb-16">
      <div className='flex h-10 justify-between items-center w-full'>
        <h2 className='text-white text-2xl md:text-4xl font-semibold leading-normal'>
          Our Clients
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row justify-between w-full'>
        <Image 
          src={IYS}
          alt='Infraestruc logo'
          width={200}
          height={200}
        />
        <Image 
          src={IYS}
          alt='Infraestruc logo'
          width={200}
          height={200}
        />
        <Image 
          src={IYS}
          alt='Infraestruc logo'
          width={200}
          height={200}
        />
        <Image 
          src={IYS}
          alt='Infraestruc logo'
          width={200}
          height={200}
        />

      </div>
    </section>
  )
}

export default HomeClients