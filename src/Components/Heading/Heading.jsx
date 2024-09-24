import React from 'react'

export default function Heading({ title }) {
    return (
        <div className='text-4xl lg:text-5xl  md:font-extrabold text-baseColor' >
            <h1>{title}</h1>
        </div>
    )
}
