import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { InvoiceRow } from './InvoiceRow';


export const Index = () => {

    const [invoices, setInvoices] = useState([])
    
    useEffect(() => {
        const baseUri = process.env.REACT_APP_BASE_URI;
        const corsUri = process.env.REACT_APP_CORS_URI;

        const headers = new Headers();
        headers.append("Accept", "application/json")
        headers.append("Origin", corsUri)
        headers.append("Access-Control-Allow-Origin", "*")
    
        Axios.get(`${baseUri}/api/invoice`, { headers: headers, mode: 'cors' })
            .then(res => { setInvoices(res.data) })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <div>
            <div className="tRow">
                <div className="thCol">Period</div>
                <div className="thCol">Rate</div>
                <div className="thCol">Unit</div>
                <div className="thCol">Invoice Date</div>
                <div className="thCol">Invoice Amount</div>
                <div className="thCol">Payment Date</div>
                <div className="thCol">Payment Amount</div>
            </div>
            {invoices && (
                // console.log(invoices)
                invoices.map((inv, index) =>
                    // <h1>{inv.id}</h1>
                    <InvoiceRow key={index} invoice={inv} />
                )
            )
            }
        </div>
    )
}