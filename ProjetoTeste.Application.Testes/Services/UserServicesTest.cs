using AutoMapper;
using Moq;
using ProjetoTeste.Application.AutoMapper;
using ProjetoTeste.Application.Services;
using ProjetoTeste.Application.ViewModels;
using ProjetoTeste.Domain.Entities;
using ProjetoTeste.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Xunit;

namespace ProjetoTeste.Application.Testes.Services
{
    public class UserServicesTest
    {
        private UserService userService;

        public UserServicesTest()
        {
            userService = new UserService(new Mock<IUserRepository>().Object, new Mock<IMapper>().Object);            
        }

        #region Validação do envio de Id

        [Fact]
        public void Post_SendingValidId()
        {
            var exception = Assert.Throws<Exception>(() => userService.Post(new ViewModels.UserViewModel() { Id = Guid.NewGuid() }));

            Assert.Equal("O id do usuário precisa ser vazio", exception.Message);
        }

        [Fact]
        public void GetById_SendingEmptyId()
        {
            var exception = Assert.Throws<Exception>(() => userService.GetById(""));

            Assert.Equal("O id do usuário não é válido", exception.Message);
        }

        [Fact]
        public void Put_SendingEmptyId()
        {
            var exception = Assert.Throws<Exception>(() => userService.Put(new ViewModels.UserViewModel()));

            Assert.Equal("O id é inválido", exception.Message);
        }

        [Fact]
        public void Delete_SendingEmptyId()
        {
            var exception = Assert.Throws<Exception>(() => userService.Delete(""));

            Assert.Equal("O id do usuário não é válido", exception.Message);
        }

        [Fact]
        public void Authenticate_SendingEmptyValues()
        {
            var exception = Assert.Throws<Exception>(() => userService.Authenticate(new ViewModels.UserAuthenticateRquestViewModel()));

            Assert.Equal("O Email/Senha deve ser informado" , exception.Message);
        }

        #endregion

        #region ValidatingCorrectObject

        [Fact]
        public void Post_SendingValidObject()
        {
            var result = userService.Post(new UserViewModel { Name = "Renata Ely", Email = "renataely@gmail.com" });
            Assert.True(result);
        }

        [Fact]
        public void Get_ValidatingObject()
        {
            //Criando a lista com um objeto para que seja retornado pelo repository
            List<User> _users = new List<User>();
            _users.Add(new User { Id = Guid.NewGuid(), Name = "Renata Ely", Email = "renataely@gmail.com", DateCreated = DateTime.Now });
            //Criando um objeto mock do UserRepository e configurando para retornar a lista criada anteriormente se chamar o método GetAll()
            var _userRepository = new Mock<IUserRepository>();
            _userRepository.Setup(x => x.GetAll()).Returns(_users);
            //Criando um objeto mock do AutoMapper para que possamos converter o retorno para o tipo List<UserViewModel>()
            var _autoMapperProfile = new AutoMapperSetup();
            var _configuration = new MapperConfiguration(x => x.AddProfile(_autoMapperProfile));
            IMapper _mapper = new Mapper(_configuration);
            //Istanciando nossa classe de serviço novamente com os novos objetos mocks que criamos
            userService = new UserService(_userRepository.Object, _mapper);
            //Obtendo os valores do método Get para validar se vai retornar o objeto criado acima.
            var result = userService.Get();
            //Validando se o retorno contém uma lista com objetos.
            Assert.True(result.Count > 0);
        }

        #endregion

        #region ValidatingRequiredFields

        [Fact]
        public void Post_SendingInvalidObject()
        {
            var exception = Assert.Throws<ValidationException>(() => userService.Post(new UserViewModel { Name = "Renata Ely" }));
            Assert.Equal("The Email field is required.", exception.Message);
        }

        #endregion
    }
}
