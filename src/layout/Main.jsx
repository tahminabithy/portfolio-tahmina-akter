import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../shared/Navigation/Navigation'

export default function Main() {

    return (
        <div >
            <Navigation />
            <Outlet />
        </div>
    )
}
