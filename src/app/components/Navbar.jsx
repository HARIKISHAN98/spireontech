"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    
  const [open, setOpen] = useState(false);
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-lg bg-white/70'>
    <div className='w-full border-b border-gray-200 flex items-center justify-between px-6 py-4'>
      <div className='font-bold text-2xl text-gray-900'><Link href='/'>SpironTech</Link></div>
      {/* desktop Menu */}
      <div>
        <ul className='hidden md:flex items-center justify-between gap-8'>
            <li><Link href='/' className="text-gray-600 hover:text-blue-600 transition duration-200">Home</Link></li>
            <li><Link href='/services' className="text-gray-600 hover:text-blue-600 transition duration-200">Services</Link></li>
            <li><Link href='/about' className="text-gray-600 hover:text-blue-600 transition duration-200">About Us</Link></li>
            <li><Link href='/contact' className="text-gray-600 hover:text-blue-600 transition duration-200">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden text-3xl p-2 hover:bg-gray-100 rounded-lg' onClick={() => setOpen(!open)}>
        ☰
      </div>
    </div>
     {/* MOBILE MENU (VISIBLE ONLY WHEN open = true) */}
    {
      open && (<div className='bg-white px-6 py-4 space-y-4 border-t md:hidden text-base'>
        <div><Link href="/" className='block text-gray-700 hover:text-blue-600'>Home</Link></div>
        <div><Link href='/services' className='block text-gray-700 hover:text-blue-600'>Services</Link></div>
        <div><Link href="/about" className='block text-gray-700 hover:text-blue-600'>About Us</Link></div>
          <div><Link href='/contact' className='block text-gray-700 hover:text-blue-600'>Contact</Link></div>
      </div>)
    }
    </nav>
)}
