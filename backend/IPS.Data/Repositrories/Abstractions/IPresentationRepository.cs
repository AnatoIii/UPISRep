using IPS.Models.DataModels;
using System.Collections.Generic;

namespace IPS.Data.Repositrories.Abstractions
{
    public interface IPresentationRepository
    {
        IEnumerable<Presentation> GetAll();
        Presentation CreateNew(Presentation presentation);
        IEnumerable<Slide> GetPresentationSlides(long presentationId);
        Slide AddSlideToPresentation(long presentationId);
        void RemoveSlideFromPresentation(long presentationId, long slideId);
    }
}
