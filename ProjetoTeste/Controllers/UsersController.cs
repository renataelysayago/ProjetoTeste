using Microsoft.AspNetCore.Mvc;
using ProjetoTeste.Application.Interfaces;

namespace ProjetoTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
            this.userService.Test();
            return Ok("Ok");
        }
    }
}
    