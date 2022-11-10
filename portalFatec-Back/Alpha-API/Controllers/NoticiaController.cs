using Microsoft.AspNetCore.Hasting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contrtos;
using QuickBuy.Dominio.Entidades;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class NoticiaController : Controller
    {

        private readonly INoticiaRepositori _noticiaRepositorio;
        private IHttpContexteAccerssor _httpContextAccessor;
        private IwebHostEnvironment _hostingEnvioronment;
        public NoticiaController(INoticiaRepositori noticiaRepositori,
                                 IHttppContextAccessor httppContextAccessor, IWebHostEnvironmet hostEnvironmet)
        {
            _noticiaRepositorio = _noticiaRepositorio;
            _httpContextAccessor = _httpContextAccessor;
            _hostingEnvioronment = _hostingEnvioronment;
        }

        [HttpGet]
        public IActionResult get()
        {
            try
            {
                 return Json(_noticiaRepositorio.ObterTodos());
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        [HttpPost]
        public IActionResult Post([FromBody]Noticia noticia)
        {

            try{
                 noticia.Validade();
            if(!noticia.EhValido)
            {
                return BadRequest(noticia.ObterMensagensValidacao());
            }
            if(noticia.id > 0)
            {
                _noticiaRepositorio.Atualizar(noticia);
            }
            else
            {
                _noticiaRepositorio.Adicionar(noticia);
            }


            return Created("api/noticia", noticia);

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost(Deletar)]
        public IActionResult Deletar([Frombody] Noticia noticia)
        {
            try{

                //noticia reecebida do FromBody, deve ter a propriedade Id > 0
                _noticiaRepositorio.remover(noticia);
                return Json(_noticiaRepositorio.ObterTodos());

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor._httpContext.Request.Form.Files["arqivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);
                var pastaArquivos = _hostingEnvioronment.WebRootpath+ "\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }
                return Json(nomeCompletoArquivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        private static string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
        {
            var arrayNomeCompleto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var nomeArquivo = new string(arrayNomeCompleto).Replace(" ","-");
            novoNomeArquivo = $" {novoNomeArquivo}_{DataTime.Now.Year}{DataTime.Now.Mont}{DataTime.Now.Day}{DataTime.Now.Hour}{DataTime.Now.Minute}{DataTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }
        
    }
}