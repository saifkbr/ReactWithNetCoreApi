import React from 'react'
import './Index.css'
export const InvoiceRow = (props) => {
    return (

        <div className="tRow">
            <div className="tCol">{props.invoice.period}</div>
            <div className="tCol">{props.invoice.rate}</div>
            <div className="tCol">{props.invoice.unit}</div>
            <div className="tCol">
                {new Intl.DateTimeFormat("en-GB",
                    {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    })
                    .format(new Date(props.invoice.invoiceDate))}
            </div>
            <div className="tCol">{props.invoice.invoiceAmount}</div>
            <div className="tCol">
                {new Intl.DateTimeFormat("en-GB",
                    {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    })
                    .format(new Date(props.invoice.paymentDate))}
            </div>
            <div className="tCol">{props.invoice.paymentAmount}</div>
        </div>
    );
}