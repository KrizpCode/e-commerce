using ECommerce.API.DTOs;
using ECommerce.API.Models;

namespace ECommerce.API.Mappers;

public static class ProductMappers
{
    public static Product ToProductFromCreateDto(this CreateProductRequestDto productDto)
    {
        return new Product
        {
            Name = productDto.Name,
            Description = productDto.Description,
            Price = productDto.Price
        };
    }
}