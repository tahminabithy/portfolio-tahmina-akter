import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaHourglassStart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const experiences = [
    {
        company: 'Ally Bank',
        title: 'Financial Representative',
        years: '2023 - 2024',
        mainTech: ['React', 'Tailwind CSS', 'Firebase'],
        technologies: ['TypeScript', 'GitHub Actions', 'REST API'],
    },
    {
        company: 'Tecognize Solution',
        title: 'Frontend Developer',
        years: '2022 - 2023',
        mainTech: ['React', 'Tailwind CSS', 'Firebase'],
        technologies: ['TypeScript', 'GitHub Actions', 'REST API'],
    },
    {
        company: 'Inflexion Point BD',
        title: 'Software Engineer Intern',
        years: '2021 - 2022',
        mainTech: ['React', 'Tailwind CSS'],
        technologies: ['JavaScript', 'Git', 'API Integration'],
    },

];

const Experience = () => {
    return (
        <section className="pb-10 py-8 md:py-12 bg-gray-900  lg:py-24">
            <div className="container mx-auto text-center ">
                <h1 className="text-4xl font-bold mb-6 md:mb-16 text-baseColor">Experience</h1>

                <div className="flex justify-center p-2">
                    <VerticalTimeline>
                        {experiences.map((work, i) => (
                            <VerticalTimelineElement
                                className='m-0 p-0'
                                key={i}
                                date={work.years}
                                dateClassName="text-baseColor dark:text-gray-200 text-lg"
                                iconStyle={{ background: '#2c3e50', color: '#fff' }}
                                icon={<FaStar />}
                                contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }} // Ensures light text on colored background
                                contentArrowStyle={{ borderRight: '7px solid rgb(2 132 199)' }} // Matches arrow with background
                            >
                                <div className=''>
                                    <h3 className="text-start text-xl md:text-2xl font-semibold text-white dark:text-white">
                                        {work.title}
                                    </h3>
                                    <h4 className="text-start text-lg md:text-xl font-medium text-gray-200 dark:text-gray-300">
                                        {work.company}
                                    </h4>
                                    <div className="mt-4 text-left">
                                        {/* Main Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {work.mainTech.map((technology, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-baseColor text-white text-sm px-3 py-1 rounded-full"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Other Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {work.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        ))}

                        {/* Optional End Timeline Element */}
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
                            icon={<FaHourglassStart />}
                        />
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Experience;
