import React from 'react'

export default function Contact() {
    return (
        <div className='bg-[#f8fafc] py-20 flex flex-col justify-between md:flex-row items-start gap-12'>
            <div className='space-y-4 px-6 py-6 md:w-1/2'>
                {/* heading   */}
                <h2 className='text-4xl text-[#1f2937] font-semibold'>Get In Touch</h2>
                {/* Paragraph  */}
                <p className='text-xl text-[#6b7280]'>Ready to start your digital transformation journey? Let's discuss how we can help your business grow.</p>
                {/* Address */}
                <div className='text-lg space-y-4'>
                    <p className='text-[#374151]'><i className='fas fa-envelope p-2 rounded bg-[#667eea] text-white'></i> info@spireontech.com</p>
                    <p className='text-[#374151]'><i className='fas fa-phone p-2 rounded bg-[#667eea] text-white'></i> +91 95338-39201</p>
                    <p className='text-[#374151]'><i className='fas fa-map-marker-alt p-2 rounded bg-[#667eea] text-white'></i>  IT Park, Dehradun(UK)</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white py-6 px-6 md:w-1/2 rounded-xl shadow space-y-4'>
                <h2 className='text-3xl font-medium text-[#1f2937] text-center'>Send us a Message</h2>
                <form>
                    {/* first row  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input className='bg-[#f5f8fa] px-4 py-3 rounded-lg w-full' type="text" placeholder='Your Name *' required />
                        <input className='bg-[#f5f8fa] px-4 py-3 rounded-lg w-full' type="email" placeholder='Your Email *' required />
                    </div>

                    {/* Second row  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input className='bg-[#f5f8fa] px-4 py-3 rounded-lg w-full' type="number" placeholder='Your Phone Number' required />
                        <input className='bg-[#f5f8fa] px-4 py-3 rounded-lg w-full' type="text" placeholder='Company Name' required />
                    </div>
                    
                    {/* Subject */}
                        <input className='bg-[#f5f8fa] px-4 py-3 rounded-lg w-full mt-4' type="text" placeholder='Subject *' required />

                    {/* Message */}
                        <textarea className='bg-[#f5f8fa] px-4 py-3 mt-4 rounded-lg w-full' placeholder='Your Message *' rows={5}></textarea>

                    {/* Button */}
                    <button className='bg-blue-600 text-white py-3 px-6 font-semibold rounded-lg w-full md:w-auto'>Send Message</button>
                </form>
            </div>
        </div>
    )
}








