using Microsoft.EntityFrameworkCore;
using InvoiceAPI.Models;

namespace InvoiceAPI.Repositories
{
    public class AppDbContext:DbContext
    {
        public DbSet<Invoice> Invoice {get;set;}

        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder builder){

        }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Invoice>().Property(p=>p.Id).ValueGeneratedOnAdd();
        }
    }
}