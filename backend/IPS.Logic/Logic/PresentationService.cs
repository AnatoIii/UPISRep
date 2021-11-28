using IPS.Data.Repositrories.Abstractions;
using IPS.Logic.Logic.Abstractions;
using IPS.Models.DataModels;
using IPS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace IPS.Logic.Logic
{
    public class PresentationService : IPresentationService
    {
        private readonly IPresentationRepository _presentationRepository;

        public PresentationService(IPresentationRepository presentationRepository)
        {
            _presentationRepository = presentationRepository;
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

        public IEnumerable<Presentation> GetUserPresenations()
        {
            return _presentationRepository.GetAll();
        }
    }
}
