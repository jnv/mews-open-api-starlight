---
title: "New API Operation: Delete addresses"
type: "feature"
release: "2023-11"
scope: "connector-api"
operation: "Delete addresses"
---

# New API Operation: Delete Addresses

We've added a new API operation to allow deletion of customer addresses, providing more complete customer data management capabilities.

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

## Response

### Success Response (200)
```json
{
  "success": true,
  "deletedAddressId": "address-123",
  "deletedAt": "2023-11-20T14:30:00Z"
}
```

### Error Response (404)
```json
{
  "error": "Address not found",
  "errorCode": "ADDRESS_NOT_FOUND",
  "addressId": "address-123"
}
```

## Use Cases

### Customer Data Management
- Remove outdated or incorrect addresses
- Comply with data deletion requests (GDPR)
- Clean up duplicate address entries

### System Maintenance
- Remove test data from production
- Clean up orphaned address records
- Maintain data integrity

## Security Considerations

- **Authentication Required**: Only authenticated users can delete addresses
- **Audit Trail**: All deletions are logged for compliance
- **Soft Delete Option**: Option to soft delete instead of permanent deletion
- **Validation**: Address must not be associated with active reservations

## Implementation Example

```javascript
const deleteAddress = async (addressId, reason) => {
  const response = await fetch(`/api/addresses/${addressId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      reason: reason,
      softDelete: false
    })
  });
  
  return response.json();
};
```

## Migration

This is a new operation with no breaking changes to existing functionality. Existing address retrieval and update operations remain unchanged. 