using ProjetoTeste.Data.Context;
using ProjetoTeste.Domain.Entities;
using ProjetoTeste.Domain.Interfaces;
using System.Collections.Generic;

namespace ProjetoTeste.Data.Repositories
{
    public class UserRepository: Repository<User>, IUserRepository
    {
        public UserRepository(ProjetoTesteContext context) : base(context) { }

        public IEnumerable<User> GetAll()
        {
            return Query(x => !x.IsDeleted);
        }
    }
}
