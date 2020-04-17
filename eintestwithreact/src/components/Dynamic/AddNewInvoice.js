import React, { useState } from 'react'
import './AddNewInvoice.css'
import { Button } from '../Custom/Button'
import DayPickerInput from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDatePicker } from '../Hook/useDatePicker'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AddNewInvoice = () => {
    const [invoice, setInvoice] = useState({
        period: '',
        unit: '',
        rate: '',
        invoiceDate: '',
        invoiceAmount: '',
        paymentDate: '',
        paymentAmount: ''
    })
    const history = useHistory();

    const [invoiceBind] = useDatePicker("dd-MM-yyyy", new Date());
    const [paymentBind] = useDatePicker("dd-MM-yyyy", new Date());

    function HandleChange(e) {
        e.persist();
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

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
            .catch((error) => console.log(error)
            );


    }

    function Reset() {
        setInvoice({
            period: '',
            unit: '',
            rate: '',
            invoiceDate: '',
            invoiceAmount: '',
            paymentDate: '',
            paymentAmount: ''
        })
    }

    return (
        <div className="invoiceContainer">

            <h1>Add New Invoice</h1>
            <hr />
            <div>
                <div className="divRow">
                    <div className="divColumn">
                        Period:
                    </div>
                    <div className="divColumn">
                        <select
                            name="period"
                            onChange={HandleChange}
                            value={invoice.period}
                        >
                            <option value="">--</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Unit:
                    </div>
                    <div className="divColumn">
                        <input type="text"
                            placeholder="Unit"
                            name="unit"
                            onChange={HandleChange}
                            value={invoice.unit}
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Rate:
                    </div>
                    <div className="divColumn">
                        <input
                            type="text"
                            placeholder="Rate"
                            name="rate"
                            onChange={HandleChange}
                            value={invoice.rate}
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Invoice Date:
                    </div>
                    <div className="divColumn">
                        <DayPickerInput
                            id="invoiceDate"
                            selected={invoice.invoiceDate}
                            onChange={e => setInvoice(
                                {
                                    ...invoice,
                                    invoiceDate: e
                                }
                            )}
                            {...invoiceBind}
                            name="invoiceDate"
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Invoice Amount:
                    </div>
                    <div className="divColumn">
                        <input
                            type="text"
                            placeholder="Invoice Amount"
                            id="invoiceAmount"
                            onChange={HandleChange}
                            name="invoiceAmount"
                            value={invoice.invoiceAmount}
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Payment Date:
                    </div>
                    <div className="divColumn">
                        <DayPickerInput
                            id="paymentDate"
                            selected={invoice.paymentDate}
                            onChange={e => setInvoice(
                                {
                                    ...invoice,
                                    paymentDate: e
                                }
                            )}
                            {...paymentBind}
                            name="paymentDate"
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Payment Amount:
                    </div>
                    <div className="divColumn">
                        <input
                            type="text"
                            placeholder="Payment Amount"
                            id="paymentAmount"
                            onChange={HandleChange}
                            name="paymentAmount"
                            value={invoice.paymentAmount}
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="buttonColumn"></div>
                    <div className="buttonColumn">
                        <Button text="Save" handleClick={e => { InvoicePost(e, invoice) }} />
                        <Button text="Cancel" handleClick={Reset} />
                    </div>
                </div>
            </div>
        </div>
    )
}
