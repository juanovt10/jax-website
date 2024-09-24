import Link from 'next/link'
import React from 'react'

const Socials = ({ Icon, href }) => {
  return (
    <Link href={href} className='flex w-[2.5rem] p-[0.4375rem_0.375rem] justify-center items-center gap-[0.625rem] rounded-[0.5rem] bg-[#2B2B2B]'>
      <Icon />
    </Link>
  )
}

export default Socials