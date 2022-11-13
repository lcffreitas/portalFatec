namespace Domain.Entity
{
    public class Noticia
    {
        public string Id { get; set; }

        public Boolean Status { get; set; }

        public string Titulo { get; set; }

        public string Descricao { get; set; }

        public DateTime Data { get; set; }
    }
}