import React from 'react'
import TeamCard from './TeamCard'
import ValueCard from './ValueCard'
import AboutCompany from '../components/AboutCompany'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Contact from '../components/Contact'

const team = [
  {
    icon: "fas fa-user-tie",
    name: "Parveen Goyal",
    design: "CEO & Founder",
    desc: "Visionary leader with 15+ years in technology and business strategy.",
  },
  {
    icon: "fas fa-laptop-code",
    name: "Mukesh Garg",
    design: "CTO",
    desc: "Technical expert specializing in cloud architecture and AI solutions.",
  },
  {
    icon: "fas fa-palette",
    name: "Prateek Gupta",
    design: "Head of Design",
    desc: "Creative director focused on user experience and digital innovation.",
  },
]

const value = [
  {
    icon: "fas fa-lightbulb",
    valueName: "Innovation",
    desc: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
  },
  {
    icon: "fas fa-handshake",
    valueName: "Partnership",
    desc: "We work closely with our clients as trusted partners, not just service providers."
  },
  {
    icon: "fas fa-shield-alt",
    valueName: "Quality",
    desc: "We maintain the highest standards in everything we do, from code quality to client service."
  },
  {
    icon: "fas fa-rocket",
    valueName: "Growth",
    desc: "We help our clients grow by providing scalable solutions that evolve with their business."
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* ✅ IMPROVED RESPONSIVE ABOUT BANNER */}
      <div className="w-full min-h-[22vh] sm:min-h-[28vh] md:min-h-[32vh]
                flex items-center justify-center
                bg-linear-to-r from-[#667FEA] to-[#764ba2]
                text-center px-4 pt-8 sm:pt-0">

        <div className="space-y-3 sm:space-y-4 max-w-xl sm:max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl
                   font-bold text-white tracking-wide leading-tight">
            About Spireon Tech
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl
                  text-white/90 leading-relaxed">
            Your trusted partner for digital innovation and technology solutions
          </p>
        </div>

      </div>


      {/* About SpironTech */}
      <AboutCompany />

      {/* Our Team */}
      <div className="bg-[#f8fafc] px-6 py-24 space-y-14">

        {/* Heading */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="text-[#1f2937] text-4xl md:text-5xl font-bold">
            Our Team
          </h2>
          <p className="text-[#6b7280] text-lg md:text-xl">
            Meet the experts behind Spireon Tech’s success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {team.map(({ icon, name, design, desc }) => (
            <TeamCard
              key={name}
              icon={icon}
              name={name}
              design={design}
              desc={desc}
            />
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white px-6 py-24 space-y-14">

        {/* Heading */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="text-[#1f2937] text-4xl md:text-5xl font-bold">
            Our Values
          </h2>
          <p className="text-[#6b7280] text-lg md:text-xl">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {value.map(({ icon, valueName, desc }) => (
            <ValueCard
              key={valueName}
              icon={icon}
              valueName={valueName}
              desc={desc}
            />
          ))}
        </div>
      </div>


      {/* Our Achivement numbers */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* ContactSection */}
      <Contact />
    </div>
  )
}
