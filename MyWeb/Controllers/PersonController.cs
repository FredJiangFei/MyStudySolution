using System;
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
        
        
        [HttpGet]
        [Route("Person")]
        public Person GetPesronById(int id)
        {
            return _personService.GetPeopleById(id);
        }

        [HttpPost]
        [Route("Person")]
        public void Create(Person person)
        {
            _personService.Create(person);
        }

        [HttpPut]
        [Route("Person")]
        public void Edit(Person person)
        {
            _personService.Edit(person);
        }

        [HttpDelete]
        [Route("Person")]
        public void Delete(int id)
        {
            _personService.Delete(id);
        }
    }
}
