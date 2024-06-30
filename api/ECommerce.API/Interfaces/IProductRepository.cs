using ECommerce.API.Models;

namespace ECommerce.API.Interfaces;

public interface IProductRepository
{
    Task<List<Product>> GetAllProducts();
    Task<Product?> GetProductById(int productId);
    Task<Product> CreateProduct(Product product);
}