---
title: 'Changelog 2022'
---

# Changelog 2022

## 20th December 2022

- Extended [Product](../operations/products.md#product) with AccountingCategoryId.

## 8th December 2022

- Extended [Bill](../operations/bills.md#bill) with [Enterprise data](../operations/bills.md#bill-enterprise-data)

## 1st December 2022

- Added operation [Merge accounts](../operations/accounts.md#merge-accounts).
- Deprecated operation [Merge customers](../operations/customers.md#merge-customers). Operation [Merge accounts](../operations/accounts.md#merge-accounts) should be used instead.

## 28th November 2022

- Extended [Get company contracts](../operations/companycontracts.md#get-all-company-contracts) with [Pagination](../guidelines/pagination) and filtering parameters `ServiceIds`, `CompanyIds` and `CompanyContractIds`.
- Added operation [Add company contracts](../operations/companycontracts.md#add-company-contracts).
- Added operation [Update company contracts](../operations/companycontracts.md#update-company-contracts).
- Added operation [Delete company contracts](../operations/companycontracts.md#delete-company-contracts).

## 24th November 2022

- Added operation [Get all routing rules](../operations/routingrules.md#get-all-routing-rules) to retrieve routing rules.
- Added operation [Add routing rules](../operations/routingrules.md#add-routing-rules) to add routing rules.
- Added operation [Update routing rules](../operations/routingrules.md#update-routing-rules) to update routing rules.
- Added operation [Delete routing rules](../operations/routingrules.md#delete-routing-rules) to delete routing rules.
- Extended the request parameters for [Get all reservations](../operations/reservations.md#get-all-reservations-ver-2017-04-12) to add new filter parameter `ChannelNumbers`.

## 21st November 2022

- Added new page [Addresses](../operations/addresses).
- Added operation [Get all addresses](../operations/addresses.md#get-all-addresses).
- Added operation [Add addresses](../operations/addresses.md#add-addresses).
- Added operation [Update addresses](../operations/addresses.md#update-addresses).

## 15th November 2022

- Added [Pagination](../guidelines/pagination) to [Get all products](../operations/products.md#get-all-products).
- Extended [Get all products](../operations/products.md#get-all-products) response with `CustomerProducts`.
- Extended [Loyalty membership](../operations/loyaltymemberships.md#loyalty-membership) with `IsPrimary`, `Points` and `Code` fields.
- Extended operations [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships), [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships) and [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships) with `IsPrimary`, `Points` and `Code` fields.

## 7th November 2022

- Extended [Outlet item](../operations/outletitems.md#outlet-item) with `ExternalIdentifier`.
- Extended [Outlet bill](../operations/outletbills.md#outlet-item-parameters) with `ExternalIdentifier` for items.

## 25th October 2022

- Extended [Payment item](../operations/accountingitems.md#payment-item) with `SettlementId`.
- Extended [Order item](../operations/accountingitems.md#order-item) with `UnitCount` and `UnitAmount`.

## 20th October 2022

- Added operation [Get all loyalty memberships](../operations/loyaltymemberships.md#get-all-loyalty-memberships) to retrieve loyalty memberships.
- Added operation [Add loyalty memberships](../operations/loyaltymemberships.md#add-loyalty-memberships) to add loyalty memberships.
- Added operation [Update loyalty memberships](../operations/loyaltymemberships.md#update-loyalty-memberships) to update loyalty memberships.
- Added operation [Delete loyalty memberships](../operations/loyaltymemberships.md#delete-loyalty-memberships) to delete loyalty memberships.

## 14th October 2022

- Extended [Add company](../operations/companies.md#add-company) with `Department`, `DunsNumber` and `CreditRating` fields.
- Added `AddFeesToInvoices` to [Company options parameters](../operations/companies.md#company-options-parameters).
- Extended [Update company](../operations/companies.md#update-company) with `Department`, `DunsNumber` and `CreditRating` fields.
- Added `AddFeesToInvoices` to [Company options update value](../operations/companies.md#company-options-update-value).
- Added [Credit rating update value](../operations/companies.md#credit-rating-update-value).
- Added [Credit rating parameters](../operations/companies.md#credit-rating-parameters).
- Added operation [Add loyalty programs](../operations/loyaltyprograms.md#add-loyalty-programs) to add loyalty programs.
- Added operation [Update loyalty programs](../operations/loyaltyprograms.md#update-loyalty-programs) to update loyalty programs.
- Added operation [Delete loyalty programs](../operations/loyaltyprograms.md#delete-loyalty-programs) to delete loyalty programs.

## 12th October 2022

- Added `AddFeesToInvoices` to [Company Options](../operations/companies.md#company-options).
- Added `Department`, `DunsNumber` and `CreditRating` field in [Company](../operations/companies.md#company).
- Added [Credit Rating](../operations/companies.md#credit-rating).
- Added [Credit Rating Basic](../operations/companies.md#credit-rating-basic).
- Added operation [Get all loyalty programs](../operations/loyaltyprograms.md#get-all-loyalty-programs) to retrieve loyalty programs.

## 11th October 2022

- Added new operations [Get all source assignments](../operations/sourceassignments.md#get-all-source-assignments) and [Get all sources](../operations/sources.md#get-all-sources) for retrieval of reservation sources.

## 7th October 2022

- Added [Pagination](../guidelines/pagination) to [Get all resource access tokens](../operations/resourceaccesstokens.md#get-all-resource-access-tokens).

## 22nd September 2022

- Added description of [Travel agency contract options](../operations/companycontracts.md#travel-agency-contract-options).
- Added `ChannelManagerAbsoluteAdjustment` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `ChannelManagerRelativeAdjustment` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `Options` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `AccountingCode` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `InvoiceDueInterval` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `ChannelManagerBusinessSegmentId` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `ContactPerson` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `ContactEmail` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `AdditionalContactInfo` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).
- Added `Notes` field in [Travel agency contract](../operations/companycontracts.md#travel-agency-contract).

## 13th September 2022

- Added [Pagination](../guidelines/pagination) to [Get All Customers](../operations/customers.md#get-all-customers).

## 8th September 2022

- Extended [Get all customers](../operations/customers.md#get-all-customers) response with `CarRegistrationNumber` field.

## 30th August 2022

- Small improvements to [Webhooks](../events/) documentation, including moving the [Webhooks FAQ](../events/wh-faq) to its own page.

## 23rd August 2022

- Added new Webhook events `CustomerAdded` and `CustomerUpdated` in [General Webhooks](../events/wh-general).

## 17th August 2022

- Added `BookerId` field in [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters).
- Extended [Get all availability blocks](../operations/availabilityblocks#get-all-availability-blocks) response with `CompanyId` field in [Availability block](../operations/availabilityblocks.md#availability-block).
- Added `ActivityState` and `MergeTargetId` to the [Customer](../operations/customers.md#customer) object.

## 10th August 2022

- Added a new Webhook event [ResourceBlockUpdated](../events/wh-general).

## 5th August 2022

- Updated PCI Proxy use case in [Payment automation](../use-cases/payment-automation).

## 22nd July 2022

- Added new page [Pagination](../guidelines/pagination) under [Guidelines](../guidelines/).
- Added cursor pagination in [Get all bills](../operations/bills.md#get-all-bills), [Get all reservation](../operations/reservations.md#get-all-reservations), [Get all outletItems](../operations/outletitems.md#get-all-outletitems) operations.
- Added InvoicingEmail field in [Company](../operations/companies.md#company).
- Added InvoiceDueInterval field in [Company](../operations/companies.md#company).
- Added MotherCompanyId field in [Company](../operations/companies.md#company).
- Added CreatedUtc field in [Company](../operations/companies.md#company).
- Added UpdatedUtc field in [Company](../operations/companies.md#company).
- Added Telephone field in [Company](../operations/companies.md#company).
- Added ContactPerson field in [Company](../operations/companies.md#company).
- Added Contact field in [Company](../operations/companies.md#company).
- Added Notes field in [Company](../operations/companies.md#company).
- Changed Price to UnitAmount field in [Product](../operations/products.md#response).

## 19th July 2022

- Extended operation [Update reservations](../operations/reservations.md#update-reservations) with `Purpose` property.

## 8th July 2022

- Re-designed and updated [Deprecations page](../deprecations/)

## 29th June 2022

- Monthly Services (coming soon) - Deprecated `StartUtc` and `EndUtc` in favor of `FirstTimeUnitUtc` and `LastTimeUnitUtc` in [Availability block](../operations/availabilityblocks.md#availability-block), [Availability block adjustment](../operations/availabilityblocks.md#availability-block-adjustment)

## 24th Jun 2022

- Monthly Services (coming soon) - Deprecated `StartUtc` and `EndUtc` in favor of `FirstTimeUnitUtc` and `LastTimeUnitUtc` in [Availability block parameters](../operations/availabilityblocks.md#availability-block-parameters), [Availability block update parameters](../operations/availabilityblocks.md#availability-block-update-parameters)

## 25th May 2022

- Updated guidance on [Request limits](../guidelines/requests.md#request-limits)
- Added `Retry-After` HTTP header to `429 Too Many requests` error response

## 25th April 2022

- Extended operations [Get all availability blocks](../operations/availabilityblocks.md#get-all-availability-blocks) with `ActivityStates` property.
- Extended operations [Get all availability blocks](../operations/availabilityblocks.md#availability-block-extent) with `Rates` property.

## 24th March 2022

- Extended operations [Get all services](../operations/services.md#get-all-services) and [Get all products](../operations/products.md#get-all-products) with `Options` property.

## 16th March 2022

- Added operation [Get all message threads](../operations/messagethreads.md#get-all-message-threads) to retrieve message threads.
- Added operation [Add message thread](../operations/messagethreads.md#add-message-thread) to add message thread.
- Added operation [Get all messages](../operations/messages.md#get-all-messages) to retrieve messages.
- Added operation [Add messages](../operations/messages.md#add-messages) to add messages.

## 7th March 2022

- Re-structured documentation pages for API operations so pages are organised by domain entity (e.g. [countries](../operations/countries), [outletbills](../operations/outletbills), [products](../operations/products)) rather than theme (e.g. configuration, reservations, finance)
- Re-structured documentation pages for Changelog so organised by year; [deprecations](../deprecations/) split off into its own page
- Some minor additional changes to documentation pages, e.g. [Webhooks](../events/) and [WebSockets](../events/websockets) now in separate directories
- Added reference to Swagger/OpenAPI definition on [home page](../)

## 11th February 2022

- Deprecated `AdultCount` and `ChildCount` from [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates).
- Added [Age category parameters](../operations/reservations.md#age-category-parameters) replacing `AdultCount` and `ChildCount` for [Reservation](../operations/reservations.md#reservation) and [Reservation parameters](../operations/reservations.md#reservation-parameters) and [Reservation updates](../operations/reservations.md#reservation-updates).

## 8th February 2022

- Extended [Time unit period](../operations/services.md#time-unit-period) with Month.
- Added `Time unit` descriptive content to [Services](../operations/services).
- Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
- Extended [Get rate pricing](../operations/rates.md#get-rate-pricing) return value with TimeUnitStartsUtc
- Removed DatesUtc from [Get rate pricing](../operations/rates.md#get-rate-pricing) return value
- Extended [Update rate price](../operations/rates.md#update-rate-price) with FirstTimeUnitStartUtc, LastTimeUnitStartUtc and info about max interval length.
- Removed TimeUnit from [Bookable service data](../operations/services.md#bookable-service-data)
- Added TimeUnitPeriod to [Bookable service data](../operations/services.md#bookable-service-data)

## 7th February 2022

- Added [Get all age categories](../operations/agecategories.md#get-all-age-categories) operation.

## 2nd February 2022

- Extended the request parameters for [Get all accounting items](../operations/accountingitems.md#get-all-accounting-items) to add new filter parameter `Rebated item IDs`
- Extended the [Accounting use case](../use-cases/accounting) to include new section [Working with rebates](../use-cases/accounting.md#working-with-rebates)
- Deprecated `Rebated` property from [Bill options](../operations/bills.md#bill-options) object

| Next                            |
| :------------------------------ |
| [Changelog 2021](changelog2021) |
