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
          json_build_object('name', reit.name, 'address', reit.address, 'state', reit.state, 'muncipality', reit.municipality, 'regulatedEntityId', reitems."regulatedEntityId", 'reInspectionTypeId', reit.id, 'reitExternalId', reit."externalId", 'reItemId', reitems.id, 'reItemExternalId', reitems."externalId", 'attributeMap', reitems."attributeMap", 'defaultRespContactId', respcontact.id, 'defaultRespContactFirstName', respcontact.firstname, 'defaultRespContactLastName', respcontact.lastname, 'defaultRespContactEmail', respcontact."workEmail", 'defaultRespContactWorkPhone', respcontact."workPhone", 'defaultCompContactId', compcontact.id, 'defaultCompContactFirstName', compcontact.firstname, 'defaultCompContactLastName', compcontact.lastname, 'defaultCompContactEmail', compcontact."workEmail", 'defaultCompContactWorkPhone', compcontact."workPhone", 'reitAttributeMap', reit."attributeMap") AS metadata,
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
      .query(`CREATE OR REPLACE VIEW regulatedentityservice.lookupservicekeyname
      AS SELECT reit."inspectionTypeCode",
          reitems."regulatedEntityInspectionTypeId",
          reit."clientCode",
          reitems."keyName",
          reitems."keyValue",
          json_build_object('name', reit.name, 'address', reit.address, 'state', reit.state, 'muncipality', reit.municipality, 'regulatedEntityId', reitems."regulatedEntityId", 'reInspectionTypeId', reit.id, 'reitExternalId', reit."externalId", 'reItemId', reitems.id, 'reItemExternalId', reitems."externalId", 'attributeMap', reitems."attributeMap", 'defaultRespContactId', respcontact.id, 'defaultRespContactFirstName', respcontact.firstname, 'defaultRespContactLastName', respcontact.lastname, 'defaultRespContactEmail', respcontact."workEmail", 'defaultRespContactWorkPhone', respcontact."workPhone", 'defaultCompContactId', compcontact.id, 'defaultCompContactFirstName', compcontact.firstname, 'defaultCompContactLastName', compcontact.lastname, 'defaultCompContactEmail', compcontact."workEmail", 'defaultCompContactWorkPhone', compcontact."workPhone", 'reitAttributeMap', reit."attributeMap") AS metadata,
          reitems."createdAt",
          date_trunc('second'::text, reitems."updatedAt") AS "updatedAt"
         FROM regulatedentityservice."regulatedEntityItem" reitems
           JOIN regulatedentityservice."regulatedEntityInspectionType" reit ON reit.id = reitems."regulatedEntityInspectionTypeId"
           LEFT JOIN regulatedentityservice.contacts respcontact ON reit.id = respcontact."regulatedEntityInspectionTypeId" AND respcontact."contactType"::text = 'Responsible'::text AND respcontact."default" = true
           LEFT JOIN regulatedentityservice.contacts compcontact ON reit.id = compcontact."regulatedEntityInspectionTypeId" AND compcontact."contactType"::text = 'Compliance'::text AND compcontact."default" = true;`);
  },
};
