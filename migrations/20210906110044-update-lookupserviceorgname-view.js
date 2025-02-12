"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query(`CREATE OR REPLACE VIEW regulatedentityservice.lookupserviceorgname
      AS SELECT DISTINCT ON (reit.id) reit."inspectionTypeCode",
          reit.id AS "regulatedEntityInspectionTypeId",
          reit."clientCode",
          'orgname'::character varying(255) AS "keyName",
          reit.name AS "keyValue",
          json_build_object('name', reit.name, 'address', reit.address, 'state', reit.state, 'muncipality', reit.municipality, 'regulatedEntityId', reit."regulatedEntityId", 'reInspectionTypeId', reit.id, 'reitExternalId', reit."externalId", 'attributeMap', reit."attributeMap", 'defaultRespContactId', respcontact.id, 'defaultRespContactFirstName', respcontact.firstname, 'defaultRespContactLastName', respcontact.lastname, 'defaultRespContactEmail', respcontact."workEmail", 'defaultRespContactWorkPhone', respcontact."workPhone", 'defaultCompContactId', compcontact.id, 'defaultCompContactFirstName', compcontact.firstname, 'defaultCompContactLastName', compcontact.lastname, 'defaultCompContactEmail', compcontact."workEmail", 'defaultCompContactWorkPhone', compcontact."workPhone") AS metadata,
          reit."createdAt",
          reit."updatedAt"
         FROM regulatedentityservice."regulatedEntityInspectionType" reit
           LEFT JOIN regulatedentityservice.contacts respcontact ON reit.id = respcontact."regulatedEntityInspectionTypeId" AND respcontact."contactType"::text = 'responsible'::text AND respcontact.deleted = false
           LEFT JOIN regulatedentityservice.contacts compcontact ON reit.id = compcontact."regulatedEntityInspectionTypeId" AND compcontact."contactType"::text = 'compliance'::text AND compcontact.deleted = false
        WHERE reit.deleted = false
        ORDER BY reit.id, respcontact."updatedAt" DESC, compcontact."updatedAt" DESC;`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query(`CREATE OR REPLACE VIEW regulatedentityservice.lookupserviceorgname
      AS SELECT reit."inspectionTypeCode",
          reit.id AS "regulatedEntityInspectionTypeId",
          reit."clientCode",
          'orgname'::character varying(255) AS "keyName",
          reit.name AS "keyValue",
          json_build_object('name', reit.name, 'address', reit.address, 'state', reit.state, 'muncipality', reit.municipality, 'regulatedEntityId', reit."regulatedEntityId", 'reInspectionTypeId', reit.id, 'reitExternalId', reit."externalId", 'attributeMap', reit."attributeMap", 'defaultRespContactId', respcontact.id, 'defaultRespContactFirstName', respcontact.firstname, 'defaultRespContactLastName', respcontact.lastname, 'defaultRespContactEmail', respcontact."workEmail", 'defaultRespContactWorkPhone', respcontact."workPhone", 'defaultCompContactId', compcontact.id, 'defaultCompContactFirstName', compcontact.firstname, 'defaultCompContactLastName', compcontact.lastname, 'defaultCompContactEmail', compcontact."workEmail", 'defaultCompContactWorkPhone', compcontact."workPhone") AS metadata,
          reit."createdAt",
          reit."updatedAt"
         FROM regulatedentityservice."regulatedEntityInspectionType" reit
           LEFT JOIN regulatedentityservice.contacts respcontact ON reit.id = respcontact."regulatedEntityInspectionTypeId" AND respcontact."contactType"::text = 'Responsible'::text AND respcontact."default" = true
           LEFT JOIN regulatedentityservice.contacts compcontact ON reit.id = compcontact."regulatedEntityInspectionTypeId" AND compcontact."contactType"::text = 'Compliance'::text AND compcontact."default" = true;`);
  },
};
