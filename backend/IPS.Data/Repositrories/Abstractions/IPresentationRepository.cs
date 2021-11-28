using IPS.Models.DataModels;
using System.Collections.Generic;

namespace IPS.Data.Repositrories.Abstractions
{
    public interface IPresentationRepository
    {
        IEnumerable<Presentation> GetAll();
        Presentation CreateNew(Presentation presentation);
    }
}
