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

namespace MyWeb.Intaller
{
    public class MyWebDependencyInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            //container.Kernel.ComponentRegistered += Kernel_ComponentRegistered;

            container.Register(
                Component.For<ISessionFactory>().UsingFactoryMethod(CreateNhSessionFactory).LifeStyle.Singleton,

                //  //Unitofwork interceptor
                //Component.For<NhUnitOfWorkInterceptor>().LifeStyle.Transient,

                //All repoistories
                Classes.FromAssembly(Assembly.GetAssembly(typeof(NhPersonRepository))).InSameNamespaceAs<NhPersonRepository>().WithService.DefaultInterfaces().LifestyleTransient(),

                //All services
                Classes.FromAssembly(Assembly.GetAssembly(typeof(PersonService))).InSameNamespaceAs<PersonService>().WithService.DefaultInterfaces().LifestyleTransient(),

                //All MVC controllers
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

        //void Kernel_ComponentRegistered(string key, Castle.MicroKernel.IHandler handler)
        //{
        //    //Intercept all methods of all repositories.
        //    if (UnitOfWorkHelper.IsRepositoryClass(handler.ComponentModel.Implementation))
        //    {
        //        handler.ComponentModel.Interceptors.Add(new InterceptorReference(typeof(NhUnitOfWorkInterceptor)));
        //    }

        //    //Intercept all methods of classes those have at least one method that has UnitOfWork attribute.
        //    foreach (var method in handler.ComponentModel.Implementation.GetMethods())
        //    {
        //        if (UnitOfWorkHelper.HasUnitOfWorkAttribute(method))
        //        {
        //            handler.ComponentModel.Interceptors.Add(new InterceptorReference(typeof(NhUnitOfWorkInterceptor)));
        //            return;
        //        }
        //    }
        //}
    }
}