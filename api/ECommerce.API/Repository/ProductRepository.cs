using ECommerce.API.Data;
using ECommerce.API.Interfaces;
using ECommerce.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.API.Repository;

public class ProductRepository(ECommerceDbContext dbContext) : IProductRepository
{
    private readonly ECommerceDbContext _dbContext = dbContext;

    public async Task<List<Product>> GetAllProducts()
    {
        return await _dbContext.Products.ToListAsync();
    }
}