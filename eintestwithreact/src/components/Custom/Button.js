import React from 'react'
import './Button.css'
export const Button =(prop)=>{
    return(
        <div>
            <button className="button" >{prop.text}</button>
        </div>
    )
}