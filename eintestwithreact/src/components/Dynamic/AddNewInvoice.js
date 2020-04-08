import React from 'react'
import './AddNewInvoice.css'
import {Button} from '../Custom/Button'

export const AddNewInvoice = () => {
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
                        <input type="text" placeholder="Unit" />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Rate:
                    </div>
                    <div className="divColumn">
                        <input type="text" placeholder="Rate" />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Invoice Date:
                    </div>
                    <div className="divColumn">
                        <input type="text" placeholder="Invoice Date" />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Invoice Amount:
                    </div>
                    <div className="divColumn">
                        <input type="text" placeholder="Invoice Amount" />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Payment Date:
                    </div>
                    <div className="divColumn">
                        <input type="text" placeholder="Payment Date" />
                    </div>
                </div>
                <div className="divRow">
                    <div className="divColumn">
                        Payment Amount:
                    </div>
                    <div className="divColumn">
                        <input type="text" placeholder="Payment Amount" />
                    </div>
                </div>
                <div className="divRow">
                <div className="buttonColumn"></div>
                    <div className="buttonColumn">
                        <Button text="Save" />
                        <Button text="Cancel" />
                    </div>
                </div>
            </div>
        </div>
    )
}