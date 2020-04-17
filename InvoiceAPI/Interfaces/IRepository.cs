using System.Collections.Generic;
using System.Threading.Tasks;
using InvoiceAPI.Models;

namespace InvoiceAPI.interfaces
{
    public interface IRepository
    {
        Task<IEnumerable<Invoice>> Invoices();
        Task AddInvoice(Invoice invoice);
        Task DeleteInvoice(Invoice invoice);
    }
}