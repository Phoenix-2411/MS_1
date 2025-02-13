'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'riskMetric' },
      [
        {
          "id": "b1a2c3d4-e5f6-7890-1234-56789abcdef0",
          "regulatedEntityInspectionTypeId": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "category": "Health & Safety",
          "value": 85.5,
          "createdBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "updatedBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "createdAt": "2024-02-10T08:00:00Z",
          "updatedAt": "2024-02-11T08:00:00Z"
        },
        {
          "id": "c2b3d4e5-f678-9012-3456-789abcdef012",
          "regulatedEntityInspectionTypeId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "category": "Environmental Impact",
          "value": 72.3,
          "createdBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "updatedBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "createdAt": "2024-02-09T08:30:00Z",
          "updatedAt": "2024-02-10T08:30:00Z"
        },
        {
          "id": "d3e4f5a6-b789-0123-4567-89abcdef0123",
          "regulatedEntityInspectionTypeId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "category": "Regulatory Compliance",
          "value": 90.0,
          "createdBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "updatedBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "createdAt": "2024-02-08T09:00:00Z",
          "updatedAt": "2024-02-09T09:00:00Z"
        },
        {
          "id": "e4f5a6b7-c890-1234-5678-9abcdef01234",
          "regulatedEntityInspectionTypeId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "category": "Financial Risk",
          "value": 65.7,
          "createdBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "updatedBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "createdAt": "2024-02-07T09:30:00Z",
          "updatedAt": "2024-02-08T09:30:00Z"
        },
        {
          "id": "f5a6b7c8-d901-2345-6789-abcdef012345",
          "regulatedEntityInspectionTypeId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "category": "Operational Efficiency",
          "value": 78.9,
          "createdBy": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "updatedBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "createdAt": "2024-02-06T10:00:00Z",
          "updatedAt": "2024-02-07T10:00:00Z"
        },
        {
          "id": "6f32fc58-f8bd-4c24-a6dc-c5ad50ff80b1",
          "regulatedEntityInspectionTypeId": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "category": "Cybersecurity",
          "value": 88.2,
          "createdBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "updatedBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "createdAt": "2024-02-05T10:30:00Z",
          "updatedAt": "2024-02-06T10:30:00Z"
        },
        {
          "id": "7a46a62c-c0e4-4554-ace9-1faed90d4c90",
          "regulatedEntityInspectionTypeId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "category": "Supply Chain Risk",
          "value": 74.6,
          "createdBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "updatedBy": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "createdAt": "2024-02-04T11:00:00Z",
          "updatedAt": "2024-02-05T11:00:00Z"
        },
        {
          "id": "4ce21873-2c0d-4c06-b392-23cd86505fd2",
          "regulatedEntityInspectionTypeId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "category": "Legal Compliance",
          "value": 95.1,
          "createdBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "updatedBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "createdAt": "2024-02-03T11:30:00Z",
          "updatedAt": "2024-02-04T11:30:00Z"
        },
        {
          "id": "6871929c-06b8-4230-8619-b817e5f0e5e4",
          "regulatedEntityInspectionTypeId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "category": "Reputation Risk",
          "value": 69.3,
          "createdBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "updatedBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "createdAt": "2024-02-02T12:00:00Z",
          "updatedAt": "2024-02-03T12:00:00Z"
        },
        {
          "id": "4112135c-622f-4c90-98ba-d0f91b6cd90b",
          "regulatedEntityInspectionTypeId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "category": "Workplace Safety",
          "value": 82.7,
          "createdBy": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "updatedBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "createdAt": "2024-02-01T12:30:00Z",
          "updatedAt": "2024-02-02T12:30:00Z"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'riskMetric' },
      {
        id: [
          'b1a2c3d4-e5f6-7890-1234-56789abcdef0',
          'c2b3d4e5-f678-9012-3456-789abcdef012',
          'd3e4f5a6-b789-0123-4567-89abcdef0123',
          'e4f5a6b7-c890-1234-5678-9abcdef01234',
          'f5a6b7c8-d901-2345-6789-abcdef012345',
          '6f32fc58-f8bd-4c24-a6dc-c5ad50ff80b1',
          '7a46a62c-c0e4-4554-ace9-1faed90d4c90',
          '4ce21873-2c0d-4c06-b392-23cd86505fd2',
          '6871929c-06b8-4230-8619-b817e5f0e5e4',
          '4112135c-622f-4c90-98ba-d0f91b6cd90b',
        ],
      }
    );
  },
};  