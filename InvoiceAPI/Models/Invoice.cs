using System.ComponentModel.DataAnnotations;
using System;

namespace InvoiceAPI.Models
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        public string Period { get; set; }
        public double Unit {get;set;}
        public DateTime InvoiceDate {get;set;}
        public double InvoiceAmount {get;set;}
        public DateTime PaymentDate {get;set;}
        public double PaymentAmount {get;set;}

    }
}