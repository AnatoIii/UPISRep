﻿using IPS.Logic.Logic.Abstractions;
using IPS.Models.DTOs.Request;
using Microsoft.AspNetCore.Mvc;

namespace IPS.Controllers
{
    [ApiController]
    [Route("user")]
    public class AuthController : Controller
    {
        private readonly IAuthLogic _authLogic;
        public AuthController(IAuthLogic authLogic)
        {
            _authLogic = authLogic;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var loginStatus = _authLogic.LoginUser(loginRequest);
            if (loginStatus.Exception != null)
            {
                return Unauthorized(loginStatus.Exception);
            }

            return Ok(loginStatus.Token);
        }
    }
}
