using IPS.Models.DataModels;

namespace IPS.Data.Repositrories.Abstractions
{
    public interface IUserRepository
    {
        UserModel GetUserByEmail(string email);
    }
}
