using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceAPI.interfaces;
using InvoiceAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InvoiceAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly ILogger<InvoiceController> _logger;
        private readonly IRepository _repository;

        public InvoiceController(ILogger<InvoiceController> logger, IRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Invoice>> GetAsync()
        {
            return await _repository.Invoices();
        }

        [HttpGet("GetAsync/{id}")]
        [ActionName("GetAsync")]
        public async Task<Invoice> GetAsync(int id)
        {
            var invoices = await _repository.Invoices();
            return invoices.SingleOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult<Invoice>> Post([FromBody] Invoice invoice)
        {
            await _repository.AddInvoice(invoice);
            return CreatedAtAction(nameof(GetAsync), new { id = invoice.Id }, invoice);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var invoice = await GetAsync(id);
            if (invoice == null)
                return BadRequest();
            else
                await _repository.DeleteInvoice(invoice);
            return NoContent();
        }


    }
}