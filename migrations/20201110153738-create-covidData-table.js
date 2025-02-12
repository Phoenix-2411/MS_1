"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "covidData",
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        iso2: {
          type: Sequelize.STRING,
        },
        iso3: {
          type: Sequelize.STRING,
        },
        code3: {
          type: Sequelize.INTEGER,
        },
        FIPS: {
          type: Sequelize.INTEGER,
        },
        county: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        lat: {
          type: Sequelize.FLOAT,
        },
        long: {
          type: Sequelize.FLOAT,
        },
        combinedKey: {
          type: Sequelize.STRING,
        },
        date: {
          allowNull: false,
          type: Sequelize.DATEONLY,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        count: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        }
      },
      {
        schema: "regulatedentityservice",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "covidData",
      schema: "regulatedentityservice",
    });
  },
};
