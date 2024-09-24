import React from 'react'
import Button from './Button'
import ProjectCard from './ProjectCard'

const HomeProjects = () => {
  return (
    <section className="flex flex-col w-full items-start gap-8 relative z-10 pb-8 md:pb-16">
      <div className='flex flex-col md:flex-row h-auto md:h-10 justify-between items-start md:items-center w-full gap-4 md:gap-0'>
        <h2 className='text-white text-2xl md:text-4xl font-semibold leading-normal'>
          Sneak peak of our projects
        </h2>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 justify-between w-full'>
        <ProjectCard
          title="Mailparser Automation for transport company"
          href="#"
          tags={["Automation Solutions", "Digital Consulting"]}
        />

        <ProjectCard
          title="Quote Generator for clients"
          href="#"
          tags={["Web Development", "Digital Consulting"]}
        />
      </div>
      <Button
        label="View all projects"
        primary
      />
    </section>
  )
}

export default HomeProjects