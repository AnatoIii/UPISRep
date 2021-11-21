using IPS.Models.DTOs.Request;
using IPS.Models.DTOs.Response;

namespace IPS.Logic.Logic.Abstractions
{
    public interface IAuthLogic
    {
        LoginResponse LoginUser(LoginRequest loginRequest);
    }
}
