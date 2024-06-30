namespace ECommerce.API.DTOs;

public class CreateProductRequestDto
{
    public required string Name { get; set; }
    public required string Description { get; set; }
    public int Price { get; set; }
}