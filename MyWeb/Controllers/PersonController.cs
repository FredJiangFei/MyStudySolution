using System.Web.Http;
using MyWeb.Domain.Domain;
using MyWebService.Interface;

namespace MyWeb.Controllers
{
    [RoutePrefix("api")]
    public class PersonController : ApiController
    {
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        [Route("Persons")]
        public Person[] GetPesrons()
        {
            return _personService.GetPeopleList().ToArray();
        }

        [HttpPost]
        [Route("Persons")]
        public void Create(Person person)
        {
            _personService.Create(person);
        }

        [HttpPut]
        [Route("Persons")]
        public void Edit(Person person)
        {
            _personService.Edit(person);
        }

        [HttpDelete]
        [Route("Persons")]
        public void Delete(int id)
        {
            _personService.Delete(id);
        }
    }
}
