import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { InvoiceView } from './InvoiceView';

export const AddNewInvoice = () => {
   
    const history = useHistory();

    async function InvoicePost(e, props) {
        e.preventDefault()
        const baseUri = process.env.REACT_APP_BASE_URI;
        const corsUri = process.env.REACT_APP_CORS_URI;

        const headers = new Headers();
        headers.append("Accept", "application/json")
        headers.append("Origin", corsUri)
        headers.append("Access-Control-Allow-Origin", "*")

        const data = {
            'period': props.period,
            'unit': props.unit,
            'rate': props.rate,
            'invoiceDate': props.invoiceDate,
            'invoiceAmount': props.invoiceAmount,
            'paymentDate': props.paymentDate,
            'paymentAmount': props.paymentAmount
        }

        await axios.post(`${baseUri}/api/invoice`, data, { headers: headers, mode: 'cors' })
            .then(res => {
                if (res.status === 201)
                    history.push('/Index')
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <InvoiceView invoice={{
                period: '',
                unit: '',
                rate: '',
                invoiceDate: '',
                invoiceAmount: '',
                paymentDate: '',
                paymentAmount: ''
            }} handleClick={InvoicePost}></InvoiceView>
        </div>
    )
}
