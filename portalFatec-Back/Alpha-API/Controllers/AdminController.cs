using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers

{
    [Route("api/[Controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public IBaseService<Admin> Service { get; }
        public IMapper Mapper { get; }
        public AdminController(IBaseService<Admin> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpGet] //Feito
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<AdminModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet ("{AdminId}")]
        public async Task<IActionResult>GetById(string AdminId)
        {
            var entity = await this.Service.GetById(AdminId);
            var results = this.Mapper.Map<AdminModel>(entity);
            return Ok(entity);
        }


       [HttpPost]
        public async Task<IActionResult> Post(AdminModel admin)
        {

            var admin1 = this.Mapper.Map<Admin>(admin);

            this.Service.Add(admin1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Admin/{admin.Id}", admin);
            return BadRequest();
        }

         [HttpDelete("{Id}")]
         public async Task<IActionResult>Delete(string Id) 
         {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();
            this.Service.Delete(entity);

            if (await this.Service.SaveChangesAsync())
            return Ok();
            return BadRequest();   
         }

         [HttpPut("{Id}")]
         public async Task<IActionResult> Put(string Id, AdminModel model)
         {
           var entity = await this.Service.GetById(Id);
            if (entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update (entity);
            if (await this.Service.SaveChangesAsync())
                return Created($"api/Admin/{model.Id}", this.Mapper.Map<AdminModel>(entity));
            return BadRequest();
         }  

       
    }
}