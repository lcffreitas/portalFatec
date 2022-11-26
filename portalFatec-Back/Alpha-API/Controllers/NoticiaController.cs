using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class NoticiaController : Controller
    {
        public IBaseService<Noticia> _service { get; }
        public IMapper _mapper { get; }

        public NoticiaController(IBaseService<Noticia> service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(string id)
        {
            try
            {
                var noticia = _service.GetById(id);
                if (noticia!=null)                
                    return Ok(noticia);
                return NotFound();                
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var noticias = await _service.GetAll();
                var noticiasModel = _mapper.Map<IEnumerable<NoticiaModel>>(noticias);
                return Ok(noticiasModel);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        //recuperar as ultimas 3 noticias cadastradas
        [HttpGet]
        [Route("GetLatestNews")]
        public async Task<IActionResult> GetLatestNews()
        {
            try
            {
                var noticias = await _service.GetAll();
                noticias = noticias.OrderByDescending(n => n.Data).Take(3);
                var noticiasModel = _mapper.Map<IEnumerable<NoticiaModel>>(noticias);
                return Ok(noticiasModel);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] NoticiaModel noticiaModel)
        {
            try
            {
                var noticia = _mapper.Map<Noticia>(noticiaModel);
                noticia.Id = Guid.NewGuid().ToString();
                _service.Add(noticia);
                if (await _service.SaveChangesAsync())
                    return Ok(true);
                return BadRequest();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete([FromBody] string id)
        {
            try
            {
                var noticia = await _service.GetById(id);
                if (noticia!=null)
                {
                    _service.Delete(noticia);
                    await _service.SaveChangesAsync();
                    return NoContent();
                }
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(string id, [FromBody] NoticiaModel noticiaModel)
        {
            var noticia = await _service.GetById(id);
            if (noticia == null)                
                return NotFound();

            _mapper.Map(noticiaModel, noticia);
            _service.Update(noticia);
            if(await _service.SaveChangesAsync())
                return Ok();

            return BadRequest();
        }
    }
}