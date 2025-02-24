namespace WalkerAdvertising.API.Models
{
    public class Lead
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ZipCode { get; set; }
        public bool CanReceiveText { get; set; }
        public bool canReceiveEmail { get; set; }
        public string? Email { get; set; }

    }
}