
using InvoiceAPI.interfaces;
using InvoiceAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InvoiceAPI.Repositories
{
    public class SqliteRepository : IRepository
    {
        private readonly AppDbContext _appDbContext;

        public SqliteRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task AddInvoice(Invoice invoice)
        {
            await _appDbContext.Invoice.AddAsync(invoice);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task DeleteInvoice(Invoice invoice)
        {
            _appDbContext.Invoice.Remove(invoice);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Invoice>> Invoices()
        {
            return await _appDbContext.Invoice.ToListAsync();


        }
    }
}