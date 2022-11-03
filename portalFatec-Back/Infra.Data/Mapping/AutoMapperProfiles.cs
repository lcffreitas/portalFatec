using AutoMapper;
using Domain.Entity;
using Domain.Model;

namespace Infra.Data.Mapping
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
           CreateMap<Admin, AdminModel>().ReverseMap();
        }
    }
}
