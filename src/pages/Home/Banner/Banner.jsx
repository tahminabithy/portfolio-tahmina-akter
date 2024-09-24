import React from 'react'
import profile from '../../../assets/profile2.jpg'
export default function Banner() {
    return (
        <div className='grid cols-1 md:grid-cols-2 gap-6'>
            <div className='flex justify-center items-center'>
                <div className='p-6'>
                    <h1 className='text-3xl font-bold tracking-wide '>Hello! I'm Tahmina</h1>
                    <p className='leadeing-relaxed tracking-wider mt-2 text-baseColor' >Web Developer</p>
                    <p className='text-xl leading-loose tracking-widest my-8'>I'm a software engineer based in Dhaka, Bangladesh. I specialize in building (and occasionally designing) exceptional digital experiences. .
                    </p>
                    <div className='inline md:flex justify-center items-center gap-6 mt-12'>
                        <button className='border-2 border-baseColor w-full py-4 rounded-md hover:bg-baseColor hover:text-white  transition ease-in-out delay-150'>Get in Touch</button>
                        <button className='bg-baseColor text-white border-2 border-baseColor w-full py-4 rounded-md hover:text-baseColor hover:bg-white transition ease-in-out delay-150'>Download Resume</button>
                    </div>
                </div>


            </div>
            <div className='flex justify-center items-center '>
                <img className=' w-96 h-96 rounded-full object-cover' src={profile} alt="" />
            </div>
        </div>

    )
}


