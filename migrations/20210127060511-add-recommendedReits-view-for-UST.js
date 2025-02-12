'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW regulatedentityservice."recommendedReitsUST"
      AS SELECT "reIt".id,
          "reIt"."clientCode",
          "reIt"."externalId",
          "reIt"."regulatedEntityId",
          "reIt"."inspectionTypeCode",
          "reIt".name,
          "reIt".address,
          "reIt".latitude,
          "reIt".longitude,
          "reIt".state,
          "reIt".county,
          "reIt".municipality,
          "reIt"."mailingAddress",
          "reIt"."attributeMap",
          "reIt"."clientMetaData",
          "reIt".zip,
          "reIt".country,
          "reIt".active,
          "reIt".deleted,
          "reIt"."createdBy",
          "reIt"."updatedBy",
          "reIt"."createdAt",
          "reIt"."updatedAt",
          "reIt"."regStartDate",
          jsonb_build_object('name', re.name) AS "regulatedEntity",
          jsonb_build_object('lastInspectionId', "reitDetail"."lastInspectionId", 'lastInspectionDate', to_char("reitDetail"."lastInspectionDate", 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'::text), 'assignedToName', "reitDetail"."assignedToName", 'assignedToStartDate', to_char("reitDetail"."assignedToStartDate", 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'::text), 'assignedToTeamId', "reitDetail"."assignedToTeamId", 'assignedToId', "reitDetail"."assignedToId") AS "reitDetail"
        FROM regulatedentityservice."regulatedEntityInspectionType" "reIt"
          LEFT JOIN regulatedentityservice."regulatedEntity" re ON "reIt"."regulatedEntityId" = re.id AND re.deleted = false
          LEFT JOIN regulatedentityservice."reitDetails" "reitDetail" ON "reIt".id = "reitDetail"."regulatedEntityInspectionTypeId"
          where "reIt"."inspectionTypeCode" = 'UST' and (
        (
          ("reIt"."attributeMap" ::json->>'federallyRegulated') is not null and 
          bool("reIt"."attributeMap" ::json->>'federallyRegulated') = true and 
          ("reitDetail"."lastInspectionDate" < now() - interval '5 year' or "reitDetail"."lastInspectionDate" is null)
        )
        or
        (
          (("reIt"."attributeMap" ::json->>'federallyRegulated') is null or bool("reIt"."attributeMap" ::json->>'federallyRegulated') = false) and 
          ("reitDetail"."lastInspectionDate" < now() - interval '3 year' or "reitDetail"."lastInspectionDate" is null)
        )
      );
      `)
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`
        DROP VIEW IF EXISTS regulatedentityservice."recommendedReitsUST";
      `)
    ])
  }
};
