﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ECommerce.API.Models;

[Table("Products")]
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
}