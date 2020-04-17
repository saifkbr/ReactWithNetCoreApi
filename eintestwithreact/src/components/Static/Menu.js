import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
    return (
        <div className="navItem">
            <div>
                <NavLink activeStyle={
                    {color: "green"} 
                } to="/Index">Home</NavLink>
            </div>
            <div>
                <NavLink activeStyle={
                    {color: "green"} 
                } to="/AddNew">New Invoice</NavLink>
            </div>
        </div>
    )
}