using System.Collections.Generic;
using MyWeb.Domain.Domain;

namespace MyWebService.Interface
{
    public interface IPersonService
    {
        List<Person> GetPeopleList();

        void Create(Person person);

        void Edit(Person person);

        void Delete(int personId);
    }
}
