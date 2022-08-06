using AutoMapper;
using ProjetoTeste.Application.ViewModels;
using ProjetoTeste.Domain.Entities;

namespace ProjetoTeste.Application.AutoMapper
{
    public class AutoMapperSetup:Profile
    {
        public AutoMapperSetup()
        {
            #region ViewModelToDomain

            CreateMap<UserViewModel, User>();

            #endregion

            #region DomainToViewModel

            CreateMap<User, UserViewModel>();

            #endregion
        }

    }
}
