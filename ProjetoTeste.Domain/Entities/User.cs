﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ProjetoTeste.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
