"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query(`CREATE OR REPLACE VIEW regulatedentityservice.lookupservicekeyname
      AS SELECT reit."inspectionTypeCode",
          reitems."regulatedEntityInspectionTypeId",
          reit."clientCode",
          reitems."keyName",
          reitems."keyValue",
          reit.name AS "metadata.name",
          reit.address AS "metadata.address",
          reit.state AS "metadata.state",
          reit.municipality AS "metadata.muncipality",
          reitems."regulatedEntityId" AS "metadata.regulatedEntityId",
          reit.id AS "metadata.reInspectionTypeId",
          reit."externalId" AS "metadata.reitExternalId",
          reitems.id AS "metadata.reItemId",
          reitems."externalId" AS "metadata.reItemExternalId",
          reitems."attributeMap" AS "metadata.attributeMap",
          respcontact.id AS "metadata.defaultRespContactId",
          respcontact.firstname AS "metadata.defaultRespContactFirstName",
          respcontact.lastname AS "metadata.defaultRespContactLastName",
          respcontact."workEmail" AS "metadata.defaultRespContactEmail",
          respcontact."workPhone" AS "metadata.defaultRespContactWorkPhone",
          compcontact.id AS "metadata.defaultCompContactId",
          compcontact.firstname AS "metadata.defaultCompContactFirstName",
          compcontact.lastname AS "metadata.defaultCompContactLastName",
          compcontact."workEmail" AS "metadata.defaultCompContactEmail",
          compcontact."workPhone" AS "metadata.defaultCompContactWorkPhone",
          reit."attributeMap" AS "metadata.reitAttributeMap",
          compcontact.title AS "metadata.defaultCompContactTitle",
          reitems."createdAt",
          date_trunc('second'::text, reitems."updatedAt") AS "updatedAt",
          reitems.id
         FROM regulatedentityservice."regulatedEntityItem" reitems
           JOIN regulatedentityservice."regulatedEntityInspectionType" reit ON reit.id = reitems."regulatedEntityInspectionTypeId"
           LEFT JOIN regulatedentityservice.contacts respcontact ON reit.id = respcontact."regulatedEntityInspectionTypeId" AND respcontact."contactType"::text = 'responsible'::text AND respcontact.deleted = false
           LEFT JOIN regulatedentityservice.contacts compcontact ON reit.id = compcontact."regulatedEntityInspectionTypeId" AND compcontact."contactType"::text = 'compliance'::text AND compcontact.deleted = false
        WHERE reit.deleted = false AND reitems.deleted = false;`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query(`DROP VIEW regulatedentityservice.lookupservicekeyname;`);
  },
};
