---
title: "New resource blocks fields"
type: "enhancement"
release: "2023-11"
scope: "connector-api"
operation: "Get all resource blocks"
---

# New Resource Blocks Fields

We've enhanced the resource blocks functionality with additional fields to provide more detailed information about resource availability and management.

## New Fields Added

### Availability Tracking
- **`LastOccupiedUtc`**: Timestamp of when the resource was last occupied
- **`NextAvailableUtc`**: Timestamp when the resource will next be available
- **`MaintenanceStatus`**: Current maintenance status of the resource
- **`CleaningStatus`**: Current cleaning status of the resource

### Resource Information
- **`ResourceType`**: Detailed classification of the resource type
- **`Capacity`**: Maximum capacity of the resource
- **`Amenities`**: List of amenities available in the resource
- **`AccessibilityFeatures`**: Accessibility features available

## API Response Example

```json
{
  "resourceBlocks": [
    {
      "id": "resource-block-123",
      "name": "Room 101",
      "resourceType": "Standard Room",
      "capacity": 2,
      "lastOccupiedUtc": "2023-11-15T10:00:00Z",
      "nextAvailableUtc": "2023-11-15T14:00:00Z",
      "maintenanceStatus": "Available",
      "cleaningStatus": "Clean",
      "amenities": ["WiFi", "TV", "Air Conditioning"],
      "accessibilityFeatures": ["Wheelchair Accessible", "Grab Bars"]
    }
  ]
}
```

## Benefits

- **Better Resource Management**: Track resource status more accurately
- **Improved Planning**: Plan maintenance and cleaning schedules
- **Enhanced Guest Experience**: Provide accurate availability information
- **Operational Efficiency**: Streamline resource allocation processes

## Migration

Existing integrations will continue to work without changes. The new fields are optional and will be included in responses when available. 