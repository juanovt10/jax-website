'use client'

import React from 'react'
import WebDev from '@/assets/vectors/web-development.svg'
import Gears from '@/assets/vectors/automation-gears.svg'
import Consulting from '@/assets/vectors/digital-consulting.svg'
import ServiceCard from './ServiceCard'

const HomeServices = () => {
  return (
    // <section className="flex flex-col w-full items-start gap-8">
    //   <div className='flex h-10 justify-between items-center self-stretch'>
    //     <h2 className='text-white text-2xl md:text-4xl font-semibold leading-normal'>
    //       Our services
    //     </h2>
    //   </div>
    //   <div className='flex gap-8'>
    //     <ServiceCard
    //       title="Automation Solutions"
    //       description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
    //       Icon={Gears}
    //       href="#"
    //     />
    //     <ServiceCard
    //       title="Web Development"
    //       description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
    //       Icon={WebDev}
    //       href="#"
    //     />
    //     <ServiceCard
    //       title="Digital Consulting"
    //       description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
    //       Icon={Consulting}
    //       href="#"
    //     />
    //   </div>
    // </section>
    <section className="flex flex-col w-full items-start gap-8">
      <div className='flex h-10 justify-between items-center w-full'>
        <h2 className='text-white text-2xl md:text-4xl font-semibold leading-normal'>
          Our services
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        <ServiceCard
          title="Automation Solutions"
          description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
          Icon={Gears}
          href="#"
        />
        <ServiceCard
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
          Icon={WebDev}
          href="#"
        />
        <ServiceCard
          title="Digital Consulting"
          description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit non dignissim posuere. Montes egestas nulla urna viverra quis in elit euismod."
          Icon={Consulting}
          href="#"
        />
      </div>
    </section>

  )
}

export default HomeServices