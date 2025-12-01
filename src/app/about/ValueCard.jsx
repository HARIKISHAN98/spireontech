import React from 'react'

export default function ValueCard({ icon, valueName, desc }) {
    return (
        <div className='p-6 bg-white border border-gray-100 shadow-sm text-center rounded-xg space-y-4 hover:shadow-lg hover-tranlate-y-1 transition duration-300 h-full'>
            <div className='w-16 h-16 bg-indigo-100 text-indigo-600 
                      rounded-full flex items-center justify-center mx-auto text-3xl'><i className={icon}></i></div>
            <p className='text-xl font-semibold text-gray-900'>{valueName}</p>
            <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
        </div>
    )
}







