'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'covidData' },
      [
        {
          "id": 1,
          "iso2": "US",
          "iso3": "USA",
          "code3": 840,
          "FIPS": 36061,
          "county": "New York",
          "state": "New York",
          "country": "United States",
          "lat": 40.7128,
          "long": -74.006,
          "combinedKey": "New York, New York, United States",
          "date": "2024-02-10",
          "count": 1523,
          "createdAt": "2024-02-10T08:00:00Z"
        },
        {
          "id": 2,
          "iso2": "CA",
          "iso3": "CAN",
          "code3": 124,
          "FIPS": 35,
          "county": "Toronto",
          "state": "Ontario",
          "country": "Canada",
          "lat": 43.65107,
          "long": -79.347015,
          "combinedKey": "Toronto, Ontario, Canada",
          "date": "2024-02-10",
          "count": 784,
          "createdAt": "2024-02-10T08:05:00Z"
        },
        {
          "id": 3,
          "iso2": "GB",
          "iso3": "GBR",
          "code3": 826,
          "FIPS": null,
          "county": "London",
          "state": "England",
          "country": "United Kingdom",
          "lat": 51.5074,
          "long": -0.1278,
          "combinedKey": "London, England, United Kingdom",
          "date": "2024-02-10",
          "count": 1023,
          "createdAt": "2024-02-10T08:10:00Z"
        },
        {
          "id": 4,
          "iso2": "IN",
          "iso3": "IND",
          "code3": 356,
          "FIPS": null,
          "county": "Mumbai",
          "state": "Maharashtra",
          "country": "India",
          "lat": 19.076,
          "long": 72.8777,
          "combinedKey": "Mumbai, Maharashtra, India",
          "date": "2024-02-10",
          "count": 2134,
          "createdAt": "2024-02-10T08:15:00Z"
        },
        {
          "id": 5,
          "iso2": "AU",
          "iso3": "AUS",
          "code3": 36,
          "FIPS": null,
          "county": "Sydney",
          "state": "New South Wales",
          "country": "Australia",
          "lat": -33.8688,
          "long": 151.2093,
          "combinedKey": "Sydney, New South Wales, Australia",
          "date": "2024-02-10",
          "count": 965,
          "createdAt": "2024-02-10T08:20:00Z"
        },
        {
          "id": 6,
          "iso2": "FR",
          "iso3": "FRA",
          "code3": 250,
          "FIPS": null,
          "county": "Paris",
          "state": "Île-de-France",
          "country": "France",
          "lat": 48.8566,
          "long": 2.3522,
          "combinedKey": "Paris, Île-de-France, France",
          "date": "2024-02-11",
          "count": 1345,
          "createdAt": "2024-02-11T08:25:00Z"
        },
        {
          "id": 7,
          "iso2": "DE",
          "iso3": "DEU",
          "code3": 276,
          "FIPS": null,
          "county": "Berlin",
          "state": "Berlin",
          "country": "Germany",
          "lat": 52.52,
          "long": 13.405,
          "combinedKey": "Berlin, Berlin, Germany",
          "date": "2024-02-11",
          "count": 987,
          "createdAt": "2024-02-11T08:30:00Z"
        },
        {
          "id": 8,
          "iso2": "JP",
          "iso3": "JPN",
          "code3": 392,
          "FIPS": null,
          "county": "Tokyo",
          "state": "Tokyo",
          "country": "Japan",
          "lat": 35.6895,
          "long": 139.6917,
          "combinedKey": "Tokyo, Tokyo, Japan",
          "date": "2024-02-11",
          "count": 1742,
          "createdAt": "2024-02-11T08:35:00Z"
        },
        {
          "id": 9,
          "iso2": "IT",
          "iso3": "ITA",
          "code3": 380,
          "FIPS": null,
          "county": "Rome",
          "state": "Lazio",
          "country": "Italy",
          "lat": 41.9028,
          "long": 12.4964,
          "combinedKey": "Rome, Lazio, Italy",
          "date": "2024-02-11",
          "count": 678,
          "createdAt": "2024-02-11T08:40:00Z"
        },
        {
          "id": 10,
          "iso2": "BR",
          "iso3": "BRA",
          "code3": 76,
          "FIPS": null,
          "county": "São Paulo",
          "state": "São Paulo",
          "country": "Brazil",
          "lat": -23.5505,
          "long": -46.6333,
          "combinedKey": "São Paulo, São Paulo, Brazil",
          "date": "2024-02-11",
          "count": 1456,
          "createdAt": "2024-02-11T08:45:00Z"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'covidData' },
      {
        id: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',

        ],
      }
    );
  },
};  