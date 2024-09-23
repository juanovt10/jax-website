import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ title, description, Icon, href }) => {
  return (
    <div className='flex flex-col p-8 justify-center items-start gap-8 self-stretch card bg-card-gradient shadow-card'>
      <div>
        <Icon />
      </div>
      <h3 className='text-white text-xl md:text-2xl font-semibold leading-normal'>
        {title}
      </h3>
      <p className='self-stretch text-text-secondary text-justify text-[1.125rem] font-normal leading-5'>
        {description}
      </p>
      <Link
        href={href}
        className='text-white text-5 font-bold leading-normal hover:text-link-green'
      >
        Explore
      </Link>
    </div>
  )
}

export default ServiceCard