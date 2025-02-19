WITH re_entities AS (
  SELECT
    "RegulatedEntity"."id",
    "RegulatedEntity"."clientCode",
    "RegulatedEntity"."entityType",
    "RegulatedEntity"."externalId",
    "RegulatedEntity"."name",
    "RegulatedEntity"."address",
    "RegulatedEntity"."zip",
    "RegulatedEntity"."country",
    "RegulatedEntity"."state",
    "RegulatedEntity"."county",
    "RegulatedEntity"."municipality",
    "RegulatedEntity"."latitude",
    "RegulatedEntity"."longitude",
    "RegulatedEntity"."clientMetaData",
    "RegulatedEntity"."owners",
    "RegulatedEntity"."attributeMap",
    "RegulatedEntity"."active",
    "RegulatedEntity"."deleted",
    "RegulatedEntity"."createdBy",
    "RegulatedEntity"."updatedBy",
    "RegulatedEntity"."createdAt",
    "RegulatedEntity"."updatedAt"
  FROM "regulatedentityservice"."regulatedEntity" AS "RegulatedEntity"
  WHERE "RegulatedEntity"."deleted" = false
    AND EXISTS (
      SELECT 1
      FROM "regulatedentityservice"."regulatedEntityInspectionType" AS "reInspectionType"
      WHERE "reInspectionType"."deleted" = false
        AND "reInspectionType"."regulatedEntityId" = "RegulatedEntity"."id"
    )
  ORDER BY "RegulatedEntity"."state" DESC
  LIMIT 5 OFFSET 5
)
SELECT 
  re_entities.*,
  rit."id" AS "reInspectionType.id",
  rit."clientCode" AS "reInspectionType.clientCode",
  rit."externalId" AS "reInspectionType.externalId",
  rit."regulatedEntityId" AS "reInspectionType.regulatedEntityId",
  rit."inspectionTypeCode" AS "reInspectionType.inspectionTypeCode",
  rit."name" AS "reInspectionType.name",
  rit."address" AS "reInspectionType.address",
  rit."latitude" AS "reInspectionType.latitude",
  rit."longitude" AS "reInspectionType.longitude",
  rit."state" AS "reInspectionType.state",
  rit."county" AS "reInspectionType.county",
  rit."municipality" AS "reInspectionType.municipality",
  rit."mailingAddress" AS "reInspectionType.mailingAddress",
  rit."attributeMap" AS "reInspectionType.attributeMap",
  rit."clientMetaData" AS "reInspectionType.clientMetaData",
  rit."zip" AS "reInspectionType.zip",
  rit."country" AS "reInspectionType.country",
  rit."active" AS "reInspectionType.active",
  rit."deleted" AS "reInspectionType.deleted",
  rit."createdBy" AS "reInspectionType.createdBy",
  rit."updatedBy" AS "reInspectionType.updatedBy",
  rit."createdAt" AS "reInspectionType.createdAt",
  rit."updatedAt" AS "reInspectionType.updatedAt",
  rit."regStartDate" AS "reInspectionType.regStartDate",
  c."id" AS "reInspectionType.contacts.id",
  c."regulatedEntityInspectionTypeId" AS "reInspectionType.contacts.regulatedEntityInspectionTypeId",
  c."contactType" AS "reInspectionType.contacts.contactType",
  c."firstname" AS "reInspectionType.contacts.firstname",
  c."middlename" AS "reInspectionType.contacts.middlename",
  c."lastname" AS "reInspectionType.contacts.lastname",
  c."address" AS "reInspectionType.contacts.address",
  c."city" AS "reInspectionType.contacts.city",
  c."state" AS "reInspectionType.contacts.state",
  c."zip" AS "reInspectionType.contacts.zip",
  c."default" AS "reInspectionType.contacts.default",
  c."active" AS "reInspectionType.contacts.active",
  c."deleted" AS "reInspectionType.contacts.deleted",
  c."createdBy" AS "reInspectionType.contacts.createdBy",
  c."updatedBy" AS "reInspectionType.contacts.updatedBy",
  c."createdAt" AS "reInspectionType.contacts.createdAt",
  c."updatedAt" AS "reInspectionType.contacts.updatedAt",
  c."workPhone" AS "reInspectionType.contacts.workPhone",
  c."workEmail" AS "reInspectionType.contacts.workEmail",
  c."clientMetaData" AS "reInspectionType.contacts.clientMetaData",
  c."title" AS "reInspectionType.contacts.title",
  c."regulatedEntityId" AS "reInspectionType.contacts.regulatedEntityId",
  a."id" AS "reInspectionType.attachments.id",
  a."regulatedEntityInspectionTypeId" AS "reInspectionType.attachments.regulatedEntityInspectionTypeId",
  a."regulatedEntityItemId" AS "reInspectionType.attachments.regulatedEntityItemId",
  a."mimeType" AS "reInspectionType.attachments.mimeType",
  a."title" AS "reInspectionType.attachments.title",
  a."description" AS "reInspectionType.attachments.description",
  a."active" AS "reInspectionType.attachments.active",
  a."deleted" AS "reInspectionType.attachments.deleted",
  a."createdBy" AS "reInspectionType.attachments.createdBy",
  a."updatedBy" AS "reInspectionType.attachments.updatedBy",
  a."createdAt" AS "reInspectionType.attachments.createdAt",
  a."updatedAt" AS "reInspectionType.attachments.updatedAt",
  a."metaData" AS "reInspectionType.attachments.metaData",
  a."annotations" AS "reInspectionType.attachments.annotations",
  a."annotationTypes" AS "reInspectionType.attachments.annotationTypes",
  a."contextType" AS "reInspectionType.attachments.contextType",
  a."regulatedEntityId" AS "reInspectionType.attachments.regulatedEntityId"
FROM re_entities
INNER JOIN "regulatedentityservice"."regulatedEntityInspectionType" rit
  ON re_entities."id" = rit."regulatedEntityId"
  AND rit."deleted" = false
LEFT JOIN "regulatedentityservice"."contacts" c
  ON rit."id" = c."regulatedEntityInspectionTypeId"
  AND c."deleted" = false
LEFT JOIN "regulatedentityservice"."attachments" a
  ON rit."id" = a."regulatedEntityInspectionTypeId"
  AND a."deleted" = false
  AND a."regulatedEntityItemId" IS NULL
ORDER BY re_entities."state" DESC;
