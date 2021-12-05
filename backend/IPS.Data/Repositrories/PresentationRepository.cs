using IPS.Data.Context;
using IPS.Data.Repositrories.Abstractions;
using IPS.Models.DataModels;
using System.Collections.Generic;
using System.Linq;

namespace IPS.Data.Repositrories
{
    public class PresentationRepository : IPresentationRepository
    {
        private readonly MainDbContext _dbContext;

        public PresentationRepository(MainDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Slide AddSlideToPresentation(long presentationId)
        {
            var slide = _dbContext.Slide.Add(new Slide { PresentationId = presentationId });
            _dbContext.SaveChanges();
            return slide.Entity;
        }

        public Presentation CreateNew(Presentation presentation)
        {
            var pres = _dbContext.Presentations.Add(presentation);
            _dbContext.SaveChanges();
            return pres.Entity;
        }

        public IEnumerable<Presentation> GetAll()
        {
            return _dbContext.Presentations;
        }

        public IEnumerable<Slide> GetPresentationSlides(long presentationId)
        {
            return _dbContext.Slide.Where(el => el.PresentationId == presentationId);
        }

        public void RemoveSlideFromPresentation(long presentationId, long slideId)
        {
            var slide = _dbContext.Slide.FirstOrDefault(el => el.PresentationId == presentationId && el.Id == slideId);
            if (slide != null)
            {
                _dbContext.Remove(slide);
                _dbContext.SaveChanges();
            }
        }
    }
}
