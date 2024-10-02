import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import Project from '../../Components/Project/Project';


export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (
        <div className='my-12 p-4 animate-fadeIn'>
            <div className='mb-12 lg:mb-24 text-center'>
                <Heading title='Latest Projects' />
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


{/* <p className='mt-4 text-pink-500 text-3xl'>Technologies Used:  {
                                    project.tools.map((tool, index) => (
                                        <ul key={index}>

                                            <li className='text-white text-lg'>{tool}</li>
                                        </ul>
                                    ))
                                }</p> */}