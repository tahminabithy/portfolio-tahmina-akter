import React, { useState } from 'react'
import profile from '../../../assets/profile2.jpg'
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { Link } from 'react-router-dom';
// import cv from '../../../assets/Tahmina_Akter_CV.pdf';
export default function Banner() {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };
    return (
        <div className=' flex items-center justify-center bg-lightColor dark:bg-skillColor'>
            <div className='text-center py-10'>

                {/* Image Section */}
                <div className='flex justify-center mb-8 '>
                    <img
                        className='h-72 w-72 object-cover rounded-full shadow-custom-shadow transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl inset-0 bg-gradient-to-b from-transparent to-baseColor  rounded-full p-4'
                        src={profile} alt="Profile"
                    />
                    {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-baseColor opacity-50 rounded-full'></div> */}
                </div>

                {/* Text Section */}
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-wider text-gray-900 dark:text-white mt-4  mb-4 animate-fadeIn'>
                    {t('greeting')}
                </h1>
                <p className='text-2xl md:text-3xl text-baseColor font-semibold tracking-wide mb-4 animate-fadeIn delay-500'>
                    {t('title')}
                </p>
                <p className='text-lg md:text-xl leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 mb-8 animate-fadeIn delay-700'>
                    {t('description')}
                </p>

                {/* Buttons Section */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-4 animate-fadeIn delay-1000'>
                    <Link to="/contact">
                        <button className='border-2 border-baseColor text-baseColor py-3 px-8 rounded-md hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md'>
                            {t('getInTouch')}
                        </button>
                    </Link>
                    <a href='/Tahmina_Akter_CV.pdf' download="Tahmina_Akter_CV.pdf">
                        <button className='bg-baseColor text-white py-3 px-8 rounded-md border-2 border-baseColor hover:bg-white hover:text-baseColor transition duration-300 ease-in-out shadow-md'>
                            {t('downloadResume')}
                        </button>
                    </a>

                </div>
                <div className='mt-8 '>
                    <button onClick={() => changeLanguage('en')} className={`mr-4 ${selectedLanguage === 'en' ? 'shadow-md' : 'opacity-40'}`}>
                        <img className='w-8 h-4 md:w-12 md:h-6 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg" alt="English" />
                    </button>
                    <button onClick={() => changeLanguage('fr')} className={`${selectedLanguage === "fr" ? 'shadow-md' : 'opacity-40'}`}>
                        <img className='w-8 h-4 md:w-12 md:h-6 object-cover' src="https://m.media-amazon.com/images/I/51KX3rkD-LL._AC_UF894,1000_QL80_.jpg" alt="french" />
                    </button>
                </div>
            </div>
            {/* ------------ */}

        </div>
    )
}

{/* <div className='flex items-center justify-center min-h-screen px-4 md:px-14'>

<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:py-12 h-full'>


    <div className='flex justify-center items-center'>
        <div className='p-6 animate-fadeIn'>
            <h1 className='text-5xl md:text-7xl font-extrabold tracking-wide text-gray-900 dark:text-white mb-4'>
                Hello! I'm Tahmina
            </h1>

            <p className='text-2xl md:text-3xl text-baseColor font-semibold tracking-wide mb-4'>
                Web Developer
            </p>

            <p className='text-lg md:text-xl leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 mb-8'>
                I'm a software engineer based in Dhaka, Bangladesh. I specialize in building (and occasionally designing) exceptional digital experiences.
            </p>

           
            <div className='flex flex-col md:flex-row justify-start items-start gap-6 mt-12'>
                <button className='border-2 border-baseColor text-baseColor py-3 px-8 rounded-md hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md'>
                    Get in Touch
                </button>
                <button className='bg-baseColor text-white py-3 px-8 rounded-md border-2 border-baseColor hover:bg-white hover:text-baseColor transition duration-300 ease-in-out shadow-md'>
                    Download Resume
                </button>
            </div>
        </div>
    </div>

  
    <div className='flex justify-center items-center'>
        <div className='relative animate-slideIn border-2 border-blue'>
            <img className='w-96 h-96  rounded-full object-cover shadow-xl transition duration-500 ease-in-out transform hover:scale-105' src={profile} alt="Profile" />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-baseColor opacity-40 rounded-full'></div>
        </div>
    </div>
</div>
</div> */}