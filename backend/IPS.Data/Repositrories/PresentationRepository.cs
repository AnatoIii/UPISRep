using IPS.Data.Context;
using IPS.Data.Repositrories.Abstractions;
using IPS.Models.DataModels;
using System.Collections.Generic;

namespace IPS.Data.Repositrories
{
    public class PresentationRepository : IPresentationRepository
    {
        private readonly MainDbContext _dbContext;

        public PresentationRepository(MainDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Presentation CreateNew(Presentation presentation)
        {
            var pres = _dbContext.Presentations.Add(presentation);
            return pres.Entity;
        }

        public IEnumerable<Presentation> GetAll()
        {
            return _dbContext.Presentations;
        }
    }
}
