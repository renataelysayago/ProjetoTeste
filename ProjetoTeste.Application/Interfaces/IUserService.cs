using ProjetoTeste.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjetoTeste.Application.Interfaces
{
    public interface IUserService
    {
        List<UserViewModel> Get();
        bool Post(UserViewModel userViewModel);
    }
}
