import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar, FaHourglassStart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const Experience = () => {
    const { t } = useTranslation();

    // Fetch experience data from translation file with returnObjects: true
    const experiences = t('experience.work', { returnObjects: true });
    console.log(i18n.t('experience', { returnObjects: true })); // Should return the full experience object
    console.log(i18n.t('experience.work', { returnObjects: true })); // Should return the work array

    // Check if the experiences array is valid
    if (!Array.isArray(experiences)) {
        console.error("Experience data is not available or not an array:", experiences);
        return <div>Error: Experience data not available</div>;
    }

    return (
        <section className="pb-10 py-8 md:py-12 bg-gray-900 lg:py-24">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 md:mb-16 text-baseColor">{t('experience.title')}</h1>

                <div className="flex justify-center p-2">
                    <VerticalTimeline>
                        {experiences.map((work, i) => (
                            <VerticalTimelineElement
                                className="m-0 p-0"
                                key={i}
                                date={work.years}
                                dateClassName="text-baseColor dark:text-gray-200 text-lg"
                                iconStyle={{ background: '#2c3e50', color: '#fff' }}
                                icon={<FaStar />}
                                contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid rgb(2 132 199)' }}
                            >
                                <div>
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
