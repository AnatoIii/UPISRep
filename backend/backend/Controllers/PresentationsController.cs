using IPS.Logic.Logic.Abstractions;
using IPS.Models.DataModels;
using IPS.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace IPS.Controllers
{
    [ApiController]
    [Route("presentations")]
    public class PresentationsController
    {
        private readonly IPresentationService _presentationService;

        public PresentationsController(IPresentationService presentationService)
        {
            _presentationService = presentationService;
        }

        [HttpGet]
        public IEnumerable<Presentation> GetUserPresentation()
        {
            return _presentationService.GetUserPresenations();
        }

        [HttpPost]
        public Presentation CreateNewPresentation([FromBody] NewPresentation newPresentation)
        {
            return _presentationService.CreatePresentation(newPresentation);
        }

        [HttpGet("{presentationId}/slides")]
        public IEnumerable<Slide> GetPresentationSlides(long presentationId)
        {
            return _presentationService.GetPresentationSlides(presentationId);
        }

        [HttpPost("{presentationId}/slide")]
        public Slide AddSlideToPresentation(long presentationId)
        {
            return _presentationService.AddSlideToPresentation(presentationId);
        }

        [HttpPost("{presentationId}/slide/{slideId}/delete")]
        public void RemoveSlideFromPresentation(long presentationId, long slideId)
        {
            _presentationService.RemoveSlideFromPresentation(presentationId, slideId);
        }
    }
}
