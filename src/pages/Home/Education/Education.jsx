import React from 'react'
import Heading from '../../../Components/Heading/Heading'
import img from '../../../assets/skilss/eduBlue.svg'
import { FaGraduationCap } from 'react-icons/fa'
export default function Education() {
    return (
        <section className='my-12 md:my-20 p-6'>
            <div className='md:text-end'>
                <Heading title='Education' />
            </div>
            <div className='grid cols-1 md:grid-cols-2 mt-6 md:mt-14 gap-4'>
                <div className='flex justify-center items-center'>
                    <img src={img} alt="" />
                </div>
                <div className='py-4'>
                    <div className='flex justify-start gap-4 items-center rounded-2xl bg-eduColor hover:bg-gray-300 h-36  px-6 shadow-xl'>
                        <div className='text-4xl bg-zinc-900 text-baseColor rounded-full p-2'>
                            <FaGraduationCap />
                        </div>
                        <div>
                            <p className='text-baseColor md:font-semibold'>2007 - 2015</p>
                            <p className='text-lg md:text-2xl md:tracking-wider mt-2 dark:text-zinc-900 '>Higher Secondary School Certificate</p>
                            <p className='text-sm  md:text-lg  tracking-wider text-white'>Shaheed Bir Uttam Lt. Anwar Girls' College</p>
                        </div>
                    </div>
                    <div className='flex justify-start gap-4 my-8 items-center rounded-2xl bg-eduColor hover:bg-gray-300 h-36 px-6 shadow-lg'>
                        <div className='text-4xl bg-zinc-900 text-baseColor rounded-full p-2'>
                            <FaGraduationCap />
                        </div>
                        <div>
                            <p className='text-baseColor md:font-semibold'>2007 - 2015</p>
                            <p className='text-lg md:text-2xl md:tracking-wider mt-2 dark:text-zinc-900 '>Higher Secondary School Certificate</p>
                            <p className='text-sm  md:text-lg  tracking-wider text-white'>Shaheed Bir Uttam Lt. Anwar Girls' College</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 rounded-2xl bg-eduColor hover:bg-gray-300 h-36  px-6 shadow-xl'>
                        <div className='text-4xl bg-zinc-900 text-baseColor rounded-full p-2'>
                            <FaGraduationCap />
                        </div>
                        <div>
                            <p className='text-baseColor md:font-semibold'>2007 - 2015</p>
                            <p className='text-lg md:text-2xl md:tracking-wider mt-2 dark:text-zinc-900 '>Higher Secondary School Certificate</p>
                            <p className='text-sm  md:text-lg  tracking-wider text-white'>Shaheed Bir Uttam Lt. Anwar Girls' College</p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}
