using Microsoft.AspNetCore.Mvc;
using WalkerAdvertising.API.Models;
using WalkerAdvertising.API.Repositories;

namespace WalkerAdvertising.API.Controllers
{
    [ApiController]
    [Route("api/leads")]
    public class LeadsController : Controller
    {
        private readonly LeadRepository _leadRepository;

        public LeadsController(LeadRepository leadRepository)
        {
            _leadRepository = leadRepository;
        }

        [HttpGet]
        public IActionResult GetAllLeads()
        {
            return Ok(_leadRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetLeadById(int id)
        {
            var lead = _leadRepository.GetById(id);
            if (lead == null)
            {
                return NotFound();
            }

            return Ok(lead);
        }

        [HttpPost]
        public IActionResult CreateLead([FromBody] Lead lead)
        {
            if (lead == null || string.IsNullOrEmpty(lead.Name) || string.IsNullOrEmpty(lead.PhoneNumber) || string.IsNullOrEmpty(lead.ZipCode))
            {
                return BadRequest("Name, PhoneNumber, and ZipCode are required ");
            }

            var newLead = _leadRepository.Add(lead);
            return CreatedAtAction(nameof(GetLeadById), new { id = newLead.Id }, newLead);
        }
    }
}