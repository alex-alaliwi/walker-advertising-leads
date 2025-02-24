using WalkerAdvertising.API.Models;

namespace WalkerAdvertising.API.Repositories
{
    public class LeadRepository
    {
        private readonly List<Lead> _leads = new List<Lead>();
        private int _nextId = 1;

        public List<Lead> GetAll() => _leads;

        public Lead? GetById(int id) => _leads.FirstOrDefault(l => l.Id == id);

        public Lead Add(Lead lead)
        {
            lead.Id = _nextId++;
            _leads.Add(lead);
            return lead;
        }
    }
}