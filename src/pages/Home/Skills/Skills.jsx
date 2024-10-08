import React, { useEffect, useState } from 'react';
import Heading from '../../../Components/Heading/Heading';
import './Skills.css'
import img from '../../../assets/skilss/react.svg'
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [t] = useTranslation()
    // List of skills
    const skills1 = ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js"];
    const times = 4; // Number of times to repeat the skills

    useEffect(() => {
        fetch('/skils.json').then(res => res.json()).then(data => {

            setSkills(data);
        })
    }, [])
    return (
        <div className='mt-12 md:mt-20 max-w-screen-2xl mx-auto'>
            <div className='text-center'>
                <Heading title={t('skill-title')} />
            </div>

            {/* infinite loop slider */}
            <div className='my-12 lg:my-24'>
                <Marquee className='py-12' pauseOnHover={true} speed={70}>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='overflow-hidden flex justify-center items-center bg-lightColor dark:bg-skillColor mx-8 shadow-2xl shadow-custom-shadow rounded-2xl min-w-[150px] sm:min-w-[180px] md:min-w-[200px] p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                                <div className='px-10 py-8 transition ease-in-out delay-150'> {/* Increase padding */}
                                    <img className='h-20 w-20 object-contain' src={skill.image} alt={skill.name} />
                                    <p className='text-center text-xl font-bold mt-4 text-dark dark:text-white'>{skill.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
}



