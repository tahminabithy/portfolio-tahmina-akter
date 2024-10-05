import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Navigation.css'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
    const [t] = useTranslation();
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }
    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme');
    //     document.querySelector('html').setAttribute('data-theme', localTheme);
    // }, [theme])
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        const htmlElement = document.querySelector('html');

        // DaisyUI still uses 'data-theme' for specific themes, but Tailwind uses the 'dark' class
        if (localTheme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.setAttribute('data-theme', 'dark'); // Optional for DaisyUI theme
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.setAttribute('data-theme', 'light'); // Optional for DaisyUI theme
        }
    }, [theme]);
    const navOptions = (
        <>
            <li className='hover: active:bg-violet-700 focus:outline-none'><Link to="/">{t('navigation.home')}</Link></li>
            <li ><Link to="/projects">{t('navigation.projects')}</Link></li>
            <li><Link to="/about">{t('navigation.about')}</Link></li>
            <li><Link to="/contact">{t('navigation.contact')}</Link></li>
            <li><label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input onChange={handleToggle} checked={theme === "dark" ? false : true} type="checkbox" />

                {/* sun icon */}
                <FaSun className="swap-off h-6 w-6 fill-current text-yellow-600" />
                {/* moon icon */}
                <FaMoon className="swap-on h-6 w-6 fill-current " />

            </label></li>


        </>
    )
    return (
        <div className="navbar py-4 md:py-10 px-4 md:px-14 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}

                        className=" menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-96 p-2 shadow transform transition-all duration-300 ease-in-out scale-95 opacity-0 lg:scale-100 lg:opacity-100">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl text-style text-baseColor">Tahmina Akter</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  text-2xl lg:space-x-4">
                    {navOptions}
                </ul>
            </div>
        </div>
    )
}

