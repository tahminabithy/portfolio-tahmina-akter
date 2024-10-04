import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
export default function Footer() {
    const [t] = useTranslation();
    return (
        <footer className="footer footer-center p-4 bg-gray-900 text-gray-300 border-t border-white">
            <aside className='py-12 md:py-20'>
                <div className='flex justify-center items-center gap-3 text-xl mb-4'>
                    <a href="https://www.instagram.com/tahminabithy/"><FaInstagram /></a>
                    <a href="https://github.com/tahminabithy"> <FaGithub /></a>
                    <a href="https://www.linkedin.com/in/tahmina-akter-bithy/"> <FaLinkedinIn /></a>
                </div>
                <p className='text-base'>{t('copyright')} © {new Date().getFullYear()} - {t('footer-text')}</p>
            </aside>
        </footer>
    )
}
// rgb(0 0 0 / var(--tw-bg-opacity));
// }