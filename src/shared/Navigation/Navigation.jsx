import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Navigation.css'

export default function Navigation() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const navOptions = (
        <>
            <li className='hover: active:bg-violet-700 focus:outline-none'><Link to="/">Home</Link></li>
            <li ><Link to="/projects">Projects</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
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
        <div className="navbar md:py-4 ">
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

                        className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-96 p-2 shadow transform transition-all duration-300 ease-in-out scale-95 opacity-0 lg:scale-100 lg:opacity-100">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-style text-baseColor">Tahmina Akter</a>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal  text-lg">
                    {navOptions}
                </ul>
            </div>
        </div>
    )
}

