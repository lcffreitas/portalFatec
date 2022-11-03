namespace Domain.Entity
{
    public class Notic
    {
          public string Id { get; set; } = Guid.NewGuid().ToString();

         public string Name { get; set; } = "";

         public string Status { get; set; } = "";

         public string Titulo { get; set; } = "";

         public string descrição { get; set; } = "";

         public string Data { get; set; } = "";

         public string hora { get; set; } = "";

         public string URL_imagem { get; set; } = "";
    }
}