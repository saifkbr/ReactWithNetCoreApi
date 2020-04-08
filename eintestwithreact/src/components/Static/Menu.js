import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
    return (
        <div className="navItem">
            <div>
                <Link to="/Index">Home</Link>
            </div>
            <div>
                <Link to="/AddNew">Add new person</Link>
            </div>
        </div>
    )
}