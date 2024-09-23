'use client'

import React, { useState } from 'react'
import Button from './Button';
import NavItem from './NavItem';
import BurgerMenu from '@/assets/vectors/burger-menu.svg';
import Close from '@/assets/vectors/close.svg';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';


const navItems = [
  { label: 'Home', isActive: true, href: '/' },
  { label: 'Portfolio', hasDropdown: true, href: '/' },
  { label: 'Services', hasDropdown: true, href: '/' },
  { label: 'About Us', href: '/' },
  { label: 'Contact Us', href: '/' }
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="flex p-1 gap-2 flex-col items-start text-3xl font-semibold text-white">
        LOGO
      </div>
      <nav className="flex items-center gap-10">
        {/* Mobile Sheet Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger>
            <button aria-label="Toggle menu" className="sm:flex md:hidden">
              <div className="flex flex-col gap-1 invert">
                <BurgerMenu />
              </div>
            </button>
          </SheetTrigger>
          <SheetContent showCloseButton={false} className='bg-primary w-1/2 sm:w-1/3 flex flex-col items-end'>
            <div className="flex justify-end w-full">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className='invert'>
                <Close />
              </button>
            </div>
            <ul className="flex flex-col items-end gap-4">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <ul className="hidden md:flex h-12 justify-center items-center gap-8">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
        <div className='hidden lg:block'>
          <Button label="Schedule a call" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar
