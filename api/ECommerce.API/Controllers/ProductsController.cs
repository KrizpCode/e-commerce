using ECommerce.API.Interfaces;
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
}