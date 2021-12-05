using IPS.Models.DataModels;
using IPS.Models.DTOs;
using System.Collections.Generic;

namespace IPS.Logic.Logic.Abstractions
{
    public interface IPresentationService
    {
        IEnumerable<Presentation> GetUserPresenations();
        Presentation CreatePresentation(NewPresentation newPresentation);
        IEnumerable<Slide> GetPresentationSlides(long presentationId);
        Slide AddSlideToPresentation(long presentationId);
        void RemoveSlideFromPresentation(long presentationId, long slideId);
    }
}
