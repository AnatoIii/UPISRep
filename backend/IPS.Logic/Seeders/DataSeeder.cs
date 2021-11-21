using IPS.Data.Context;
using IPS.Logic.StaticHelpers;
using IPS.Models.DataModels;
using System;
using System.Collections.Generic;

namespace IPS.Logic.Seeders
{
    public class DataSeeder : IDataSeeder
    {
        public IEnumerable<UserModel> InitUsers()
        {
            yield return GenerateUser("testUser1@gmail.com", "12345678");
            yield return GenerateUser("testUser2@gmail.com", "12345678");
            yield return GenerateUser("testUser3@gmail.com", "12345678");
        }

        private UserModel GenerateUser(string email, string password)
        {
            var salt = PasswordHasher.GenerateSalt();
            var passwordHash = PasswordHasher.HashPassword(password, salt);

            return new UserModel
            {
                Id = Guid.NewGuid(),
                Email = email,
                FirstName = "First",
                LastName = "Last",
                PasswordHash = passwordHash,
                PasswordSalt = salt
            };
        }
    }
}
