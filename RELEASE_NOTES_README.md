# Release Notes System

This document explains how to use the new release notes system in the Mews Open API documentation.

## Overview

The release notes system allows you to create individual release notes as markdown files that are automatically grouped by release month and displayed on a dedicated release notes page. The system uses Starlight's built-in components and design system for a consistent look and feel.

## File Structure

Release notes are stored in `src/content/release-notes/` as individual markdown files. Each file should follow this naming convention:

```
{slug}-{YYYY-MM}.md
```

Example: `expanded-data-export-2023-12.md`

## Frontmatter Schema

Each release note must include the following frontmatter:

```yaml
---
title: "Your release note title"
type: "enhancement" | "feature" | "deprecation" | "breaking" | "docs"
release: "YYYY-MM" | "YYYY-MM-DD"
scope: "connector-api" | "pos-api" | "be-api" | "chm-api" | "general"
operation: "optional-operation-name"
---
```

### Field Descriptions

- **title** (string, required): The title of the release note
- **type** (enum, required): The type of change
  - `enhancement`: Improvements to existing functionality
  - `feature`: New functionality
  - `deprecation`: Deprecated functionality
  - `breaking`: Breaking changes
  - `docs`: Documentation updates
- **release** (string, required): Release date in YYYY-MM or YYYY-MM-DD format
- **scope** (enum, required): The API scope affected
  - `connector-api`: Connector API changes
  - `pos-api`: POS API changes
  - `be-api`: Booking Engine API changes
  - `chm-api`: Channel Manager API changes
  - `general`: General changes
- **operation** (string, optional): The specific API operation affected

## Content

After the frontmatter, write your release note content using standard markdown. You can include:

- Headers (##, ###, etc.)
- Code blocks with syntax highlighting
- Lists (bulleted and numbered)
- Links
- Images
- Tables

## Example Release Note

```markdown
---
title: "New API Operation: Delete addresses"
type: "feature"
release: "2023-11"
scope: "connector-api"
operation: "Delete addresses"
---

# New API Operation: Delete Addresses

We've added a new API operation to allow deletion of customer addresses.

## New Endpoint

### Delete Addresses
- **Method**: `DELETE`
- **Path**: `/addresses/{addressId}`
- **Description**: Permanently delete a customer address

## Request Parameters

```json
{
  "addressId": "address-123",
  "reason": "Customer request",
  "softDelete": false
}
```

## Benefits

- **Customer Data Management**: Remove outdated addresses
- **Compliance**: Meet GDPR deletion requests
- **Data Integrity**: Clean up duplicate entries
```

## Display

Release notes are automatically:

1. **Grouped by release month** (newest first)
2. **Displayed on the release notes index page** at `/release-notes`
3. **Linked individually** with their own pages
4. **Categorized with Starlight icons** based on type
5. **Tagged with scope and operation** information

## Navigation

The release notes are accessible through:

- **Main navigation**: "Release Notes" link in the sidebar
- **Direct URL**: `/release-notes`
- **Individual notes**: `/release-notes/{slug}`

## Icons

Each release note type has a corresponding Starlight icon:

- 📈 `arrow-up` - Enhancement
- 🚀 `rocket` - Feature
- ⚠️ `warning` - Deprecation
- 💥 `alert-triangle` - Breaking
- 📝 `file-text` - Docs

The icons are automatically styled using Starlight's design system and will adapt to the current theme.

## Starlight Integration

The release notes system is built using Starlight's components:

- **StarlightPage**: Provides consistent layout and styling
- **Icon**: Uses Starlight's built-in icon set
- **Design System**: Leverages Starlight's CSS variables and theming

This ensures the release notes pages look and feel consistent with the rest of your documentation site.

## Adding New Release Notes

1. Create a new markdown file in `src/content/release-notes/`
2. Use the naming convention: `{slug}-{YYYY-MM}.md`
3. Add the required frontmatter
4. Write your content in markdown
5. Save the file

The release note will automatically appear on the release notes page after the next build.

## Validation

The system validates:

- Required frontmatter fields are present
- Type values are valid
- Release date format is correct
- Scope values are valid
- Markdown syntax is valid

## Build Process

Release notes are processed during the Astro build process:

1. Content is validated against the schema
2. Notes are grouped by release month
3. Static pages are generated using Starlight components
4. Navigation is updated

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all required frontmatter fields are present
2. **Note doesn't appear**: Verify the release date format is correct
3. **Invalid type/scope**: Ensure you're using one of the allowed enum values
4. **File not found**: Check the file is in the correct directory

### Validation Errors

If you see validation errors, check:

- All required fields are present in frontmatter
- Enum values match exactly (case-sensitive)
- Date format is YYYY-MM or YYYY-MM-DD
- File is saved with `.md` extension

### Starlight Integration Issues

If you encounter issues with Starlight components:

- Ensure you're using the latest version of Starlight
- Check that the Icon component names are valid
- Verify that the StarlightPage component is imported correctly 