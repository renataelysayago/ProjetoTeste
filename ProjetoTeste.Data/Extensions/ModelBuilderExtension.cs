using Microsoft.EntityFrameworkCore;
using ProjetoTeste.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjetoTeste.Data.Extensions
{
    public static class ModelBuilderExtension
    {
        public static ModelBuilder SeedData(this ModelBuilder builder)
        {
            builder.Entity<User>().HasData(
                new User { Id = Guid.Parse("18f0ad2d-e725-48f9-8020-d08f463bf5aa"), Name = "User Default", Email = "userdefault@gmail.com" }
                );

            return builder;
        }
    }
}
