using IPS.Data.Repositrories;
using IPS.Data.Repositrories.Abstractions;
using IPS.Models.DataModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]    
    [Route("[controller]")]
    public class LinkGeneratorController : Controller
    {
        private IRepository<GuidLink,string> _repository;
        public LinkGeneratorController(IRepository<GuidLink,string> repo)
        {
            _repository = repo;
        }

        [HttpGet]
        public async Task<GuidLink> Get()
        {
            var newGuid = new Guid().ToString();
            while(await _repository.Get(newGuid) !=null)
                newGuid = new Guid().ToString();
            var reservedGuid = new GuidLink{ GUID = newGuid, CreationDateTime = DateTime.UtcNow};
            await _repository.Add(reservedGuid);

            return reservedGuid;
        }

    }
}