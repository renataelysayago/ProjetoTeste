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

            return _usersViewModel;
        }

        public bool Post(UserViewModel userViewModel)
        {
            User _user = mapper.Map<User>(userViewModel);

            this.userRepository.Create(_user);
            return true;
        }

        public UserViewModel GetById(string id)
        {
            if (!Guid.TryParse(id, out Guid userId))
                throw new Exception("Id do usuário não é válido");

            User _user = this.userRepository.Find(x => x.Id == userId && !x.IsDeleted);
            if (_user == null)
                throw new Exception("Usuário não encontrado");

            return mapper.Map<UserViewModel>(_user);
        }

        public bool Put(UserViewModel userViewModel)
        {
            User _user = this.userRepository.Find(x => x.Id == userViewModel.Id && !x.IsDeleted);
            if (_user == null)
                throw new Exception("Usuário não encontrado");

            _user = mapper.Map<User>(userViewModel);
            this.userRepository.Update(_user);

            return true;
        }
    }
}
