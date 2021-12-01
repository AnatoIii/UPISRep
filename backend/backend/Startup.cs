using IPS.Data.Context;
using IPS.Data.Repositrories;
using IPS.Data.Repositrories.Abstractions;
using IPS.Logic.Logic;
using IPS.Logic.Logic.Abstractions;
using IPS.Logic.Seeders;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IPS.Models.DataModels;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "backend", Version = "v1" });
            });

            services.AddTransient<IAuthLogic, AuthLogic>();
            services.AddTransient<IDataSeeder, DataSeeder>();

            services.AddTransient(typeof(IRepository<GuidLink,string>), typeof(UnicLinkGeneratorRepository));

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IPresentationRepository, PresentationRepository>();
            services.AddTransient<IPresentationService, PresentationService>();

            services.AddCors(options =>
            {
                options.AddPolicy(name: "MainPolicy",
                                  builder =>
                                  {
                                      builder.AllowAnyHeader().AllowAnyHeader().AllowAnyOrigin();
                                  });
            });
           services.AddDbContext<MainDbContext>(options => options.UseSqlServer(@"Server=localhost;Database=master;Trusted_Connection=True;", b => b.MigrationsAssembly("IPS")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "backend v1"));
            }

            app.UseHttpsRedirection();

            app.UseCors("MainPolicy");
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
