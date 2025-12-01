import React from 'react'
import Card from './Card'

export default function Services() {
  return (
    <div className='py-14'>
      <h1 className='font-bold py-4 text-center text-4xl'>Our Services</h1>
      <p className='text-gray-400 pb-2 m-2 text-center text-xl'>Comprehensive technology solutions to drive your digital transformation</p>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5'>
        <Card 
          icon = "fas fa-laptop-code" 
          title = "Digital Solutions" 
          desc = {{d1:"Web Development",d2:"Mobile App Development",d3:"UI/UX Design",d4:"Digital Strategy Consulting"} }
        />
        <Card 
          icon = "fas fa-laptop-code" 
          title = "Data & Analytics" 
          desc = {{d1:"Data Architecture",d2:"Business Intelligence",d3:"Machine Learning",d4:"Data Visualization"} }
        />
        <Card 
          icon = "fas fa-laptop-code" 
          title = "Cloud Services" 
          desc = {{d1:"Web Development",d2:"Mobile App Development",d3:"UI/UX Design",d4:"Digital Strategy Consulting"} }
        />
        <Card 
          icon = "fas fa-laptop-code" 
          title = "AI & Automation" 
          desc = {{d1:"Web Development",d2:"Mobile App Development",d3:"UI/UX Design",d4:"Digital Strategy Consulting"} }
        />
      </div> 
    </div>
  )
}







