using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Castle.Windsor;
using Castle.Windsor.Installer;
using MyWeb.Intaller.Mvc;
using DependencyResolver = MyWeb.Intaller.WebApi.DependencyResolver;

namespace MyWeb
{
    public class WebApiApplication : HttpApplication
    {
        private WindsorContainer _container;
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            _container = new WindsorContainer();
            _container.Install(FromAssembly.This());
            GlobalConfiguration.Configuration.DependencyResolver = new DependencyResolver(_container.Kernel);

            var controllerFactory = new WindsorControllerFactory(_container.Kernel);
            ControllerBuilder.Current.SetControllerFactory(controllerFactory);
        }

        protected void Application_End()
        {
            if (_container != null)
            {
                _container.Dispose();
            }
        }

    }
}
