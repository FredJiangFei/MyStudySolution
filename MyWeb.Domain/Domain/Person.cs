using System;

namespace MyWeb.Domain.Domain
{
    public class Person : Entity<int>
    {
        public Person()
        {
            Notes = "";
            RecordDate = DateTime.Now;
        }

        public virtual string Name { get; set; }

        public virtual DateTime BirthDay { get; set; }

        public virtual string Notes { get; set; }

        public virtual DateTime RecordDate { get; set; }
    }
}
