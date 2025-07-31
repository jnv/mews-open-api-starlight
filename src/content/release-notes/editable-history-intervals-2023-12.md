---
title: "More granular control over Editable History Intervals"
type: "feature"
release: "2023-12"
scope: "connector-api"
operation: "Update configuration"
---

# More Granular Control Over Editable History Intervals

We've introduced enhanced configuration options for editable history intervals, giving you more precise control over when reservations and bookings can be modified.

## New Configuration Options

### Time-Based Intervals
You can now set different intervals for various types of modifications:

```json
{
  "editableHistoryIntervals": {
    "reservationModification": {
      "hours": 24,
      "minutes": 0
    },
    "cancellation": {
      "hours": 48,
      "minutes": 0
    },
    "rateChanges": {
      "hours": 12,
      "minutes": 30
    },
    "guestInformation": {
      "hours": 2,
      "minutes": 0
    }
  }
}
```

### Property-Specific Settings
Different properties can now have their own editable history intervals:

```json
{
  "properties": {
    "property1": {
      "editableHistoryIntervals": {
        "reservationModification": { "hours": 12 },
        "cancellation": { "hours": 24 }
      }
    },
    "property2": {
      "editableHistoryIntervals": {
        "reservationModification": { "hours": 48 },
        "cancellation": { "hours": 72 }
      }
    }
  }
}
```

## API Changes

### New Endpoint
- **Update Editable History Intervals**: Configure intervals for different modification types

### Enhanced Response
The configuration endpoint now returns detailed interval information:

```json
{
  "editableHistoryIntervals": {
    "reservationModification": {
      "hours": 24,
      "minutes": 0,
      "isConfigurable": true,
      "minimumValue": { "hours": 1 },
      "maximumValue": { "hours": 168 }
    }
  }
}
```

## Use Cases

### Flexible Cancellation Policies
- Set different cancellation windows for different room types
- Implement dynamic pricing with shorter modification windows
- Support last-minute booking policies

### Compliance Requirements
- Meet regulatory requirements for booking modifications
- Implement property-specific policies
- Support different time zones and local regulations

### Operational Efficiency
- Reduce manual override requests
- Streamline booking management processes
- Improve guest experience with appropriate modification windows

## Migration Guide

### For Existing Integrations
1. **No Breaking Changes**: Existing configurations will continue to work
2. **Enhanced Options**: New granular controls are optional
3. **Backward Compatibility**: Old interval format is still supported

### For New Integrations
1. **Use New Format**: Implement the new granular interval structure
2. **Property-Specific**: Configure intervals per property when needed
3. **Validation**: Use the new validation endpoints to ensure proper configuration

## Configuration Examples

### Standard Hotel
```json
{
  "editableHistoryIntervals": {
    "reservationModification": { "hours": 24 },
    "cancellation": { "hours": 48 },
    "rateChanges": { "hours": 12 },
    "guestInformation": { "hours": 2 }
  }
}
```

### Boutique Property
```json
{
  "editableHistoryIntervals": {
    "reservationModification": { "hours": 12 },
    "cancellation": { "hours": 24 },
    "rateChanges": { "hours": 6 },
    "guestInformation": { "hours": 1 }
  }
}
```

### Resort Property
```json
{
  "editableHistoryIntervals": {
    "reservationModification": { "hours": 72 },
    "cancellation": { "hours": 168 },
    "rateChanges": { "hours": 24 },
    "guestInformation": { "hours": 4 }
  }
}
```

For detailed API documentation, see the [Configuration Operations](../operations/configuration.md) section. 