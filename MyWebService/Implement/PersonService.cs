using System;
using System.Collections.Generic;
using System.Linq;
using MyWeb.Domain.Domain;
using MyWeb.Repostory.Repository;
using MyWeb.Repostory.UnitOfWork;
using MyWebService.Interface;
using Phone.Repository.UnitOfWork;

namespace MyWebService.Implement
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;

        public PersonService(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        [UnitOfWork]
        public void Create(Person person)
        {
            person.BirthDay=DateTime.Now;
            _personRepository.Insert(person);
        }

        [UnitOfWork]
        public void Edit(Person person)
        {
            var p = _personRepository.Get(person.Id);
            p.Name = person.Name;
            p.BirthDay = person.BirthDay;
            p.Notes = person.Notes;
        }

        public List<Person> GetPeopleList()
        {
            return _personRepository.GetAll().ToList();
        }

        public Person GetPeopleById(int personId)
        {
            return _personRepository.Get(personId);
        }

        [UnitOfWork]
        public void Delete(int personId)
        {
            _personRepository.Delete(personId);
        }
    }
}
