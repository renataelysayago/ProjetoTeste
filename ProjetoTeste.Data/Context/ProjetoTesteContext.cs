using Microsoft.EntityFrameworkCore;
using ProjetoTeste.Data.Extensions;
using ProjetoTeste.Data.Mappings;
using ProjetoTeste.Domain.Entities;

namespace ProjetoTeste.Data.Context
{
    public class ProjetoTesteContext : DbContext
    {
        public ProjetoTesteContext(DbContextOptions<ProjetoTesteContext> option): base(option) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserMap());

            modelBuilder.ApplyGlobalConfiguration();

            modelBuilder.SeedData();

            base.OnModelCreating(modelBuilder);
        }

    }
}
