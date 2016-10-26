using System;
using System.Configuration;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using MyWeb.Domain.Domain;
using MyWeb.Domain.Mapping;
using MyWeb.Repostory.Repository;
using MyWebService.Implement;
using NHibernate;
using NHibernate.Tool.hbm2ddl;

namespace MyWeb.Intaller
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
            var mappings = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2008.ConnectionString(connStr))
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<PersonMap>());

            var configuration = mappings.BuildConfiguration();
            GenerateDatabase(configuration);

            return mappings.BuildSessionFactory();
        }

        private static ISessionFactory _sessionFactory;
        private static void GenerateDatabase(NHibernate.Cfg.Configuration configuration)
        {
            var exporter = new SchemaExport(configuration);
            exporter.Execute(true, true, false);
            _sessionFactory = configuration.BuildSessionFactory();

            AddSeeds();
        }

        private static void AddSeeds()
        {
            var p = new Person
            {
                Name = "Fred",
                BirthDay = new DateTime(1989, 2, 17),
                Notes = "Handsome",
                RecordDate = DateTime.Now
            };

            using (ISession session = _sessionFactory.OpenSession())
            {
                session.Save(p);
            }
        }
    }
}