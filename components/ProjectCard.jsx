import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const ProjectCard = ({ title, href, tags}) => {
  return (
    <div className='flex flex-col p-3 justify-center card bg-card-gradient shadow-card'>
      Image will go HomeProject
      <div className='flex flex-col p-8 items-start gap-8 self-stretch'>
        <Link href={href}>
          <h3 className='self-stretch text-white text-xl font-semibold leading-normal'>
            {title}
          </h3>
        </Link>
        <div className='flex items-center content-center gap-[1.125rem] self-stretch flex-wrap'>
          {tags.map((tag, index) => (
            <Button key={index} label={tag} primary />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard