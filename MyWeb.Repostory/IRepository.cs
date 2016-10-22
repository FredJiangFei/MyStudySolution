using System.Linq;
using MyWeb.Domain;

namespace MyWeb.Repostory
{
    public interface IRepository
    {

    }

    public interface IRepository<TEntity, T> : IRepository where TEntity : Entity<T>
    {
        IQueryable<TEntity> GetAll();

        TEntity Get(T key);

        void Insert(TEntity entity);

        void Update(TEntity entity);

        void Delete(T id);
    }
}
