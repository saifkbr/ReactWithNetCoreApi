// import axios from 'axios'

// export async function InvoicePost(e, props) {
//     e.preventDefault()
//     const baseUri = process.env.REACT_APP_BASE_URI;
//     const corsUri = process.env.REACT_APP_CORS_URI;

//     const headers = new Headers();
//     headers.append("Accept", "application/json")
//     headers.append("Origin", corsUri)
//     headers.append("Access-Control-Allow-Origin", "*")

//     const data = {
//         'period': props.period,
//         'unit': props.unit,
//         'rate': props.rate,
//         'invoiceDate': props.invoiceDate,
//         'invoiceAmount': props.invoiceAmount,
//         'paymentDate': props.paymentDate,
//         'paymentAmount': props.paymentAmount
//     }

//     await axios.post(`${baseUri}/api/invoice`, data, { headers: headers, mode: 'cors' })
//         .catch((error) => console.log(error)
//         );
// }