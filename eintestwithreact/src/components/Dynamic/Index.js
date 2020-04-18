import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { InvoiceRow } from './InvoiceRow';


export const Index = () => {

    const [invoices, setInvoices] = useState([])
    const baseUri = process.env.REACT_APP_BASE_URI;
    const corsUri = process.env.REACT_APP_CORS_URI;

    const headers = new Headers();
    headers.append("Accept", "application/json")
    headers.append("Origin", corsUri)
    headers.append("Access-Control-Allow-Origin", "*")

    useEffect(() => {
        fetch();
    }, [])

    
    function HandleClick(id) {
        deleteInvoice(id)
    }

    const fetch = async () => {
        await Axios.get(`${baseUri}/api/invoice`, { headers: headers, mode: 'cors' })
            .then(res => { setInvoices(res.data) })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteInvoice = async (id) => {
        await Axios.delete(`${baseUri}/api/invoice/${id}`, { headers: headers, mode: 'cors' })
            .then((res) => {
                if (res.status === 204) {
                    setInvoices(invoices.filter(item => item.id !== id))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                invoices.map((inv, index) =>
                    <InvoiceRow key={index} invoice={inv} HandleClick={e => HandleClick(inv.id)} />
                )
            )
            }
        </div>
    )
}