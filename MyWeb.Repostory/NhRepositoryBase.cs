using System.Linq;
using MyWeb.Domain;
using NHibernate;
using NHibernate.Linq;

namespace MyWeb.Repostory
{
    public abstract class NhRepositoryBase<TEntity, TPrimaryKey> : IRepository<TEntity, TPrimaryKey> where TEntity : Entity<TPrimaryKey>
    {

        private ISession _session;
        private readonly ISessionFactory _sessionFactory;

        protected NhRepositoryBase(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
            OpenSession();
        }

        public ISession OpenSession()
        {
            _session = _sessionFactory.OpenSession();
            return _session;
        }


        //protected ISession Session
        //{
        //    get
        //    {
        //        return NhUnitOfWork.Current.Session;
        //    }
        //}


        public IQueryable<TEntity> GetAll()
        {
            return _session.Query<TEntity>();
        }

        public TEntity Get(TPrimaryKey key)
        {
            return _session.Get<TEntity>(key);
        }

        public void Insert(TEntity entity)
        {
            _session.Save(entity);
        }

        public void Update(TEntity entity)
        {
            _session.Update(entity);
        }

        public void Delete(TPrimaryKey id)
        {
            var obj = Get(id);
            _session.Delete(obj);
            _session.Flush();
        }
    }
}
