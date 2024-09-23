'use client'

import React from 'react';
import Dropdown from '@/assets/vectors/dropdown.svg';
import Link from 'next/link';

function NavItem({ label, isActive, hasDropdown, href }) {
  const activeClasses = isActive ? "font-semibold text-link-green" : "text-neutral-100";
  
  return (
    <li className={`navbar-link ${activeClasses}`}>
      <Link 
        className="flex items-center gap-2 "
        href={href}
      >
        {label}
        {hasDropdown && (
          <div className='hidden md:flex'>
            <Dropdown />
          </div>
        )}
      </Link>
    </li>
  );
}

export default NavItem;