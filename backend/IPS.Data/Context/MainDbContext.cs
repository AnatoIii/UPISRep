using IPS.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IPS.Data.Context
{
    public class MainDbContext
    {
        public MainDbContext(IDataSeeder dataSeeder)
        {
            Users.AddRange(dataSeeder.InitUsers());
        }

        public List<UserModel> Users { get; set; } = new List<UserModel>();
    }
}
