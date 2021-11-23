using IPS.Data.Context;
using IPS.Data.Repositrories.Abstractions;
using IPS.Models.DataModels;
using System.Linq;

namespace IPS.Data.Repositrories
{
    public class UserRepository : IUserRepository
    {
        private readonly MainDbContext _dbContext;

        public UserRepository(MainDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public UserModel GetUserByEmail(string email)
        {
            return _dbContext.Users.FirstOrDefault(el => el.Email == email);
        }

        public void AddUser(UserModel user)
        {
            _dbContext.Users.Add(user);
        }
    }
}
