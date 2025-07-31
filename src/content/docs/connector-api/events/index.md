---
title: 'API Events'
---

# API Events

API Events allow you to receive near-real-time notifications about key activities in the Mews system.
These notifications are delivered via Webhooks or WebSockets, offering flexible solutions for various use cases.
For an overview and guidance on selecting the best method for your needs, see [Ways to communicate](communicate).
To start using API Events, configure your system to receive event notifications and contact the Mews team at [partnersuccess@mews.com](mailto:partnersuccess@mews.com) to register your Webhook or WebSocket.

## Webhooks

Mews currently supports two types of Webhook: **General Webhooks** and **Integration Webhooks**.
Both types of Webhook message are sent as `HTTP POST` requests with the event details in the JSON body, just like standard requests to API endpoints.
For guidance on setting up a Webhooks server, registering the URL, and responding to Webhook messages, see our [Webhooks FAQ](wh-faq).

## Contents

- [Ways to communicate](communicate) – an explanation of API Operations, Webhooks and WebSockets
- [General Webhooks](wh-general) – a single Webhook that consolidates multiple event types
- [Integration Webhooks](wh-integration) – individual Webhooks focused on integration state changes
- [Webhooks FAQ](wh-faq) – answers to common questions about Webhooks
- [WebSockets](websockets) – an alternative form of API Event for special use cases
