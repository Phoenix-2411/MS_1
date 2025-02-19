WITH entity AS (
  SELECT 
    "id", 
    "clientCode", 
    "entityType", 
    "externalId", 
    "name", 
    "address", 
    "zip", 
    "country", 
    "state", 
    "county", 
    "municipality", 
    "latitude", 
    "longitude", 
    "clientMetaData", 
    "owners", 
    "attributeMap", 
    "active", 
    "deleted", 
    "createdBy", 
    "updatedBy", 
    "createdAt", 
    "updatedAt"
  FROM "regulatedentityservice"."regulatedEntity"
  WHERE "clientCode" = 'CLIENT-071'
    AND "deleted" = false
  LIMIT 1
)
SELECT 
  entity.*,
  rit."id"                        AS "reInspectionType.id",
  rit."clientCode"                AS "reInspectionType.clientCode",
  rit."externalId"                AS "reInspectionType.externalId",
  rit."regulatedEntityId"         AS "reInspectionType.regulatedEntityId",
  rit."inspectionTypeCode"        AS "reInspectionType.inspectionTypeCode",
  rit."name"                      AS "reInspectionType.name",
  rit."address"                   AS "reInspectionType.address",
  rit."latitude"                  AS "reInspectionType.latitude",
  rit."longitude"                 AS "reInspectionType.longitude",
  rit."state"                     AS "reInspectionType.state",
  rit."county"                    AS "reInspectionType.county",
  rit."municipality"              AS "reInspectionType.municipality",
  rit."mailingAddress"            AS "reInspectionType.mailingAddress",
  rit."attributeMap"              AS "reInspectionType.attributeMap",
  rit."clientMetaData"            AS "reInspectionType.clientMetaData",
  rit."zip"                       AS "reInspectionType.zip",
  rit."country"                   AS "reInspectionType.country",
  rit."active"                    AS "reInspectionType.active",
  rit."deleted"                   AS "reInspectionType.deleted",
  rit."createdBy"                 AS "reInspectionType.createdBy",
  rit."updatedBy"                 AS "reInspectionType.updatedBy",
  rit."createdAt"                 AS "reInspectionType.createdAt",
  rit."updatedAt"                 AS "reInspectionType.updatedAt",
  rit."regStartDate"              AS "reInspectionType.regStartDate",
  
  -- RegulatedEntityItem details for the inspection type
  rei."id"                      AS "reInspectionType.reItem.id",
  rei."clientCode"              AS "reInspectionType.reItem.clientCode",
  rei."externalId"              AS "reInspectionType.reItem.externalId",
  rei."regulatedEntityInspectionTypeId" AS "reInspectionType.reItem.regulatedEntityInspectionTypeId",
  rei."regulatedEntityId"       AS "reInspectionType.reItem.regulatedEntityId",
  rei."keyName"                 AS "reInspectionType.reItem.keyName",
  rei."keyValue"                AS "reInspectionType.reItem.keyValue",
  rei."attributeMap"            AS "reInspectionType.reItem.attributeMap",
  rei."active"                  AS "reInspectionType.reItem.active",
  rei."deleted"                 AS "reInspectionType.reItem.deleted",
  rei."createdBy"               AS "reInspectionType.reItem.createdBy",
  rei."updatedBy"               AS "reInspectionType.reItem.updatedBy",
  rei."createdAt"               AS "reInspectionType.reItem.createdAt",
  rei."updatedAt"               AS "reInspectionType.reItem.updatedAt",
  
  -- Attachments for the RegulatedEntityItem
  rita."id"                     AS "reInspectionType.reItem.attachments.id",
  rita."regulatedEntityInspectionTypeId" AS "reInspectionType.reItem.attachments.regulatedEntityInspectionTypeId",
  rita."regulatedEntityItemId"  AS "reInspectionType.reItem.attachments.regulatedEntityItemId",
  rita."mimeType"               AS "reInspectionType.reItem.attachments.mimeType",
  rita."title"                  AS "reInspectionType.reItem.attachments.title",
  rita."description"            AS "reInspectionType.reItem.attachments.description",
  rita."active"                 AS "reInspectionType.reItem.attachments.active",
  rita."deleted"                AS "reInspectionType.reItem.attachments.deleted",
  rita."createdBy"              AS "reInspectionType.reItem.attachments.createdBy",
  rita."updatedBy"              AS "reInspectionType.reItem.attachments.updatedBy",
  rita."createdAt"              AS "reInspectionType.reItem.attachments.createdAt",
  rita."updatedAt"              AS "reInspectionType.reItem.attachments.updatedAt",
  rita."metaData"               AS "reInspectionType.reItem.attachments.metaData",
  rita."annotations"            AS "reInspectionType.reItem.attachments.annotations",
  rita."annotationTypes"        AS "reInspectionType.reItem.attachments.annotationTypes",
  rita."contextType"            AS "reInspectionType.reItem.attachments.contextType",
  rita."regulatedEntityId"      AS "reInspectionType.reItem.attachments.regulatedEntityId",
  
  -- Contacts for the inspection type
  rc."id"                     AS "reInspectionType.contacts.id",
  rc."regulatedEntityInspectionTypeId" AS "reInspectionType.contacts.regulatedEntityInspectionTypeId",
  rc."contactType"            AS "reInspectionType.contacts.contactType",
  rc."firstname"              AS "reInspectionType.contacts.firstname",
  rc."middlename"             AS "reInspectionType.contacts.middlename",
  rc."lastname"               AS "reInspectionType.contacts.lastname",
  rc."address"                AS "reInspectionType.contacts.address",
  rc."city"                   AS "reInspectionType.contacts.city",
  rc."state"                  AS "reInspectionType.contacts.state",
  rc."zip"                    AS "reInspectionType.contacts.zip",
  rc."default"                AS "reInspectionType.contacts.default",
  rc."active"                 AS "reInspectionType.contacts.active",
  rc."deleted"                AS "reInspectionType.contacts.deleted",
  rc."createdBy"              AS "reInspectionType.contacts.createdBy",
  rc."updatedBy"              AS "reInspectionType.contacts.updatedBy",
  rc."createdAt"              AS "reInspectionType.contacts.createdAt",
  rc."updatedAt"              AS "reInspectionType.contacts.updatedAt",
  rc."workPhone"              AS "reInspectionType.contacts.workPhone",
  rc."workEmail"              AS "reInspectionType.contacts.workEmail",
  rc."clientMetaData"         AS "reInspectionType.contacts.clientMetaData",
  rc."title"                  AS "reInspectionType.contacts.title",
  rc."regulatedEntityId"      AS "reInspectionType.contacts.regulatedEntityId",
  
  -- Attachments directly on the inspection type
  rat."id"                    AS "reInspectionType.attachments.id",
  rat."regulatedEntityInspectionTypeId" AS "reInspectionType.attachments.regulatedEntityInspectionTypeId",
  rat."regulatedEntityItemId" AS "reInspectionType.attachments.regulatedEntityItemId",
  rat."mimeType"              AS "reInspectionType.attachments.mimeType",
  rat."title"                 AS "reInspectionType.attachments.title",
  rat."description"           AS "reInspectionType.attachments.description",
  rat."active"                AS "reInspectionType.attachments.active",
  rat."deleted"               AS "reInspectionType.attachments.deleted",
  rat."createdBy"             AS "reInspectionType.attachments.createdBy",
  rat."updatedBy"             AS "reInspectionType.attachments.updatedBy",
  rat."createdAt"             AS "reInspectionType.attachments.createdAt",
  rat."updatedAt"             AS "reInspectionType.attachments.updatedAt",
  rat."metaData"              AS "reInspectionType.attachments.metaData",
  rat."annotations"           AS "reInspectionType.attachments.annotations",
  rat."annotationTypes"       AS "reInspectionType.attachments.annotationTypes",
  rat."contextType"           AS "reInspectionType.attachments.contextType",
  rat."regulatedEntityId"     AS "reInspectionType.attachments.regulatedEntityId"
FROM entity
LEFT JOIN "regulatedentityservice"."regulatedEntityInspectionType" rit
  ON entity."id" = rit."regulatedEntityId"
  AND rit."deleted" = false
LEFT JOIN "regulatedentityservice"."regulatedEntityItem" rei
  ON rit."id" = rei."regulatedEntityInspectionTypeId"
  AND rei."deleted" = false
LEFT JOIN "regulatedentityservice"."attachments" rita
  ON rei."id" = rita."regulatedEntityItemId"
  AND rita."deleted" = false
LEFT JOIN "regulatedentityservice"."contacts" rc
  ON rit."id" = rc."regulatedEntityInspectionTypeId"
  AND rc."deleted" = false
LEFT JOIN "regulatedentityservice"."attachments" rat
  ON rit."id" = rat."regulatedEntityInspectionTypeId"
  AND rat."deleted" = false
  AND rat."regulatedEntityItemId" IS NULL;
