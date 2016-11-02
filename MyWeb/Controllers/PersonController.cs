using System;
using System.Collections.Generic;
using MyWebService.Interface;
using System.Web.Http;
using MyWeb.Domain.Domain;

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

        [HttpGet]
        [Route("Person")]
        public void Delete(int id)
        {
            _personService.Delete(id);
        }
    }
}
