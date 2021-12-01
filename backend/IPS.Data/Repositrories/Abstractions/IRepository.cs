using System.Threading.Tasks;
using IPS.Models.DataModels;

namespace IPS.Data.Repositrories.Abstractions
{
    public interface IRepository<T,TId>
        where T: new()
    {
        Task<T> Get(TId id);
        Task Add(T entity);
    }
}