using ProjetoTeste.Application.ViewModels;
using System.Collections.Generic;

namespace ProjetoTeste.Application.Interfaces
{
    public interface IUserService
    {
        List<UserViewModel> Get();
        bool Post(UserViewModel userViewModel);
        UserViewModel GetById(string id);
        bool Put(UserViewModel userViewModel);
        bool Delete(string id);
    }
}
