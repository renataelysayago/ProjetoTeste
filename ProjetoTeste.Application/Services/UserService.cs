﻿using ProjetoTeste.Application.Interfaces;
using ProjetoTeste.Application.ViewModels;
using ProjetoTeste.Domain.Entities;
using ProjetoTeste.Domain.Interfaces;
using System.Collections.Generic;

namespace ProjetoTeste.Application.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository userRepository;

        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public List<UserViewModel> Get()
        {
            List<UserViewModel> _usersViewModel = new List<UserViewModel>();
            IEnumerable<User> _users = this.userRepository.GetAll();
            foreach (User user in _users)
                _usersViewModel.Add(new UserViewModel { Id = user.Id, Email = user.Email, Name = user.Name });

            return _usersViewModel;
        }
    }
}