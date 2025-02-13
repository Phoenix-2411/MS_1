'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'reitDetails' },
      [
        {
          "regulatedEntityInspectionTypeId": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "lastInspectionId": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
          "lastInspectionDate": "2024-12-15T10:30:00Z",
          "assignedToId": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "assignedToName": "John Doe",
          "assignedToStartDate": "2024-12-01T09:00:00Z",
          "assignedToTeamId": "9e7c5b1d-3a2f-6d4a-8b7f-1c5d2e3b4a9f",
          "createdBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "updatedBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "createdAt": "2024-12-01T08:00:00Z",
          "updatedAt": "2024-12-10T08:00:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "lastInspectionId": "f0e1d2c3-b4a5-6789-0123-456789abcdef",
          "lastInspectionDate": "2024-11-20T14:00:00Z",
          "assignedToId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "assignedToName": "Jane Smith",
          "assignedToStartDate": "2024-11-10T09:00:00Z",
          "assignedToTeamId": "5d7e3b1a-4c9f-2f6a-8b5d-1c3d7e4b5a6c",
          "createdBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "updatedBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "createdAt": "2024-11-05T08:00:00Z",
          "updatedAt": "2024-11-15T08:00:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "lastInspectionId": "7890abcd-1234-5678-90ab-cdef01234567",
          "lastInspectionDate": "2024-10-10T11:00:00Z",
          "assignedToId": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "assignedToName": "Alice Johnson",
          "assignedToStartDate": "2024-10-01T09:00:00Z",
          "assignedToTeamId": "2b3d6e7a-5c1d-4f9a-8b7c-3d7e4b5a9f2b",
          "createdBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "updatedBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "createdAt": "2024-10-01T08:00:00Z",
          "updatedAt": "2024-10-08T08:00:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "lastInspectionId": "01234567-89ab-cdef-0123-456789abcdef",
          "lastInspectionDate": "2024-09-25T16:00:00Z",
          "assignedToId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "assignedToName": "Bob Williams",
          "assignedToStartDate": "2024-09-15T09:00:00Z",
          "assignedToTeamId": "1b3d6e7a-5c9f-4f2a-8b7d-3c7d4e5a9f2b",
          "createdBy": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "updatedBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "createdAt": "2024-09-10T08:00:00Z",
          "updatedAt": "2024-09-20T08:00:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "lastInspectionId": "abcdef01-2345-6789-abcd-ef0123456789",
          "lastInspectionDate": "2024-08-30T13:00:00Z",
          "assignedToId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "assignedToName": "Charlie Davis",
          "assignedToStartDate": "2024-08-20T09:00:00Z",
          "assignedToTeamId": "3d6e7b1a-5c9f-4f2a-8b7d-1c3d7e4b5a6c",
          "createdBy": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "updatedBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "createdAt": "2024-08-15T08:00:00Z",
          "updatedAt": "2024-08-25T08:00:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "lastInspectionId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "lastInspectionDate": "2024-11-20T09:45:00Z",
          "assignedToId": "7b9f1d2a-4c3e-6d5a-8b2f-1c7d5e4a9b3f",
          "assignedToName": "Liam Walker",
          "assignedToStartDate": "2024-11-22T09:00:00Z",
          "assignedToTeamId": "2f3d7e4b-5a6c-9b1d-8c7d-1a6f2e3b4d5a",
          "createdBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "updatedBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "createdAt": "2024-11-20T09:50:00Z",
          "updatedAt": "2024-11-20T09:55:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "lastInspectionId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "lastInspectionDate": "2024-11-18T14:30:00Z",
          "assignedToId": "9e7c5b1d-3a2f-6d4a-8b7f-1c5d2e3b4a9f",
          "assignedToName": "Emma Thompson",
          "assignedToStartDate": "2024-11-19T08:00:00Z",
          "assignedToTeamId": "7e6c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "createdBy": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "updatedBy": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "createdAt": "2024-11-18T14:40:00Z",
          "updatedAt": "2024-11-18T14:45:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "lastInspectionId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "lastInspectionDate": "2024-11-15T10:15:00Z",
          "assignedToId": "5d7e3b1a-4c9f-2f6a-8b5d-1c3d7e4b5a6c",
          "assignedToName": "Olivia Davis",
          "assignedToStartDate": "2024-11-16T10:00:00Z",
          "assignedToTeamId": "2b3d6e7a-5c1d-4f9a-8b7c-3d7e4b5a9f2b",
          "createdBy": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "updatedBy": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "createdAt": "2024-11-15T10:20:00Z",
          "updatedAt": "2024-11-15T10:25:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "lastInspectionId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "lastInspectionDate": "2024-11-10T16:45:00Z",
          "assignedToId": "1b5d7e4a-3c9f-2f6a-8b7d-5c3d7e4b5a6c",
          "assignedToName": "Noah Wilson",
          "assignedToStartDate": "2024-11-12T09:30:00Z",
          "assignedToTeamId": "3d6e7b1a-5c9f-4f2a-8b7d-1c3d7e4b5a6c",
          "createdBy": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "updatedBy": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "createdAt": "2024-11-10T16:50:00Z",
          "updatedAt": "2024-11-10T16:55:00Z"
        },
        {
          "regulatedEntityInspectionTypeId": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "lastInspectionId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "lastInspectionDate": "2024-11-05T12:20:00Z",
          "assignedToId": "6d7e4b5a-3c9f-2f6a-8b1d-5c3d7e4b5a6c",
          "assignedToName": "Ava Martinez",
          "assignedToStartDate": "2024-11-07T08:45:00Z",
          "assignedToTeamId": "1b3d6e7a-5c9f-4f2a-8b7d-3c7d4e5a9f2b",
          "createdBy": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "updatedBy": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "createdAt": "2024-11-05T12:30:00Z",
          "updatedAt": "2024-11-05T12:35:00Z"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'reitDetails' },
      {
        id: [
          '3f8b2a47-df35-4f2b-b829-12c2d5b048a1',
          '9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22',
          'cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09',
          'f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3',
          '7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d',
          '3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c',
          '5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f',
          '6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b',
          'd8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e',
          'b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d',
        ],
      }
    );
  },
};  