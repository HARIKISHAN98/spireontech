import React from 'react'
import TeamCard from './TeamCard'
import ValueCard from './ValueCard'

const team = [
    {
      icon : "fas fa-user-tie",
      name : "Parveen Goyal",
      design : "CEO & Founder",
      desc : "Visionary leader with 15+ years in technology and business strategy.",
    },
     {
      icon : "fas fa-laptop-code",
      name : "Mukesh Garg",
      design : "CTO",
      desc : "Technical expert specializing in cloud architecture and AI solutions.",
    },
     {
      icon : "fas fa-palette",
      name : "Prateek Gupta",
      design : "Head of Design",
      desc : "Creative director focused on user experience and digital innovation.",
    },
  ]

const value = [
  {
    icon : "fas fa-lightbulb",
    valueName : "Innovation",
    desc : "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
  },
  {
    icon : "fas fa-handshake",
    valueName : "Partnership",
    desc : "We work closely with our clients as trusted partners, not just service providers."
  },
  {
    icon : "fas fa-shield-alt",
    valueName : "Quality",
    desc : "We maintain the highest standards in everything we do, from code quality to client service."
  },
  {
    icon : "fas fa-rocket",
    valueName : "Growth",
    desc : "We help our clients grow by providing scalable solutions that evolve with their business."
  },
]  

export default function AboutPage() {
  return (
    <div>
      {/* About Banner */}
      <div className='bg-[#764ba2] min-h-[30vh] text-center px-3 py-10 space-y-3'>
        <h2 className='text-5xl text-white font-semibold'>About Spireon Tech</h2>
        <p className='text-xl text-white'>Your trusted partner for digital innovation and technology solutions</p>
      </div>

      {/* About SpironTech */}
      <div className='bg-white px-6 py-12  flex flex-col md:flex-row items-center md:items-start gap-10'>
        <div className='flex-1 space-y-6'>
        <h2 className='text-4xl text-[#1f2937] font-bold'>Spireon Tech</h2>
       
        <p className='text-lg text-[#6b7280]'>Spireon Tech is your trusted technology partner, dedicated to delivering innovative solutions that drive business growth. Our team of experienced developers, designers, and consultants work collaboratively to transform your digital vision into reality.</p>

        <p className='text-lg text-[#6b7280]'>From startups to enterprise-level organizations, we provide end-to-end technology services that help you stay competitive in today's rapidly evolving digital landscape.</p>

          <ul className='text-xl text-[#374151] font-medium space-y-2'>
            <li> <i className='fas fa-check-circle text-[#10b981] mr-2'></i> Expert Team</li>
            <li> <i className='fas fa-check-circle text-[#10b981] mr-2'></i> Proven Results</li>
            <li> <i className='fas fa-check-circle text-[#10b981] mr-2'></i> 24/7 Support</li>
          </ul>
      </div>

        <div className='flex-1 flex justify-center md:justify-center'>
          <img className='rounded-xl max-w-md w-64 md:w-80 lg:w-96 shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcVh4v7uMh6Kc-i7sT4HNgAHEHMq-llEMCw&s" alt="img" />
        </div>
      </div>

      {/* Our Team */}
      <div className='bg-[#f8fafc] px-6 py-24 space-y-12 min-h-screen'>
        <div className='space-y-4 text-center'>
        <h2 className='text-[#1f2937] text-4xl font-semibold'>Our Team</h2>
        <p className='text-[#6b7280] text-xl'>Meet the experts behind Spireontech's success</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {
            team.map(({icon,name,design,desc}, index) => (
              <TeamCard key={name}
              icon={icon}
              name={name}
              design={design}
              desc={desc}
              />
            ))
          }
        </div>
      </div>

      {/* Our Values */}
      <div className='bg-white px-6 py-24 space-y-12 min-h-screen'>
        <div className='space-y-4 text-center'>
          <h2 className='text-[#1f2937] text-4xl font-semibold'>Our Values</h2>
          <p className='text-[#6b7280] text-xl'>The principles that guide everything we do</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {
            value.map(({icon,valueName,desc},index)=>(
              <ValueCard 
              key={valueName}
              icon={icon}
              valueName={valueName}
              desc={desc}
              />
            ))
          }
        </div>        
      </div>

      {/* Our Achivement numbers */}
      <div></div>
      {/* Testimonials */}
      <div></div>
    </div>
  )
}
