using ECommerce.API.Data;
using ECommerce.API.Interfaces;
using ECommerce.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.API.Repository;

public class ProductRepository(ECommerceDbContext dbContext) : IProductRepository
{
    public async Task<List<Product>> GetAllProducts()
    {
        return await dbContext.Products.ToListAsync();
    }

    public async Task<Product?> GetProductById(int productId)
    {
        return await dbContext.Products.FirstOrDefaultAsync(x => x.Id == productId);
    }

    public async Task<Product> CreateProduct(Product product)
    {
        await dbContext.Products.AddAsync(product);
        await dbContext.SaveChangesAsync();

        return product;
    }
}