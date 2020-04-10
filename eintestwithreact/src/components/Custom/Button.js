import React from 'react'
import './Button.css'
export const Button =(prop)=>{
    return(
        <div>
            <button className="button" onClick={prop.handleClick}>{prop.text}</button>
        </div>
    )
}