'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'regulatedEntityInspectionType' },
      [
        {
          "id": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "clientCode": "C001",
          "externalId": "EXTI001",
          "regulatedEntityId": "2d6a7deb-dc31-4e7f-80b7-b49fde4e246b",
          "inspectionTypeCode": "IT001",
          "name": "Inspection Type 1",
          "address": "201 Inspection Ave",
          "latitude": 40.712776,
          "longitude": -74.005974,
          "state": "NY",
          "county": "County 1",
          "zip": "10001",
          "country": "USA",
          "municipality": "Municipality 1",
          "mailingAddress": "P.O. Box 201, NY",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-15T12:45:30Z",
          "updatedAt": "2024-02-10T14:32:15Z",
          "createdBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "updatedBy": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "regStartDate": "2024-02-01T08:00:00Z"
        },
        {
          "id": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "clientCode": "C002",
          "externalId": "EXTI002",
          "regulatedEntityId": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "inspectionTypeCode": "IT002",
          "name": "Inspection Type 2",
          "address": "202 Inspection Ave",
          "latitude": 34.052235,
          "longitude": -118.243683,
          "state": "CA",
          "county": "County 2",
          "zip": "90001",
          "country": "USA",
          "municipality": "Municipality 2",
          "mailingAddress": "P.O. Box 202, CA",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2023-12-22T09:15:20Z",
          "updatedAt": "2024-01-05T16:27:45Z",
          "createdBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "updatedBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "regStartDate": "2024-01-10T07:45:00Z"
        },
        {
          "id": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "clientCode": "C003",
          "externalId": "EXTI003",
          "regulatedEntityId": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "inspectionTypeCode": "IT003",
          "name": "Inspection Type 3",
          "address": "203 Inspection Ave",
          "latitude": 41.878113,
          "longitude": -87.629799,
          "state": "IL",
          "county": "County 3",
          "zip": "60601",
          "country": "USA",
          "municipality": "Municipality 3",
          "mailingAddress": "P.O. Box 203, IL",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-02-01T14:35:50Z",
          "updatedAt": "2024-02-08T10:12:30Z",
          "createdBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "updatedBy": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "regStartDate": "2024-02-02T09:30:00Z"
        },
        {
          "id": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "clientCode": "C004",
          "externalId": "EXTI004",
          "regulatedEntityId": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "inspectionTypeCode": "IT004",
          "name": "Inspection Type 4",
          "address": "204 Inspection Ave",
          "latitude": 29.760427,
          "longitude": -95.369804,
          "state": "TX",
          "county": "County 4",
          "zip": "77001",
          "country": "USA",
          "municipality": "Municipality 4",
          "mailingAddress": "P.O. Box 204, TX",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-20T11:50:10Z",
          "updatedAt": "2024-02-07T12:25:40Z",
          "createdBy": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "updatedBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "regStartDate": "2024-02-05T11:15:00Z"
        },
        {
          "id": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "clientCode": "C005",
          "externalId": "EXTI005",
          "regulatedEntityId": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "inspectionTypeCode": "IT005",
          "name": "Inspection Type 5",
          "address": "205 Inspection Ave",
          "latitude": 33.448376,
          "longitude": -112.074036,
          "state": "AZ",
          "county": "County 5",
          "zip": "85001",
          "country": "USA",
          "municipality": "Municipality 5",
          "mailingAddress": "P.O. Box 205, AZ",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2023-12-10T16:45:30Z",
          "updatedAt": "2024-01-18T09:55:20Z",
          "createdBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "regStartDate": "2024-01-25T10:00:00Z"
        },
        {
          "id": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "clientCode": "C006",
          "externalId": "EXTI006",
          "regulatedEntityId": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "inspectionTypeCode": "IT006",
          "name": "Inspection Type 6",
          "address": "206 Inspection Ave",
          "latitude": 39.739236,
          "longitude": -104.990251,
          "state": "CO",
          "county": "County 6",
          "zip": "80201",
          "country": "USA",
          "municipality": "Municipality 6",
          "mailingAddress": "P.O. Box 206, CO",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-12T14:30:20Z",
          "updatedAt": "2024-02-08T11:15:10Z",
          "createdBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "updatedBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "regStartDate": "2024-02-03T08:45:00Z"
        },
        {
          "id": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "clientCode": "C007",
          "externalId": "EXTI007",
          "regulatedEntityId": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "inspectionTypeCode": "IT007",
          "name": "Inspection Type 7",
          "address": "207 Inspection Ave",
          "latitude": 47.606209,
          "longitude": -122.332069,
          "state": "WA",
          "county": "County 7",
          "zip": "98101",
          "country": "USA",
          "municipality": "Municipality 7",
          "mailingAddress": "P.O. Box 207, WA",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-05T10:20:15Z",
          "updatedAt": "2024-02-07T09:55:30Z",
          "createdBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "updatedBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "regStartDate": "2024-02-07T07:20:00Z"
        },
        {
          "id": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "clientCode": "C008",
          "externalId": "EXTI008",
          "regulatedEntityId": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "inspectionTypeCode": "IT008",
          "name": "Inspection Type 8",
          "address": "208 Inspection Ave",
          "latitude": 25.761680,
          "longitude": -80.191790,
          "state": "FL",
          "county": "County 8",
          "zip": "33101",
          "country": "USA",
          "municipality": "Municipality 8",
          "mailingAddress": "P.O. Box 208, FL",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2023-12-30T12:10:50Z",
          "updatedAt": "2024-01-25T14:40:20Z",
          "createdBy": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "updatedBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "regStartDate": "2024-02-10T10:30:00Z"
        },
        {
          "id": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "clientCode": "C009",
          "externalId": "EXTI009",
          "regulatedEntityId": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "inspectionTypeCode": "IT009",
          "name": "Inspection Type 9",
          "address": "209 Inspection Ave",
          "latitude": 37.774929,
          "longitude": -122.419418,
          "state": "CA",
          "county": "County 9",
          "zip": "94101",
          "country": "USA",
          "municipality": "Municipality 9",
          "mailingAddress": "P.O. Box 209, CA",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2023-11-20T15:30:45Z",
          "updatedAt": "2024-02-06T13:15:10Z",
          "createdBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "updatedBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "regStartDate": "2024-02-12T09:10:00Z"
        },
        {
          "id": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "clientCode": "C010",
          "externalId": "EXTI010",
          "regulatedEntityId": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "inspectionTypeCode": "IT010",
          "name": "Inspection Type 10",
          "address": "210 Inspection Ave",
          "latitude": 32.776665,
          "longitude": -96.796989,
          "state": "TX",
          "county": "County 10",
          "zip": "75201",
          "country": "USA",
          "municipality": "Municipality 10",
          "mailingAddress": "P.O. Box 210, TX",
          "attributeMap": "{}",
          "clientMetaData": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-01T09:45:20Z",
          "updatedAt": "2024-02-09T10:35:15Z",
          "createdBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "regStartDate": "2024-02-14T07:00:00Z"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'regulatedEntityInspectionType' },
      {
        id: [
          '3f8b2a47-df35-4f2b-b829-12c2d5b048a1',
          '9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22',
          'cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09',
          'f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3',
          '7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d',
          'b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d',
          'd8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e',
          '3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c',
          '5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f',
          '6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b',
        ],
      }
    );
  },
};  