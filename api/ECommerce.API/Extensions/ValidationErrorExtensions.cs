using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ECommerce.API.Extensions;

public static class ValidationErrorExtensions
{
    public static ModelStateDictionary AsValidationProblems(this ValidationResult validationResult)
    {
        var modelStateDictionary = new ModelStateDictionary();

        foreach (var validationError in validationResult.Errors)
        {
            modelStateDictionary.AddModelError(validationError.PropertyName, validationError.ErrorMessage);
        }

        return modelStateDictionary;
    }
}