using ECommerce.API.DTOs;
using ECommerce.API.Extensions;
using ECommerce.API.Interfaces;
using ECommerce.API.Mappers;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.API.Controllers;

[Route("api/products")]
[ApiController]
public class ProductsController(IProductRepository productRepo, IValidator<CreateProductRequestDto> createProductValidator, IValidator<UpdateProductRequestDto> updateProductValidator) : ControllerBase
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
        var validationResult = await createProductValidator.ValidateAsync(request);
        
        if (!validationResult.IsValid)
        {
            var validationProblems = validationResult.AsValidationProblems();
            
            return ValidationProblem(validationProblems);
        }
        
        var product = request.ToProductFromCreateDto();
        await productRepo.CreateProduct(product);
        
        return CreatedAtAction(nameof(GetProductById), new { productId = product.Id }, product);
    }
    
    [HttpPut("{productId:int}")]
    public async Task<IActionResult> UpdateProduct(int productId, [FromBody] UpdateProductRequestDto request)
    {
        var validationResult = await updateProductValidator.ValidateAsync(request);
        
        if (!validationResult.IsValid)
        {
            var validationProblems = validationResult.AsValidationProblems();
            
            return ValidationProblem(validationProblems);
        }
        
        var updatedProduct = await productRepo.UpdateProduct(productId, request);
        
        if (updatedProduct is null)
        {
            return NotFound();
        }
        
        return Ok(updatedProduct);
    }
    
    [HttpDelete("{productId:int}")]
    public async Task<IActionResult> DeleteProduct(int productId)
    {
        var product = await productRepo.DeleteProduct(productId);
        
        if (product is null)
        {
            return NotFound();
        }

        return NoContent();
    }
}