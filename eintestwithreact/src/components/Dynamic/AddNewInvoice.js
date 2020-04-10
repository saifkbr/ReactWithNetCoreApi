import React, { useState } from 'react'
import './AddNewInvoice.css'
import { Button } from '../Custom/Button'
import DayPickerInput from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDatePicker } from '../Hook/useDatePicker'
import { InvoicePost } from '../Function/InvoicePost'

export const AddNewInvoice = () => {
    const [invoice, setInvoice] = useState({
        period: '',
        unit: 0,
        rate: 0,
        invoiceDate: new Date(),
        invoiceAmount: 0,
        paymentDate: new Date(),
        paymentAmount: 0
    })
    const [invoiceDate, invoiceBind] = useDatePicker("dd-MM-yyyy", new Date());
    const [paymentDate, paymentBind] = useDatePicker("dd-MM-yyyy", new Date());

    function HandleChange(e) {
        e.persist();
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
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
                    <div className="divColumn"
                        name="period"
                        onChange={HandleChange}
                        value={invoice.period}
                    >
                        <select>
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
                            name="invoiceAmount"
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
                            name="paymentAmount"
                            onChange={HandleChange}
                            name="paymentAmount"
                        />
                    </div>
                </div>
                <div className="divRow">
                    <div className="buttonColumn"></div>
                    <div className="buttonColumn">
                        <Button text="Save" onClick={InvoicePost(invoice)} />
                        <Button text="Cancel" />
                    </div>
                </div>
            </div>
        </div>
    )
}