import React from 'react'

export default function Heading({ title }) {
    return (
        <div className='text-3xl lg:text-4xl font-extrabold text-baseColor' >
            <h1>{title}</h1>
        </div>
        // <div className='flex justify-center mb-8'>
        //     <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white text-center relative inline-block'>
        //         <span className='relative z-10'>{title}</span>
        //         {/* Gradient underline effect visible in both light and dark mode */}
        //         <span className='absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full'></span>
        //     </h1>
        // </div>
    )
}
