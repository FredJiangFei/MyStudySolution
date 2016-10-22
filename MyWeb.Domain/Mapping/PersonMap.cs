using FluentNHibernate.Mapping;
using MyWeb.Domain.Domain;

namespace MyWeb.Domain.Mapping
{
    public class PersonMap : ClassMap<Person>
    {
        public PersonMap()
        {
            Table("People");
            Id(x => x.Id).Column("PersonId");
            Map(x => x.CityId);
            Map(x => x.Name);
            Map(x => x.BirthDay);
            Map(x => x.Notes);
            Map(x => x.RecordDate);
        }
    }
}
