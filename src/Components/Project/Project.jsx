import React from 'react'
import { FaSquareGithub } from 'react-icons/fa6';
export default function Project({ project, index }) {
    return (

        <div className={`flex flex-col lg:flex-row px-2 md:px-14 lg:px-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Project Image with Hover Animation */}
            <a href={project.liveLink} className='relative group flex-1'>
                <img
                    className='object-cover w-full h-full max-h-[500px] dark:border-white p-2 lg:max-h-full'
                    src={project.image}
                    alt={project.name}
                />
                {/* White Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* White Shadow Animation */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
            </a>

            {/* Project Info with Tech Stack Animation */}
            <div className='flex justify-center items-center bg-lightColor dark:bg-gray-900 flex-1 px-6 md:px-12 py-12 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
                <div>
                    {/* Project Name */}
                    <p className='text-3xl md:text-5xl font-bold mt-2 text-black dark:text-white text-center mb-6'>
                        {project.name}
                    </p>

                    {/* Project Description */}
                    <p className='text-baseColor dark:text-gray-400 text-lg leading-relaxed tracking-wide text-center mb-8'>
                        {project.description}
                    </p>

                    {/* Technologies as Badges */}
                    <div className='flex flex-wrap justify-center items-center space-x-2 mb-6'>
                        <p className='text-xl leading-loose text-gray-900 dark:text-gray-300'>Technologies:</p>
                        {project.tools.map((tool, index) => (
                            <span key={index} className='inline-block bg-gray-700 text-white text-sm px-3 py-1 rounded-full shadow-sm'>
                                {tool}
                            </span>
                        ))}
                    </div>

                    {/* GitHub Icon with Hover Effect */}
                    <div className='flex justify-end text-4xl pr-4 dark:text-gray-300'>
                        <a href={project.gitLink} target='_blank' rel='noopener noreferrer'>
                            <FaSquareGithub className='hover:text-blue-400 transform transition-transform duration-300 hover:scale-110' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // <div className={`flex flex-col lg:flex-row 
        //     ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} `}>

        //     {/* Project Image with Hover Animation */}
        //     <a href={project.liveLink} className='w-full lg:w-1/2 relative group'>
        //         <img
        //             className='object-cover w-full h-full dark:border-white p-2 lg:h-auto lg:max-h-[500px]' // Ensure object-cover for proper scaling
        //             src={project.image}
        //             alt={project.name}
        //         />

        //         {/* White Shadow Effect */}
        //         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

        //         {/* White Shadow Animation */}
        //         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
        //     </a>

        //     {/* Project Info with Tech Stack Animation */}
        //     <div className='flex justify-center items-center bg-gray-900 w-full lg:w-1/2 px-6 md:px-12 py-12 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
        //         <div>
        //             {/* Project Name */}
        //             <p className='text-3xl md:text-5xl font-bold mt-2 text-white text-center mb-6'>
        //                 {project.name}
        //             </p>

        //             {/* Project Description */}
        //             <p className='text-gray-400 text-lg leading-relaxed tracking-wide text-center mb-8'>
        //                 {project.description}
        //             </p>

        //             {/* Technologies as Badges */}
        //             <div className='flex flex-wrap justify-center items-center space-x-2 mb-6'>
        //                 <p className='text-xl leading-loose text-gray-300'>Technologies:</p>
        //                 {project.tools.map((tool, index) => (
        //                     <span key={index} className='inline-block bg-gray-700 text-white text-sm px-3 py-1 rounded-full shadow-sm'>
        //                         {tool}
        //                     </span>
        //                 ))}
        //             </div>

        //             {/* GitHub Icon with Hover Effect */}
        //             <div className='flex justify-end text-4xl pr-4 text-gray-300'>
        //                 <a href={project.gitLink} target='_blank' rel='noopener noreferrer'>
        //                     <FaSquareGithub className='hover:text-blue-400 transform transition-transform duration-300 hover:scale-110' />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
