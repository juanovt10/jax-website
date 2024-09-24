import React from 'react'
import ServiceMenuCard from './ServiceMenuCard';
import AutomationImage from '@/assets/images/automation-menu.png';
import WebDevImage from '@/assets/images/web-dev-menu.png';
import ConsultingImage from '@/assets/images/consulting-menu.png';


const services = [
  { label: 'Automation Solutions', href: '#', image: AutomationImage },
  { label: 'Web Development', href: '#', image: WebDevImage },
  { label: 'Digital Consulting', href: '#', image: ConsultingImage },
];


const ServicesMenu = () => {
  return (
    <div className='absolute left-1/2 top-[4.05rem] hidden group-hover:flex group-hover:pointer-events-auto -translate-x-1/2 services-menu'>
      <ul className="flex gap-2">
        {services.map((service, index) => (
          <li key={index}>
            <ServiceMenuCard 
              title={service.label}
              href={service.href}
              image={service.image}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesMenu