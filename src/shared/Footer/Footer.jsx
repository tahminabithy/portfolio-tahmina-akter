import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6'
export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-gray-900 text-gray-300 border-t border-white">
            <aside className='py-12 md:py-20'>
                <div className='flex justify-center items-center gap-3 text-xl mb-4'>
                    <FaInstagram /><FaFacebook /><FaGithub />
                </div>
                <p className='text-base'>Copyright © {new Date().getFullYear()} - All rights reserved by Tahmina Akter</p>
            </aside>
        </footer>
    )
}
// rgb(0 0 0 / var(--tw-bg-opacity));
// }