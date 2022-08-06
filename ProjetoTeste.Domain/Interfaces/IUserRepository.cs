using ProjetoTeste.Domain.Entities;
using System.Collections.Generic;
using Template.Domain.Interfaces;

namespace ProjetoTeste.Domain.Interfaces
{
    public interface IUserRepository: IRepository<User>
    {
        IEnumerable<User> GetAll();
    }
}
