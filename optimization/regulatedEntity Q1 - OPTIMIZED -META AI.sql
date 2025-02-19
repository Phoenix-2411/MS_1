WITH RegulatedEntities AS (
    SELECT "id", "clientCode", "entityType", "externalId", "name", 
           "address", "zip", "country", "state", "county", "municipality", 
           "latitude", "longitude", "clientMetaData", "owners", "attributeMap", 
           "active", "deleted", "createdBy", "updatedBy", "createdAt", "updatedAt"
    FROM "regulatedentityservice"."regulatedEntity"
    WHERE "deleted" = false
),
InspectionTypes AS (
    SELECT "id", "regulatedEntityId", "clientCode", "externalId", 
           "inspectionTypeCode", "name", "address", "latitude", "longitude", 
           "state", "county", "municipality", "mailingAddress", "attributeMap", 
           "clientMetaData", "zip", "country", "active", "deleted", "createdBy", 
           "updatedBy", "createdAt", "updatedAt", "regStartDate"
    FROM "regulatedentityservice"."regulatedEntityInspectionType"
    WHERE "deleted" = false
)
SELECT 
    "RegulatedEntity".*, 
    "reInspectionType"."id" AS "reInspectionType.id", 
    "reInspectionType"."clientCode" AS "reInspectionType.clientCode",
  "reInspectionType"."externalId" AS "reInspectionType.externalId",
  "reInspectionType"."regulatedEntityId" AS "reInspectionType.regulatedEntityId",
  "reInspectionType"."inspectionTypeCode" AS "reInspectionType.inspectionTypeCode",
  "reInspectionType"."name" AS "reInspectionType.name",
  "reInspectionType"."address" AS "reInspectionType.address",
  "reInspectionType"."latitude" AS "reInspectionType.latitude",
  "reInspectionType"."longitude" AS "reInspectionType.longitude",
  "reInspectionType"."state" AS "reInspectionType.state",
  "reInspectionType"."county" AS "reInspectionType.county",
  "reInspectionType"."municipality" AS "reInspectionType.municipality",
  "reInspectionType"."mailingAddress" AS "reInspectionType.mailingAddress",
  "reInspectionType"."attributeMap" AS "reInspectionType.attributeMap",
  "reInspectionType"."clientMetaData" AS "reInspectionType.clientMetaData",
  "reInspectionType"."zip" AS "reInspectionType.zip",
  "reInspectionType"."country" AS "reInspectionType.country",
  "reInspectionType"."active" AS "reInspectionType.active",
  "reInspectionType"."deleted" AS "reInspectionType.deleted",
  "reInspectionType"."createdBy" AS "reInspectionType.createdBy",
  "reInspectionType"."updatedBy" AS "reInspectionType.updatedBy",
  "reInspectionType"."createdAt" AS "reInspectionType.createdAt",
  "reInspectionType"."updatedAt" AS "reInspectionType.updatedAt",
  "reInspectionType"."regStartDate" AS "reInspectionType.regStartDate",
  "reInspectionType->contacts"."id" AS "reInspectionType.contacts.id",
  "reInspectionType->contacts"."regulatedEntityInspectionTypeId" AS "reInspectionType.contacts.regulatedEntityInspectionTypeId",
  "reInspectionType->contacts"."contactType" AS "reInspectionType.contacts.contactType",
  "reInspectionType->contacts"."firstname" AS "reInspectionType.contacts.firstname",
  "reInspectionType->contacts"."middlename" AS "reInspectionType.contacts.middlename",
  "reInspectionType->contacts"."lastname" AS "reInspectionType.contacts.lastname",
  "reInspectionType->contacts"."address" AS "reInspectionType.contacts.address",
  "reInspectionType->contacts"."city" AS "reInspectionType.contacts.city",
  "reInspectionType->contacts"."state" AS "reInspectionType.contacts.state",
  "reInspectionType->contacts"."zip" AS "reInspectionType.contacts.zip",
  "reInspectionType->contacts"."default" AS "reInspectionType.contacts.default",
  "reInspectionType->contacts"."active" AS "reInspectionType.contacts.active",
  "reInspectionType->contacts"."deleted" AS "reInspectionType.contacts.deleted",
  "reInspectionType->contacts"."createdBy" AS "reInspectionType.contacts.createdBy",
  "reInspectionType->contacts"."updatedBy" AS "reInspectionType.contacts.updatedBy",
  "reInspectionType->contacts"."createdAt" AS "reInspectionType.contacts.createdAt",
  "reInspectionType->contacts"."updatedAt" AS "reInspectionType.contacts.updatedAt",
  "reInspectionType->contacts"."workPhone" AS "reInspectionType.contacts.workPhone",
  "reInspectionType->contacts"."workEmail" AS "reInspectionType.contacts.workEmail",
  "reInspectionType->contacts"."clientMetaData" AS "reInspectionType.contacts.clientMetaData",
  "reInspectionType->contacts"."title" AS "reInspectionType.contacts.title",
  "reInspectionType->contacts"."regulatedEntityId" AS "reInspectionType.contacts.regulatedEntityId",
  "reInspectionType->attachments"."id" AS "reInspectionType.attachments.id",
  "reInspectionType->attachments"."regulatedEntityInspectionTypeId" AS "reInspectionType.attachments.regulatedEntityInspectionTypeId",
  "reInspectionType->attachments"."regulatedEntityItemId" AS "reInspectionType.attachments.regulatedEntityItemId",
  "reInspectionType->attachments"."mimeType" AS "reInspectionType.attachments.mimeType",
  "reInspectionType->attachments"."title" AS "reInspectionType.attachments.title",
  "reInspectionType->attachments"."description" AS "reInspectionType.attachments.description",
  "reInspectionType->attachments"."active" AS "reInspectionType.attachments.active",
  "reInspectionType->attachments"."deleted" AS "reInspectionType.attachments.deleted",
  "reInspectionType->attachments"."createdBy" AS "reInspectionType.attachments.createdBy",
  "reInspectionType->attachments"."updatedBy" AS "reInspectionType.attachments.updatedBy",
  "reInspectionType->attachments"."createdAt" AS "reInspectionType.attachments.createdAt",
  "reInspectionType->attachments"."updatedAt" AS "reInspectionType.attachments.updatedAt",
  "reInspectionType->attachments"."metaData" AS "reInspectionType.attachments.metaData",
  "reInspectionType->attachments"."annotations" AS "reInspectionType.attachments.annotations",
  "reInspectionType->attachments"."annotationTypes" AS "reInspectionType.attachments.annotationTypes",
  "reInspectionType->attachments"."contextType" AS "reInspectionType.attachments.contextType",
  "reInspectionType->attachments"."regulatedEntityId" AS "reInspectionType.attachments.regulatedEntityId"
FROM RegulatedEntities AS "RegulatedEntity"
INNER JOIN InspectionTypes AS "reInspectionType" 
    ON "RegulatedEntity"."id" = "reInspectionType"."regulatedEntityId"
LEFT OUTER JOIN "regulatedentityservice"."contacts" AS "reInspectionType->contacts" 
    ON "reInspectionType"."id" = "reInspectionType->contacts"."regulatedEntityInspectionTypeId"
    AND "reInspectionType->contacts"."deleted" = false
LEFT OUTER JOIN "regulatedentityservice"."attachments" AS "reInspectionType->attachments" 
    ON "reInspectionType"."id" = "reInspectionType->attachments"."regulatedEntityInspectionTypeId"
    AND "reInspectionType->attachments"."deleted" = false
    AND "reInspectionType->attachments"."regulatedEntityItemId" IS NULL
ORDER BY "RegulatedEntity"."state" DESC
LIMIT 5 OFFSET 5;