import React from 'react';
import Heading from '../../Components/Heading/Heading';
import Project from '../../Components/Project/Project';
import { useTranslation } from 'react-i18next';


export default function Projects() {
    const [t] = useTranslation();
    const projects = t('projects.project', { returnObjects: true })
    return (
        <div className='my-12 p-4 animate-fadeIn'>
            <div className='mb-12 lg:mb-24 text-center'>
                <Heading title={t('projects.title')} />
            </div>

            {projects?.length > 0 ? (
                projects.map((project, index) => (
                    <Project key={index} project={project} index={index} />

                ))
            ) : (
                <p>Loading projects...</p>
            )}
        </div>
    );

}
