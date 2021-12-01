using IPS.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IPS.Data.Context
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
        : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=master;Trusted_Connection=True;");
        }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<Presentation> Presentations { get; set; }
        public DbSet<PictureObject> PictureObjects { get; set; }
        public DbSet<TextBoxObject> TextBoxObject { get; set; }
        public DbSet<Slide> Slide { get; set; }
        public DbSet<GuidLink> GuidLinks { get; set; } 
    }
}
