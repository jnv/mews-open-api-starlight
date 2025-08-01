---
title: 'Device integration'
---

# Device integration

Device integration is concerned with integrating with systems or devices installed 'on premise' at the property, such as printers, key encoders, or any third party system installed at the local level rather than in the cloud. Such systems are referred to as `devices` in Mews, regardless of type, and Mews uses `device commands` to communicate with them.

When a relevant action happens within the Mews Hospitality Cloud, a device command is generated and put onto the device command queue. Using the API, you can pull the commands from the queue, process them as necessary and then mark them as processed. Of course, since many of the actions with devices happen in real time, you should in many cases use this in combination with [WebSockets](../events/websockets) to avoid polling for new commands. Whenever a relevant command is created, you will receive a notification about such an event via the configured WebSocket. For more information on choosing the right option, see [Ways to communicate](../guidelines/communicate).

| <div style="width:350px">'How to' use case</div> | API Operations                     |
| :----------------------------------------------- | :--------------------------------- |
| How to listen for new device commands            | [WebSockets](../events/websockets) |

## Adding a new device

Device integrations will require two integrations to be added to a property's **Marketplace** subscriptions. One is the generic device integration, used for creating the device in Mews. The other is your integration, where the created device must be added under the **Connected devices** section in the integration settings, so that your system can begin receiving WebSocket notifications of newly created device commands for the selected devices. See [Testing your integration](#testing-your-integration) below for how to create the devices and link them to your integration.

> **WebSockets and device changes:** If using WebSockets, when a new device has been created in Mews and linked to your integration, or removed from your integration, you should disconnect and reconnect to the WebSocket in order to receive WebSocket events for the newly added devices.
> Currently there is no automatic notification of this, so the property must inform you of any changes to their device set-up.

## Retrieving commands

Using [WebSockets](../events/websockets), first subscribe your application to receive `DeviceCommand` events and connect to the WebSockets endpoint. Once the connection has been established, you will receive notification of all `DeviceCommand` events in real time. When you get the `DeviceCommand` event notification, you can fetch details of the command using [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids).

If your application re-connects using WebSockets, or was offline for any reason and for any length of time, you should use the [Get all commands](../operations/commands.md#get-all-commands) operation to retrieve all pending commands that were in the queue while your application was offline. This is to ensure that no commands in the queue remain unprocessed.

| <div style="width:350px">'How to' use case</div> | API Operations                                                               |
| :----------------------------------------------- | :--------------------------------------------------------------------------- |
| How to listen for new device commands            | [WebSockets](../events/websockets)                                           |
| How to get details of a device command           | [Get all commands by ids](../operations/commands.md#get-all-commands-by-ids) |
| How to get all unprocessed device commands       | [Get all commands](../operations/commands.md#get-all-commands)               |

## Processing commands

Once your application has successfully processed the device command, you should update the status of the command to `Processed` (or other state, if the command was _not_ successfully processed) using [Update command](../operations/commands.md#update-command).

| <div style="width:350px">'How to' use case</div> | API Operations                                             |
| :----------------------------------------------- | :--------------------------------------------------------- |
| How to update the state of a device command      | [Update command](../operations/commands.md#update-command) |

## Types of device command

The [device command data](../operations/commands.md#command-data) depends on the [device type](../operations/devices.md#device-type). Mews supports several device types, including Printer, Payment Terminal, Passport Scanner, Fiscal Machine, and Key Cutter.

### Fiscal Machine commands

For Fiscal Machines (whether a virtual or a physical one), you will receive a command containing [Fiscal machine command data](../operations/commands.md#fiscal-machine-command-data). This includes all data of the related [Bill](../operations/bills.md#bill), including all the payments and revenue items in the form of an [Accounting item](../operations/accountingitems.md#accounting-item).

> **Sending fiscal codes:** Note that currently, there is no way to send fiscal codes generated by the Fiscal Machine back to Mews.

### Key Cutter commands

For Key Cutters, you will receive a command containing [Key cutter command data](../operations/commands.md#key-cutter-command-data). You can then use this information to encode a physical key card. If your solution includes both physical keys and mobile or other forms of keys, you can also use the same information to send the key or door code to the guest.

## Testing your integration

Ensure you follow our general [Usage guidelines](../guidelines/) for testing integrations. In addition to this, the following is specific to device integrations:

To be able to use your integration, an additional step of configuring the device and connecting it to the relevant integration (and therefore the API `Access Token`) is required. This is done through the following steps:

1. In **Mews Operations**, open the main menu in the top left corner, scroll down and click on **Marketplace**.
2. Depending on the type of device you are connecting, click on either the Facility management category (Key Cutter integration, Passport Scanner integration, Printer integration) or Legal environment category (Fiscal Machine integration).
3. Once you have found the correct device integration, click **See more** followed by **Connect** to add this device integration to your Marketplace subscription.
4. Go into the integrations settings page and complete the required fields (if any), then click on the device type on the left side of the screen (e.g. **Key cutters**) and then the "+" button to add and configure any required fields of the device, e.g. Identifier. Be sure to save all changes.
5. Go back to your integration found in the **My subscriptions** section of the Marketplace and click on the **Settings** found on the right side of the integration listing.
6. Once inside the integration settings page, you will see a drop down menu titled **Connected devices**. Select your newly created device from that list and click **Save**, then restart your WebSocket connection.

This is the same process that will be required when you assist any mutual customer with onboarding and configuration of your solution.

For a full overview of device commands and their states, you can check the [device commands queue](https://help.mews.com/s/article/device-commands-queue?language=en_US) in Mews. If you are returning an unexpected error indicating there is an issue with the Data JSON, please read [this article](https://help.mews.com/s/article/data-json-incorrect-or-unsupported-device?language=en_US) to understand what this indicates, based on the type of integration you are referring to.
