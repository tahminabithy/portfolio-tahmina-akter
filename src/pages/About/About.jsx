import React, { useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import { PieChart } from 'react-minimal-pie-chart';
import img from '../../assets/skilss/eduBlue.svg'

import Education from '../Home/Education/Education';
const About = () => {

    const skills = [
        { title: 'React', value: 40, color: '#E38629' },
        { title: 'JavaScript', value: 10, color: '#C13C37' },
        { title: 'Java', value: 10, color: '#5a6aa8' },
        { title: 'Express Js', value: 10, color: '#ffc0cb' },
        { title: 'Mongo DB', value: 10, color: '#cd853f' },
        { title: 'Firebase', value: 5, color: '#6A9135' },
        { title: 'Tailwind CSS', value: 5, color: '#ff0100' },
        { title: 'HTML', value: 5, color: '#808080' },
        { title: 'CSS', value: 5, color: '#6A2130' },
    ]

    return (
        <div className='animate-fadeIn px-4 md:px-14 lg:px-24'>
            <div className='my-12'>
                <Heading title='About Me' />
            </div>

            <p className='mt-12 leading-relaxed text-lg md:text-2xl tracking-widest dark:text-white'>Hello, My name is Tahmina Akter. I am a Software Engineer from Dhaka, Bangladesh.
                I am also a a passionate MERN stack developer with 1 year of experience. <br /> <br />
                Currently I am Living in Montreal,Canada. I love exploring diffrent technogoies
                and My goal is to build highly performant website that solve real-world problems
                and provide users with an awesome experience.
            </p>

            {/* my skills and expertise  */}
            <h2 className='text-3xl font-semibold mt-16 mb-10'>My Tech Stack</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-8'>
                {/* Skills List */}
                <div>
                    {skills.map((skill, index) => (
                        <span key={index} className='inline-block bg-gray-700 text-white text-sm px-4 py-1 rounded-full shadow-sm ml-3 my-2'>
                            {skill.title}
                        </span>
                    ))}
                </div>



                {/* Pie Chart */}
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <PieChart
                        className='w-96'
                        data={skills}
                        lineWidth={60}
                        totalValue={100}
                        label={({ dataEntry }) => `${Math.round(dataEntry.value)}%`}
                        labelStyle={{
                            fontSize: '5px', // Reduced font size to prevent overflow
                            fill: '#fff',
                            fontWeight: 'bold',

                        }}
                        labelPosition={70} // Adjust label position
                        animate={true}
                        reveal={100}
                    />

                    {/* Chart Labels */}
                    <div className='flex flex-col mt-6'>
                        {skills.map((skill, index) => (
                            <div key={index} className='flex items-center mb-2'>
                                <span className={`h-4 w-4 mr-2`} style={{ backgroundColor: skill.color }}></span>
                                <span className='text-base'>{skill.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* education   */}
            <h2 className='text-3xl font-semibold my-4 md:my-8'>Education</h2>
            <Education />

            {/* Experience  */}

            {/* hobbies  */}
            <h2 className='text-3xl font-semibold my-4 md:my-12 text-center'>My Hobbies</h2>
            <p className='text-center text-xl tracking-widest leading-relaxed'>My passion for photography and travel fuels my creativity,
                allowing me to capture the world’s diverse landscapes, cultures, and emotions through the lens.
                {/* Each photo and video content from my journeys reflects my unique perspective and storytelling approach,
                showcasing both the beauty of the places I visit and the emotions they evoke. */}
            </p>
        </div>
    );
};

export default About;


// <section className='my-12 p-6 lg:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'>

// <div className='mb-8'>
//     <h1 className='text-4xl lg:text-5xl font-bold mb-4 text-center text-baseColor'>
//         About Me
//     </h1>
//     <p className='text-xl leading-relaxed text-center'>
//         I am Tahmina Akter, a passionate MERN stack developer with 1 year of experience working at Tecoginse Solution Ltd.
//         I have a strong background in front-end development using React and JavaScript, combined with expertise in Java, Express.js, and MongoDB.
//     </p>
// </div>

//     <div className='mb-8'>
//         <h2 className='text-3xl font-semibold mb-4'>Professional Experience</h2>
//         <div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md'>
//             <h3 className='text-2xl font-semibold mb-2'>Tecoginse Solution Ltd</h3>
//             <p className='text-lg font-light italic mb-2'>Front-end Developer | 1 year</p>
//             <p className='leading-relaxed'>
//                 As a front-end developer at Tecoginse Solution Ltd, I worked on building dynamic and user-friendly web applications. My role involved collaborating with back-end teams, designing intuitive interfaces, and optimizing user experiences using React and JavaScript.
//             </p>
//         </div>
//     </div>


// <div className='mb-8'>
//     <h2 className='text-3xl font-semibold mb-4'>Skills & Expertise</h2>
//     <div className='flex flex-wrap gap-4'>
//         {/* Skill badges */}
//         {['React', 'JavaScript', 'Java', 'Express.js', 'MongoDB', 'MERN Stack'].map((skill, index) => (
//             <span key={index} className='bg-blue-500 text-white px-4 py-2 rounded-full text-lg shadow-sm'>
//                 {skill}
//             </span>
//         ))}
//     </div>
// </div>


//     <div className='mb-8'>
//         <h2 className='text-3xl font-semibold mb-4'>Hobbies & Interests</h2>
//         <div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md'>
//             <p className='text-lg leading-relaxed'>
//                 Outside of work, I am passionate about photography and love capturing beautiful moments during my travels. Traveling and exploring new places inspire me, and I often combine my photography skills with my adventures to document the world around me.
//             </p>
//         </div>
//     </div>
// </section>





{/* Skill badges */ }
{/* {['React', 'JavaScript', 'Java', 'Express.js', 'MongoDB', 'MERN Stack'].map((skill, index) => (

                        <span key={index} className='bg-blue-500 text-white px-4 py-2 rounded-full text-lg mx-2 shadow-sm'>
                            {skill}
                        </span>
                    ))} */}