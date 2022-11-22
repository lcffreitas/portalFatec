namespace Domain.Model
{
    public class NoticiaModel
    {
        public string Id { get; set; }

        public Boolean Status { get; set; }

        public string Titulo { get; set; }

        public string Descricao { get; set; }

        public DateTime Data { get; set; }
    }
}
