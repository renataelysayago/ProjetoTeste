using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjetoTeste.Application.Interfaces;
using ProjetoTeste.Application.ViewModels;
using ProjetoTeste.Auth.Services;
using System.Security.Claims;

namespace ProjetoTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserService userService;

        public UsersController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(this.userService.Get());
        }

        [HttpPost, AllowAnonymous]
        public IActionResult Post(UserViewModel userViewModel)
        {
            return Ok(this.userService.Post(userViewModel));
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        { 
            return Ok(this.userService.GetById(id));
        }

        [HttpPut]
        public IActionResult Put(UserViewModel userViewModel)
        {
            return Ok(this.userService.Put(userViewModel));
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            var _userId = TokenService.GetValueFromClaim(HttpContext.User.Identity, ClaimTypes.NameIdentifier);

            return Ok(this.userService.Delete(_userId));
        }

        [HttpPost("authenticate"), AllowAnonymous]
        public IActionResult Authenticate(UserAuthenticateRquestViewModel userViewModel)
        {
            return Ok(this.userService.Authenticate(userViewModel));
        }
    }
}
    