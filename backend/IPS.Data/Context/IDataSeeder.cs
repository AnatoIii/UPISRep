using IPS.Models.DataModels;
using System.Collections.Generic;

namespace IPS.Data.Context
{
    public interface IDataSeeder
    {
        public IEnumerable<UserModel> InitUsers();
    }
}
