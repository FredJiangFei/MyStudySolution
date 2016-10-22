using MyWeb.Domain.Domain;
using NHibernate;

namespace MyWeb.Repostory.Repository
{
    public interface IPersonRepository : IRepository<Person, int>
    {

    }

    public class NhPersonRepository : NhRepositoryBase<Person, int>, IPersonRepository
    {
        public NhPersonRepository(ISessionFactory sessionFactory) : base(sessionFactory)
        {
        }
    }
}
