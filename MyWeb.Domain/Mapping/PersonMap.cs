using FluentNHibernate.Mapping;
using MyWeb.Domain.Domain;

namespace MyWeb.Domain.Mapping
{
    public class PersonMap : ClassMap<Person>
    {
        public PersonMap()
        {
            Table("Person");
            Id(x => x.Id);
            Map(x => x.Name);
            Map(x => x.BirthDay);
            Map(x => x.Notes);
            Map(x => x.RecordDate);
        }
    }
}
