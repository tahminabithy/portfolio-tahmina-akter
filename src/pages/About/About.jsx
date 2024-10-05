import React from 'react';
import Heading from '../../Components/Heading/Heading';
import { PieChart } from 'react-minimal-pie-chart';
import Education from '../Home/Education/Education';
import img1 from '../../assets/hobbies/img1.png'
import img2 from '../../assets/hobbies/img2.png'
import img3 from '../../assets/hobbies/img3.png'
import img4 from '../../assets/hobbies/img4.png'
import { useTranslation } from 'react-i18next';
const About = () => {
    const [t] = useTranslation();
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
            <div className='my-4 lg:my-12'>
                <Heading title={t('about.title')} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <p className='mt-2 md:mt-12 leading-relaxed text-lg md:text-2xl tracking-widest dark:text-white'>
                    {t('about.description')} <br /> <br /> {t('about.experience')}
                </p>

                {/* Pie Chart */}
                <div className='flex justify-center items-center'>
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

            </div>
            {/* education   */}
            <h2 className='text-3xl font-semibold my-4 md:my-8 dark:text-white'>{t('educations.title')}</h2>
            <Education />

            {/* Experience  */}

            {/* hobbies  */}
            <section className='py-12 animate-fadeIn'>
                <h2 className='text-3xl font-semibold my-4 text-center dark:text-white'>{t('hobbies.title')}</h2>
                <p className='text-center text-sm tracking-widest leading-relaxed'>"{t('hobbies.description')}"
                </p>
                <div className='grid cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-20 my-6 md:my-24'>
                    <div className='flex justify-center items-center bg-black dark:bg-white'>
                        <img className='object-cover p-4 md:p-6' src={img1} alt="" />
                    </div>
                    <div className='flex justify-center items-center bg-black dark:bg-white'>
                        <img className='object-cover p-4 md:p-6' src={img2} alt="" />
                    </div>
                    <div className='flex justify-center items-center bg-black dark:bg-white'>
                        <img className='object-cover p-4 md:p-6' src={img3} alt="" />
                    </div>
                    <div className='flex justify-center items-center bg-black dark:bg-white'>
                        <img className='object-cover p-4 md:p-6' src={img4} alt="" />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;


// {/* <section className='py-16 '>
// <div className='container mx-auto'>
//     {/* Heading Section */}
//     <h2 className='text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white'>
//         My Hobbies
//     </h2>

//     {/* Description */}
//     <p className='text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
//         "Photography and travel inspire me to capture the beauty of diverse landscapes, cultures, and emotions."
//     </p>

//     {/* Image Grid */}
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10'>
//         <div className='relative group'>
//             <img className='object-cover w-full h-64 rounded-lg shadow-lg transform transition duration-500 hover:scale-105' src={img1} alt="Photography" />
//             <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
//                 <span className='text-white text-lg font-semibold'>Photography</span>
//             </div>
//         </div>

//         <div className='relative group'>
//             <img className='object-cover w-full h-64 rounded-lg shadow-lg transform transition duration-500 hover:scale-105' src={img2} alt="Travel" />
//             <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
//                 <span className='text-white text-lg font-semibold'>Travel</span>
//             </div>
//         </div>

//         <div className='relative group'>
//             <img className='object-cover w-full h-64 rounded-lg shadow-lg transform transition duration-500 hover:scale-105' src={img3} alt="Adventure" />
//             <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
//                 <span className='text-white text-lg font-semibold'>Adventure</span>
//             </div>
//         </div>

//         <div className='relative group'>
//             <img className='object-cover w-full h-64 rounded-lg shadow-lg transform transition duration-500 hover:scale-105' src={img4} alt="Nature" />
//             <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
//                 <span className='text-white text-lg font-semibold'>Nature</span>
//             </div>
//         </div>
//     </div>
// </div>
// </section> */}