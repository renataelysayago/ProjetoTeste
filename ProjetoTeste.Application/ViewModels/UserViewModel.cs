using System;
using System.ComponentModel.DataAnnotations;

namespace ProjetoTeste.Application.ViewModels
{
    public class UserViewModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
