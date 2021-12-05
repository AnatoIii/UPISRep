using IPS.Data.Repositrories.Abstractions;
using IPS.Logic.Logic.Abstractions;
using IPS.Models.DataModels;
using IPS.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IPS.Logic.Logic
{
    public class PresentationService : IPresentationService
    {
        private readonly IPresentationRepository _presentationRepository;

        public PresentationService(IPresentationRepository presentationRepository)
        {
            _presentationRepository = presentationRepository;
        }

        public Slide AddSlideToPresentation(long presentationId)
        {
            var pres = _presentationRepository.GetAll().ToList();

            return _presentationRepository.AddSlideToPresentation(presentationId);
        }

        public Presentation CreatePresentation(NewPresentation newPresentation)
        {
            var presentation = new Presentation
            {
                Name = newPresentation.Name,
                ImageLink = newPresentation.ImageLink
            };

            return _presentationRepository.CreateNew(presentation);
        }

        public IEnumerable<Slide> GetPresentationSlides(long presentationId)
        {
            return _presentationRepository.GetPresentationSlides(presentationId);
        }

        public IEnumerable<Presentation> GetUserPresenations()
        {
            return _presentationRepository.GetAll();
        }

        public void RemoveSlideFromPresentation(long presentationId, long slideId)
        {
            _presentationRepository.RemoveSlideFromPresentation(presentationId, slideId);
        }
    }
}
