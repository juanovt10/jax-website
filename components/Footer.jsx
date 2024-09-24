import React from 'react'
import Location from '@/assets/vectors/location.svg'
import Instagram from '@/assets/vectors/instagram.svg'
import Twitter from '@/assets/vectors/design_x-outlined.svg'
import Linkedin from '@/assets/vectors/linkedin-fill.svg'
import Facebook from '@/assets/vectors/facebook-fill.svg'
import Socials from './Socials'
import Link from 'next/link'
import Whatsapp from '@/assets/vectors/whatsapp.svg'
import Mail from '@/assets/vectors/mail.svg'


const Footer = () => {
  return (
    <footer className='flex flex-col w-full pt-[3.75rem] pb-[1.875rem] gap-12 border-t border-secondary bg-primary px-6 md:px-28'>
      {/* Header section with title and community form */}
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24 w-full py-5'>
        <h2 className='text-white text-2xl md:text-4xl font-semibold leading-normal'>
          Innovative Solutions.
        </h2>
        <div className='flex flex-col w-full lg:w-auto items-start'>
          <h4 className='text-white text-[1.5rem] font-semibold leading-10'>
            Join our community
          </h4>
          <p className='text-secondary text-sm font-normal leading-normal'>
            Stay up to date on latest trends
          </p>
          <div>
            Form to submit email
          </div>
        </div>
      </div>

      {/* Main section: Office, Follow Us, Services, Contact */}
      <div className='flex flex-col lg:flex-row justify-between items-start self-stretch w-full'>
        {/* Office Section */}
        <div className='flex flex-col items-start gap-12'>
          <div className='flex flex-col items-start space-y-5'>
            <span className='footer-title'>
              Office
            </span>
            <div className='flex justify-center items-center gap-5'>
              <Location />
              <p className='text-white text-sm font-normal leading-normal'>
                123 Main Street, Anytown, USA 12345
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className='flex flex-col space-y-5'>
            <span className='footer-title'>
              Follow us on
            </span>
            <div className='flex gap-4'>
              <Socials Icon={Instagram} href="https://instagram.com" />
              <Socials Icon={Twitter} href="https://twitter.com" />
              <Socials Icon={Linkedin} href="https://linkedin.com" />
              <Socials Icon={Facebook} href="https://facebook.com" />
            </div>
          </div>
        </div>

        {/* Services Section - Hidden on small screens */}
        <div className='hidden lg:flex flex-col items-start gap-3'>
          <span className='footer-title'>
            Services
          </span>
          <Link href="#" className='footer-link'>
            Automation Solutions
          </Link>
          <Link href="#" className='footer-link'>
            Web Development
          </Link>
          <Link href="#" className='footer-link'>
            Digital Consulting
          </Link>
        </div>

        {/* Contact Section */}
        <div className='flex flex-col items-start space-y-5'>
          <span className='footer-title'>
            Contact
          </span>
          <div className='flex justify-center items-center gap-5'>
            <Whatsapp />
            <p className='text-white text-sm font-normal leading-normal'>
              +31 6 0000 0000
            </p>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <Mail />
            <p className='text-white text-sm font-normal leading-normal'>
              info@jaurorax.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links and Copyright */}
      <div className='flex flex-col lg:flex-row justify-between items-center w-full pt-6 border-t border-opacity-30 border-secondary'>
        <div className='hidden lg:inline-flex flex-col lg:flex-row p-1 justify-center items-center gap-8 text-secondary'>
          <Link href="#" className='footer-small-link'>About us</Link>
          <Link href="#" className='footer-small-link'>Projects</Link>
          <Link href="#" className='footer-small-link'>Contact us</Link>
        </div>

        <div className='flex justify-between items-center gap-8 text-secondary mt-6 lg:mt-0'>
          <span>©2024 JAuroraX. All Rights Reserved</span>
          <Link href="#" className='footer-small-link'>Privacy Policy</Link>
        </div>
      </div>
    </footer>




  )
}

export default Footer