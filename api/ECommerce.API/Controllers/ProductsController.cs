using ECommerce.API.DTOs;
using ECommerce.API.Interfaces;
using ECommerce.API.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.API.Controllers;

[Route("api/products")]
[ApiController]
public class ProductsController(IProductRepository productRepo) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await productRepo.GetAllProducts();
        
        return Ok(products);
    }
    
    [HttpGet("{productId:int}")]
    public async Task<IActionResult> GetProductById(int productId)
    {
        var product = await productRepo.GetProductById(productId);
        
        if (product is null)
        {
            return NotFound();
        }
        
        return Ok(product);
    }

    [HttpPost]
    public async Task<IActionResult> CreateProduct([FromBody] CreateProductRequestDto request)
    {
        var product = request.ToProductFromCreateDto();
        await productRepo.CreateProduct(product);
        
        return CreatedAtAction(nameof(GetProductById), new { productId = product.Id }, product);
    }
    
    [HttpPut("{productId:int}")]
    public async Task<IActionResult> UpdateProduct(int productId, [FromBody] UpdateProductRequestDto request)
    {
        var updatedProduct = await productRepo.UpdateProduct(productId, request);
        
        if (updatedProduct is null)
        {
            return NotFound();
        }
        
        return Ok(updatedProduct);
    }
}