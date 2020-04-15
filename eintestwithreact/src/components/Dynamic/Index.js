import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { InvoiceRow } from './InvoiceRow';


export const Index = () => {

    const [invoices, setInvoices] = useState([])

    const headers = new Headers();
    //headers.append("Content-Type","application/json")
    headers.append("Accept", "application/json")
    headers.append("Origin", "http://localhost:3000")
    headers.append("Access-Control-Allow-Origin", "*")

    useEffect(() => {
        Axios.get('http://localhost:5000/api/invoice', { headers: headers, mode: 'cors' })
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