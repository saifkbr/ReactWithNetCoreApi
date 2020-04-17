import React from 'react'
import { Route } from 'react-router-dom';
import { Index } from '../Dynamic/Index'
import  {AddNewInvoice}  from '../Dynamic/AddNewInvoice'

export const Content = () => {
    return (
        <div>
            {/* <switch> */}
            <Route path="/" exact render={()=>{
                return(
                <h1>Welcome to Home</h1>
                )
            }} />
            <Route path="/Index" component={Index} />
            <Route path="/AddNew" component={AddNewInvoice} />
            {/* </switch> */}
        </div>
    )
}