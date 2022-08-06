using ProjetoTeste.Domain.Entities;
using System.Collections.Generic;

namespace ProjetoTeste.Domain.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
    }
}
