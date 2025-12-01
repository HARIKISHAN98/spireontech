import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#1f2937]'>
    <div className='p-5 m-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {/* First column */}
      <div className='p-2 m-2 space-y-4'>
        {/* Logo */}
        <div className=''>
            <img className='w-13 h-15' src='https://spireontech.com/logo.png' alt="logo" />
            <h2 className='text-[#2563eb] font-bold text-2xl'>Spireon Tech</h2>
        </div>
        {/* paragraph */}
        <p className='text-white font-light'>
            Your trusted partner for digital innovation and technology solutions.
        </p>
        {/* social-icon */}
            <ul className='flex flex-row text-white'>
                <li className='bg-[#374151] rounded-full w-fit my-2'><a href=""><i className='p-3 fab fa-facebook'></i></a></li>
                <li className='bg-[#374151] rounded-full w-fit m-2'><a href=""><i className='p-3 fab fa-twitter'></i></a></li>
                <li className='bg-[#374151] rounded-full w-fit m-2'><a href=""><i className='p-3 fab fa-linkedin'></i></a></li>
                <li className='bg-[#374151] rounded-full w-fit m-2'><a href=""><i className='p-3 fab fa-github'></i></a></li>
            </ul>
      </div>

      {/* Services-column */}
      <div className='p-1 m-2 space-y-4'>
        <h2 className='text-xl text-white font-semibold'>Services</h2>
        <ul className='text-white space-y-1.5'>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Solutions</li>
            <li>AI & Automation</li>
        </ul>
      </div>

      {/* Company-column */}
      <div className='p-1 m-2 space-y-4'>
        <h2 className='text-xl text-white font-semibold'>Company</h2>
        <ul className='text-white space-y-1.5'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
      </div>

      {/* Newsletter & Mail */}
      <div className='p-1 m-2 space-y-5'>
        <h2 className='text-xl text-white font-semibold'>Newsletter</h2>
        <p className='text-white font-light'>Subscribe to our newsletter for the latest tech insights.</p>
        <div className='flex items-center gap-2'>
            <input type="email" placeholder='Your email' className='py-2 px-4 rounded-lg text-white bg-[#374151]'/>
            <button className='py-2 px-4 bg-[#2563eb] rounded-lg text-white cursor-pointer hover:bg-[#436ac0]'>Subscribe</button>
        </div>
      </div>    
    </div>

    {/*Copyright-section */}
    <div className='p-6 border-t text-[#374151]'> 
        <p className='text-white text-center'>© 2024 Spireon Tech. All rights reserved.</p>
    </div>
    </div>
  )
}
