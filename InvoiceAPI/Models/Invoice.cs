using System.ComponentModel.DataAnnotations;

namespace InvoiceAPI.Models
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        public string Period { get; set; }
    }
}