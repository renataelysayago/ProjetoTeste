using AutoMapper;
using ProjetoTeste.Application.Interfaces;
using ProjetoTeste.Application.ViewModels;
using ProjetoTeste.Domain.Entities;
using ProjetoTeste.Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace ProjetoTeste.Application.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        public List<UserViewModel> Get()
        {
            List<UserViewModel> _usersViewModel = new List<UserViewModel>();
            IEnumerable<Domain.Entities.User> _users = this.userRepository.GetAll();

            _usersViewModel = mapper.Map<List<UserViewModel>>(_users);

            //foreach (Domain.Entities.User user in _users)
            //    _usersViewModel.Add

           // _usersViewModel.Add(new UserViewModel { Id = user.Id, Email = user.Email, Name = user.Name });

            return _usersViewModel;
        }

        public bool Post(UserViewModel userViewModel)
        {
            //User _user = new Domain.Entities.User
            //{
            //    Id = Guid.NewGuid(),
            //    Email = userViewModel.Email,
            //    Name = userViewModel.Name
            //};

            User _user = mapper.Map<User>(userViewModel);

            this.userRepository.Create(_user);
            return true;
        }
    }
}
