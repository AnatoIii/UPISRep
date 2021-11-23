using IPS.Data.Repositrories.Abstractions;
using IPS.Logic.Logic.Abstractions;
using IPS.Logic.StaticHelpers;
using IPS.Models.DataModels;
using IPS.Models.DTOs.Request;
using IPS.Models.DTOs.Response;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace IPS.Logic.Logic
{
    public class AuthLogic : IAuthLogic
    {
        private const int SESSION_TIME_IN_HOURS  = 5;
        private const string SECRET_KEY = "ThisIsVerySecretPenguin";
        private const string ISSUER = "IPS_SERVICE";

        private readonly IUserRepository _userRepository;

        public AuthLogic(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public LoginResponse LoginUser(LoginRequest loginRequest)
        {
            var user = _userRepository.GetUserByEmail(loginRequest.Email);
            if (user == null)
            {
                return new LoginResponse { Exception = "User with provided email and password can't be authenrificated in system" };
            }

            var hashedPassword = PasswordHasher.HashPassword(loginRequest.Password, user.PasswordSalt);
            
            if (hashedPassword != user.PasswordHash)
            {
                return new LoginResponse { Exception = "User with provided email and password can't be authenrificated in system" };
            }

            var token = GenerateToken(user);

            return new LoginResponse
            {
                Token = token
            };
        }

        public RegisterResponse RegisterUser(RegisterRequest registerRequest)
        {
            var user = _userRepository.GetUserByEmail(registerRequest.Email);
            if (user != null)
            {
                return new RegisterResponse
                {
                    Exception = "User with provided email already exist"
                };
            }
            user = new UserModel
            {
                Id = Guid.NewGuid(),
                Email = registerRequest.Email,
                FirstName = registerRequest.FirstName,
                LastName = registerRequest.LastName,
                PasswordSalt = registerRequest.Password,
                PasswordHash = PasswordHasher.HashPassword(registerRequest.Password, registerRequest.Password)
            };
            _userRepository.AddUser(user);
            var token = GenerateToken(user);

            return new RegisterResponse
            {
                Token = token
            };
        }

        private string GenerateToken(UserModel user)
        {
            var claims = new[] {
                new Claim(ClaimTypes.Name, $"{user.FirstName} {user.LastName}"),
                new Claim(JwtRegisteredClaimNames.Sid, user.Id.ToString()),

                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),

                new Claim(JwtRegisteredClaimNames.Exp, DateTime.UtcNow.Add(new TimeSpan(SESSION_TIME_IN_HOURS, 0, 0)).ToString())
               };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SECRET_KEY));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(ISSUER,
              ISSUER,
              claims,
              expires: DateTime.UtcNow.Add(new TimeSpan(SESSION_TIME_IN_HOURS, 0, 0)),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
