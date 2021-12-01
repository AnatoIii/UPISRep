using IPS.Data.Context;
using IPS.Data.Repositrories.Abstractions;
using IPS.Models.DataModels;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IPS.Data.Repositrories
{
    public class UnicLinkGeneratorRepository : IRepository<GuidLink,string>
    {
        private readonly MainDbContext _dbContext;

        public UnicLinkGeneratorRepository(MainDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Add(GuidLink entity)
        {
            _dbContext.Add<GuidLink>(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<GuidLink> Get(string id)
        {
            return await _dbContext.GuidLinks.FirstOrDefaultAsync(x=>x.GUID == id);
        }
    }
}