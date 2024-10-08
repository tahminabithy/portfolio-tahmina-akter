import React, { useState } from 'react';
import profile from '../../../assets/profile2.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { Link } from 'react-router-dom';
import Navigation from '../../../shared/Navigation/Navigation';
import bannerImg from '../../../assets/hobbies/bannerImg.png';

export default function Banner() {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    return (
        <section className='min-h-screen flex flex-col'>
            <div className="relative z-20">
                <Navigation />
            </div>
            <div
                className='flex flex-grow items-center justify-center bg-lightColor dark:bg-skillColor relative bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                {/* Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-md"></div>

                <div className='text-center py-4 md:py-8 max-w-4xl w-full relative z-10'>
                    {/* Image Section */}
                    <div className='flex justify-center mb-10'>
                        <img
                            className='h-72 w-72 object-cover rounded-full shadow-custom-shadow transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl inset-0 bg-gradient-to-b from-transparent to-baseColor p-2'
                            src={profile} alt="Profile"
                        />
                    </div>

                    {/* Text Section */}
                    <h1 className='text-3xl md:text-5xl font-extrabold tracking-wider text-white mb-4'>
                        {t('greeting')}
                    </h1>
                    <p className='text-xl md:text-3xl text-baseColor font-semibold tracking-wide mb-4'>
                        {t('title')}
                    </p>
                    <p className='text-base md:text-lg leading-relaxed tracking-wide text-gray-400 dark:text-gray-300 mb-6'>
                        {t('description')}
                    </p>

                    {/* Buttons Section */}
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
                        <Link to="/contact">
                            <button className='border-2 border-baseColor text-baseColor py-2 px-8 rounded-md hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md'>
                                {t('getInTouch')}
                            </button>
                        </Link>
                        <a href='/Tahmina_Akter_CV.pdf' download="Tahmina_Akter_CV.pdf">
                            <button className='bg-baseColor text-white py-2 px-8 rounded-md border-2 border-baseColor hover:bg-white hover:text-baseColor transition duration-300 ease-in-out shadow-md'>
                                {t('downloadResume')}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
