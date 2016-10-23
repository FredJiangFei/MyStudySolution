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

        public PersonController()
        {
        }

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        [Route("Persons")]
        public List<Person> GetPesrons()
        {
            return  new List<Person>
            {
                new Person
                {
                    Id = 10,
                    BirthDay = DateTime.Now,
                    Name = "Fred",
                    Notes = "Hello World",
                    RecordDate = DateTime.Now.AddDays(-1)
                }
            };
            //return _personService.GetPeopleList();
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
            _personService.Create(person);
        }

        [HttpGet]
        [Route("Person")]
        public void Delete(int id)
        {
            _personService.Delete(id);
        }
    }
}
