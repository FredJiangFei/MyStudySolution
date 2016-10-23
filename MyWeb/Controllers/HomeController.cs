using System.Web.Mvc;
using MyWeb.Domain.Domain;
using MyWebService.Interface;

namespace MyWeb.Controllers
{
    public class HomeController : Controller
    {
        //private readonly IPersonService _personService;

        //public HomeController(IPersonService personService)
        //{
        //    _personService = personService;
        //}
      
        public ActionResult Index()
        {
            return View();
        }

        //public ActionResult Create(Person person)
        //{
        //    _personService.Create(person);
        //    return PartialPeoples();
        //}

        //public ActionResult Edit(Person person)
        //{
        //    _personService.Edit(person);
        //    return PartialPeoples();
        //}

        //public ActionResult Delete(int id)
        //{
        //    _personService.Delete(id);
        //    return PartialPeoples();
        //}

        //private PartialViewResult PartialPeoples()
        //{
        //    var persons = _personService.GetPeopleList();
        //    return PartialView("_Variants", persons);
        //}
    }
}
