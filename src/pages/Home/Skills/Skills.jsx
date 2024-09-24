import React, { useEffect, useState } from 'react';
import Heading from '../../../Components/Heading/Heading';
import './Skills.css'
import img from '../../../assets/skilss/react.svg'
import Marquee from 'react-fast-marquee';
export default function Skills() {
    const [skills, setSkills] = useState([]);
    // List of skills
    const skills1 = ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js"];
    const times = 4; // Number of times to repeat the skills

    useEffect(() => {
        fetch('/skils.json').then(res => res.json()).then(data => {
            console.log(data);
            setSkills(data);
        })
    }, [])
    return (
        <div className='mt-12 md:mt-20'>
            <div className='text-center'>
                <Heading title='Skills' />
            </div>

            {/* infinite loop slider */}
            <div className='my-12 '>
                <Marquee className='py-12' pauseOnHover={true} speed={70}>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='overflow-hidden flex justify-center items-center bg-skillColor mx-8 shadow-2xl shadow-custom-shadow rounded-2xl w-52 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                                <div className='px-10 py-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'> {/* Increase padding */}
                                    <img className='h-20 w-20 object-contain' src={skill.image} alt={skill.name} />
                                    <p className='text-center text-xl font-bold mt-4'>{skill.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
}




// <div className="relative overflow-hidden h-12 md:h-16 lg:h-80 bg-pink-800"> {/* Adjust height for different screens */}
// <div className="absolute flex whitespace-nowrap animate-marquee space-x-4 md:space-x-8 lg:space-x-12 bg-pink-600"> {/* Control spacing between items */}
//     {skills.map((skill, index) => (
//         <div
//             key={index}
//             className="shadow-lg bg-black-700"
//         >
//             {skill}
//         </div>
//     ))}
//     {/** Duplicate the skills for seamless effect */}
//     {skills.map((skill, index) => (
//         <div
//             key={index + skills.length}
//             className="mx-2 h-20  sm:mx-4 text-sm sm:text-base md:text-xl font-semibold text-white bg-blue-500 px-2 sm:px-4 py-1 sm:py-2 rounded-md shadow-md"
//         >
//             {skill}
//             <img src={img} alt="" />
//         </div>
//     ))}
// </div>
// </div>