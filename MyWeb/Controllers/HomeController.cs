using System.Web.Mvc;
using MyWebService.Interface;

namespace MyWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPersonService _personService;

        public HomeController(IPersonService personService)
        {
            _personService = personService;
        }

        public ActionResult Index()
        {
            return View(_personService.GetPeopleList());
        }
    }
}
