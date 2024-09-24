import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner/Banner'
import Education from './Education/Education'
import Skills from './Skills/Skills'


export default function Home() {
    return (
        <div className=''>
            <Banner />

            <Education />
            <Skills />

        </div>
    )
}
