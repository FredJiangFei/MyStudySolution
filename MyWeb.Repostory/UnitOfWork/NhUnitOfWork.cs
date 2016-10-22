using NHibernate;
using System;

namespace Phone.Repository.UnitOfWork
{
    public class NhUnitOfWork : IUnitOfWork
    {
        private readonly ISessionFactory _sessionFactory;

        private ITransaction _transaction;
        public ISession Session { get; private set; }

        public NhUnitOfWork(ISessionFactory sessionFactory)
        {
            _sessionFactory = sessionFactory;
        }

        [ThreadStatic]
        private static NhUnitOfWork _current;

        public static NhUnitOfWork Current
        {
            get { return _current; }
            set { _current = value; }
        }
      
        public void BeginTransaction()
        {
            Session = _sessionFactory.OpenSession();
            _transaction = Session.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }
            finally
            {
                Session.Close();
            }
        }

        public void Rollback()
        {
            try
            {
                _transaction.Rollback();
            }
            finally
            {
                Session.Close();
            }
        }
    }
}
