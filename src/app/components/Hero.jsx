import React from 'react'

export default function Hero() {
    return (
        <div className='bg-[#667fea] text-white grid grid-col-1  md:grid-cols-2 place-items-center min-h-[80vh]'>
          {/* Text   */}
        <div className='flex flex-col items-center md:items-start text-center py-10 px-6 md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>Spireon Tech Is Your Digital Innovation Partner</h1>
            <p className='text-white mt-4 text-lg max-w-xl'>We leverage cutting-edge technology, innovative solutions, and expert consulting to transform your business and accelerate growth in the digital age.</p>
            <div className='mt-8 flex gap-4'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>Get Started</button>
                <button className='bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition'>Learn More</button>
            </div>
        </div>

        {/* Image */}
           <div className='w-75 h-75 mb-6 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105'>
            <div className='grid grid-cols-2 gap-8 place-items-center text-white text-6xl'>
                <i className='fa-solid fa-cloud'></i>
                <i className='fa-solid fa-mobile-screen-button'></i>
                <i className='fa-solid fa-database'></i>
                <i className='fa-solid fa-robot'></i>
            </div>
           </div>  
        </div>
    )
}
