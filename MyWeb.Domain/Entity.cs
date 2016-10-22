
namespace MyWeb.Domain
{
    public interface IEntity<T>
    {
        T Id { get; set; }
    }

    public class Entity<T> : IEntity<T>
    {
        public virtual T Id { get; set; }
    }
}
