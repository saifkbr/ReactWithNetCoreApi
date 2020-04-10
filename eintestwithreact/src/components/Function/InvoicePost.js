import axios from 'axios'

export function InvoicePost(e, props) {
    console.log("pre-post")
    
    e.preventDefault()

    console.log("post-post")
    const apiUrl = "http://localhost:5000/api/invoice";
    const headers = new Headers();
    //headers.append("Content-Type","application/json")
    headers.append("Accept", "application/json")
    headers.append("Origin", "http://localhost:3000")
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

    axios.post(apiUrl, data, { headers: headers, mode: 'cors' })
        .catch((error) => console.log(error)
        );
}