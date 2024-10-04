import React, { useEffect, useState } from 'react'
import Heading from '../../../Components/Heading/Heading'
import img from '../../../assets/skilss/eduBlue.svg'
import { FaGraduationCap } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
export default function Education() {
    const [t] = useTranslation();
    const education = t('educations.education', { returnObjects: true })
    return (
        <section className=''>
            {/* <div className='md:text-end'>
                <Heading title='Education' />
            </div> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                {/* Image */}
                <div className='flex justify-center items-center'>
                    <img src={img} alt="Education illustration" className='rounded-lg shadow-lg' />
                </div>

                {/* Education List */}
                <div className=''>
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className='flex items-center rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 h-36 px-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 my-6'
                        >
                            {/* Graduation Cap Icon */}
                            <div className='text-4xl bg-baseColor text-white rounded-full p-3 flex-shrink-0'>
                                <FaGraduationCap />
                            </div>

                            {/* Education Details */}
                            <div className='ml-6'>
                                <p className='text-baseColor font-semibold text-sm md:text-lg'>
                                    {edu.yearRange}
                                </p>
                                <p className='text-lg md:text-2xl tracking-wide mt-2 dark:text-white text-gray-900'>
                                    {edu.degree}
                                </p>
                                <p className='text-sm md:text-lg tracking-wide dark:text-gray-300 text-gray-600'>
                                    {edu.institution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
