using Microsoft.Extensions.DependencyInjection;
using ProjetoTeste.Application.Interfaces;
using ProjetoTeste.Application.Services;
using System;

namespace ProjetoTeste.IoC
{
    public static class NativeInjector
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
        }
    }
}
