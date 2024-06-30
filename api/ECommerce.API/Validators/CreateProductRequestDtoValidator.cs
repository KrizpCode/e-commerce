using ECommerce.API.DTOs;
using FluentValidation;

namespace ECommerce.API.Validators;

public class CreateProductRequestDtoValidator : AbstractValidator<CreateProductRequestDto>
{
    public CreateProductRequestDtoValidator()
    {
        RuleFor(x => x.Name).Length(3, 100);
        RuleFor(x => x.Description).NotEmpty().MaximumLength(255);
        RuleFor(x => x.Price).GreaterThan(0);
    }
}