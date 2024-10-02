import React from 'react'
import profile from '../../../assets/profile2.jpg'

export default function Banner() {
    return (
        <div className='flex items-center justify-center min-h-screen px-4 md:px-14'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:py-12 h-full'>

                {/* Text Section */}
                <div className='flex justify-center items-center'>
                    <div className='p-6 animate-fadeIn'>
                        <h1 className='text-5xl md:text-7xl font-extrabold tracking-wide text-gray-900 dark:text-white mb-4'>
                            Hello! I'm Tahmina
                        </h1>

                        <p className='text-2xl md:text-3xl text-baseColor font-semibold tracking-wide mb-4'>
                            Web Developer
                        </p>

                        <p className='text-lg md:text-xl leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 mb-8'>
                            I'm a software engineer based in Dhaka, Bangladesh. I specialize in building (and occasionally designing) exceptional digital experiences.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-col md:flex-row justify-start items-start gap-6 mt-12'>
                            <button className='border-2 border-baseColor text-baseColor py-3 px-8 rounded-md hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md'>
                                Get in Touch
                            </button>
                            <button className='bg-baseColor text-white py-3 px-8 rounded-md border-2 border-baseColor hover:bg-white hover:text-baseColor transition duration-300 ease-in-out shadow-md'>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='flex justify-center items-center'>
                    <div className='relative animate-slideIn'>
                        <img className=' rounded-full object-cover shadow-xl transition duration-500 ease-in-out transform hover:scale-105' src={profile} alt="Profile" />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-baseColor opacity-40 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

