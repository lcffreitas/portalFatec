using Microsoft.EntityFrameworkCore;
using Domain.Entity;
namespace Infra.Data.Context
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
        public DbSet <Admin> Admin { get; set; }
    }
}