'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'regulatedEntityItem' },
      [
        {
          "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
          "clientCode": "C001",
          "externalId": "EXTI001",
          "regulatedEntityInspectionTypeId": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "regulatedEntityId": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "keyName": "Inspection Area",
          "keyValue": "Electrical",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-02-01T08:45:00Z",
          "updatedAt": "2024-02-10T14:20:00Z",
          "createdBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "updatedBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120"
        },
        {
          "id": "f0e1d2c3-b4a5-6789-0123-456789abcdef",
          "clientCode": "C002",
          "externalId": "EXTI002",
          "regulatedEntityInspectionTypeId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "regulatedEntityId": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "keyName": "Hazard Level",
          "keyValue": "High",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-20T10:15:30Z",
          "updatedAt": "2024-02-08T12:35:20Z",
          "createdBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "updatedBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a"
        },
        {
          "id": "7890abcd-1234-5678-90ab-cdef01234567",
          "clientCode": "C003",
          "externalId": "EXTI003",
          "regulatedEntityInspectionTypeId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "regulatedEntityId": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "keyName": "Equipment Type",
          "keyValue": "Boiler",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-15T07:30:10Z",
          "updatedAt": "2024-02-06T11:45:50Z",
          "createdBy": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "updatedBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0"
        },
        {
          "id": "01234567-89ab-cdef-0123-456789abcdef",
          "clientCode": "C004",
          "externalId": "EXTI004",
          "regulatedEntityInspectionTypeId": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "regulatedEntityId": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "keyName": "Material Type",
          "keyValue": "Hazardous",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-10T14:50:20Z",
          "updatedAt": "2024-02-04T16:25:40Z",
          "createdBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "updatedBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d"
        },
        {
          "id": "abcdef01-2345-6789-abcd-ef0123456789",
          "clientCode": "C005",
          "externalId": "EXTI005",
          "regulatedEntityInspectionTypeId": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "regulatedEntityId": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "keyName": "Safety Compliance",
          "keyValue": "Non-Compliant",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-05T09:20:30Z",
          "updatedAt": "2024-02-02T10:55:10Z",
          "createdBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9"
        },
        {
          "id": "e12f3456-78ab-90cd-ef01-23456789abcd",
          "clientCode": "C006",
          "externalId": "EXTI006",
          "regulatedEntityInspectionTypeId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "regulatedEntityId": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "keyName": "Fire Safety",
          "keyValue": "Pass",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-02-03T08:15:20Z",
          "updatedAt": "2024-02-12T12:45:30Z",
          "createdBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "updatedBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d"
        },
        {
          "id": "9abc0123-4567-89de-f012-3456789abcd0",
          "clientCode": "C007",
          "externalId": "EXTI007",
          "regulatedEntityInspectionTypeId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "regulatedEntityId": "9e24eb34-b5d1-4bbd-a786-24908e0c39fa",
          "keyName": "Air Quality",
          "keyValue": "Moderate",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-28T09:30:45Z",
          "updatedAt": "2024-02-11T10:15:50Z",
          "createdBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "updatedBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f"
        },
        {
          "id": "56789abc-d012-3456-78ef-9012345abcd0",
          "clientCode": "C008",
          "externalId": "EXTI008",
          "regulatedEntityInspectionTypeId": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "regulatedEntityId": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "keyName": "Ventilation System",
          "keyValue": "Operational",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-22T14:20:10Z",
          "updatedAt": "2024-02-09T16:40:25Z",
          "createdBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "updatedBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e"
        },
        {
          "id": "0123abcd-4567-89ef-0123-456789abcde0",
          "clientCode": "C009",
          "externalId": "EXTI009",
          "regulatedEntityInspectionTypeId": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "regulatedEntityId": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "keyName": "Structural Integrity",
          "keyValue": "Stable",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-18T11:10:35Z",
          "updatedAt": "2024-02-07T13:30:15Z",
          "createdBy": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9"
        },
        {
          "id": "abcde012-3456-789a-bcde-f01234567890",
          "clientCode": "C010",
          "externalId": "EXTI010",
          "regulatedEntityInspectionTypeId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "regulatedEntityId": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "keyName": "Waste Management",
          "keyValue": "Needs Improvement",
          "attributeMap": "{}",
          "active": true,
          "deleted": false,
          "createdAt": "2024-01-12T07:55:50Z",
          "updatedAt": "2024-02-05T09:40:10Z",
          "createdBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "updatedBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'regulatedEntityItem' },
      {
        id: [
          'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
          'f0e1d2c3-b4a5-6789-0123-456789abcdef',
          '7890abcd-1234-5678-90ab-cdef01234567',
          '01234567-89ab-cdef-0123-456789abcdef',
          'abcdef01-2345-6789-abcd-ef0123456789',
          'e12f3456-78ab-90cd-ef01-23456789abcd',
          '9abc0123-4567-89de-f012-3456789abcd0',
          '56789abc-d012-3456-78ef-9012345abcd0',
          '0123abcd-4567-89ef-0123-456789abcde0',
          'abcde012-3456-789a-bcde-f01234567890',
        ],
      }
    );
  },
};  