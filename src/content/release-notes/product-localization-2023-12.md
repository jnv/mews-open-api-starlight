---
title: "Product names and descriptions now localized"
type: "deprecation"
release: "2023-12"
scope: "connector-api"
operation: "Get all products"
---

# Product Names and Descriptions Now Localized

We're updating our product management system to support localized names and descriptions, which will require updates to existing integrations.

## What's Changing

### Current Behavior
Currently, product names and descriptions are stored as single-language strings in the `Name` and `Description` fields.

### New Behavior
Product names and descriptions will now be stored as localized objects with language-specific content:

```json
{
  "name": {
    "en": "Standard Room",
    "es": "Habitación Estándar",
    "fr": "Chambre Standard"
  },
  "description": {
    "en": "Comfortable room with basic amenities",
    "es": "Habitación cómoda con servicios básicos",
    "fr": "Chambre confortable avec services de base"
  }
}
```

## Migration Timeline

- **December 2023**: New localized fields available alongside existing fields
- **March 2024**: Existing fields marked as deprecated
- **June 2024**: Existing fields removed, only localized fields supported

## Required Updates

### 1. Update API Requests
Modify your product retrieval requests to include the preferred language:

```json
{
  "language": "en",
  "includeLocalizedContent": true
}
```

### 2. Update Response Handling
Update your code to handle the new localized structure:

```javascript
// Old way
const productName = product.Name;

// New way
const productName = product.Name[language] || product.Name.en;
```

### 3. Update Product Creation/Updates
When creating or updating products, provide localized content:

```json
{
  "name": {
    "en": "Deluxe Suite",
    "es": "Suite de Lujo"
  },
  "description": {
    "en": "Luxury suite with premium amenities",
    "es": "Suite de lujo con servicios premium"
  }
}
```

## Benefits

- **Global Reach**: Support multiple languages for international properties
- **Better UX**: Provide localized content to users in their preferred language
- **Compliance**: Meet regulatory requirements for multi-language content
- **Flexibility**: Add new languages without API changes

## Testing

We recommend testing the new localized fields in your development environment before the migration deadline. Use the `includeLocalizedContent` parameter to access both old and new field formats during the transition period.

For detailed migration examples, see our [Migration Guide](../deprecations/product-localization-migration.md). 