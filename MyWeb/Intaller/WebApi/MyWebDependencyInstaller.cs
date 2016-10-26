using System.Configuration;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using MyWeb.Domain.Mapping;
using MyWeb.Repostory.Repository;
using MyWebService.Implement;
using NHibernate;

namespace MyWeb.Intaller.WebApi
{
    public class MyWebDependencyInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(
                Component.For<ISessionFactory>().UsingFactoryMethod(CreateNhSessionFactory).LifeStyle.Singleton,
                //All repoistories
                Classes.FromAssembly(Assembly.GetAssembly(typeof(NhPersonRepository))).InSameNamespaceAs<NhPersonRepository>().WithService.DefaultInterfaces().LifestyleTransient(),

                //All services
                Classes.FromAssembly(Assembly.GetAssembly(typeof(PersonService))).InSameNamespaceAs<PersonService>().WithService.DefaultInterfaces().LifestyleTransient(),

                //All MVC controllers
                Classes.FromThisAssembly().BasedOn<ApiController>().LifestyleTransient(),
                Classes.FromThisAssembly().BasedOn<IController>().LifestyleTransient()
            );
        }

        private static ISessionFactory CreateNhSessionFactory()
        {
            var connStr = ConfigurationManager.ConnectionStrings["PhoneBook"].ConnectionString;
            return Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2008.ConnectionString(connStr))
                .Mappings(m => m.FluentMappings.AddFromAssembly(Assembly.GetAssembly(typeof(PersonMap))))
                .BuildSessionFactory();
        }
    }
}