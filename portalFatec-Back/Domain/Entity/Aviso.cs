namespace Domain.Entity
{
    public class Aviso
    {
         public string Id { get; set; } = Guid.NewGuid().ToString();

         public string Name { get; set; } = "";

         public string descrição { get; set; } = "";

         public string Data { get; set; } = "";
 
    }
}