using Microsoft.Extensions.DependencyInjection;
using ProjetoTeste.Application.Interfaces;
using ProjetoTeste.Application.Services;
using ProjetoTeste.Data.Repositories;
using ProjetoTeste.Domain.Interfaces;

namespace ProjetoTeste.IoC
{
    public static class NativeInjector
    {
        public static void RegisterServices(IServiceCollection services)
        {
            #region Services

            services.AddScoped<IUserService, UserService>();

            #endregion

            #region Repositories

            services.AddScoped<IUserRepository, UserRepository>();

            #endregion
        }
    }
}
