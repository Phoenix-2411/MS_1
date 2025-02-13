'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'regulatedentityservice', tableName: 'attachments' },
      [
        {
          "id": "a1e7b2c3-1234-4d2b-9a77-abcdef012345",
          "regulatedEntityInspectionTypeId": "3f8b2a47-df35-4f2b-b829-12c2d5b048a1",
          "regulatedEntityItemId": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
          "mimeType": "image/png",
          "title": "Inspection Report",
          "description": "Initial site inspection report",
          "active": true,
          "deleted": false,
          "createdBy": "2d6a7deb-dc31-4e7f-80b7-b49fde4e246b",
          "updatedBy": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "createdAt": "2024-02-01T08:30:00Z",
          "updatedAt": "2024-02-02T09:30:00Z",
          "metaData": '{ "size": "2MB", "resolution": "1024x768" }',
          "annotations": '{ "comments": ["Check compliance", "Follow up needed"] }',
          "annotationTypes": '{ "type": "Safety" }',
          "contextType": "Inspection",
          "regulatedEntityId": "63c7d0a1-9e46-47ca-9d47-19984374dcfa"
        },
        {
          "id": "b2e7b2c3-2345-4d2b-9a77-bcdef0123456",
          "regulatedEntityInspectionTypeId": "9a1d5e6c-7f48-4c2b-bbe2-5619a45c8f22",
          "regulatedEntityItemId": "f0e1d2c3-b4a5-6789-0123-456789abcdef",
          "mimeType": "application/pdf",
          "title": "Safety Compliance Guide",
          "description": "PDF guide for safety compliance",
          "active": true,
          "deleted": false,
          "createdBy": "9e24eb34-b5d1-4bbd-a786-24908e0c39fa",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "createdAt": "2024-02-03T10:45:00Z",
          "updatedAt": "2024-02-04T11:45:00Z",
          "metaData": '{ "pages": 12, "fileSize": "5MB" }',
          "annotations": '{ "comments": ["Update annually"] }',
          "annotationTypes": '{ "type": "Regulatory" }',
          "contextType": "Documentation",
          "regulatedEntityId": "2d6a7deb-dc31-4e7f-80b7-b49fde4e246b"
        },
        {
          "id": "c3e7b2c3-3456-4d2b-9a77-cdef01234567",
          "regulatedEntityInspectionTypeId": "cf3d6e9f-7b21-4a09-83b3-2d47f2e34a09",
          "regulatedEntityItemId": "7890abcd-1234-5678-90ab-cdef01234567",
          "mimeType": "image/jpeg",
          "title": "Equipment Check",
          "description": "Photo evidence of equipment inspection",
          "active": true,
          "deleted": false,
          "createdBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "updatedBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "createdAt": "2024-02-05T12:00:00Z",
          "updatedAt": "2024-02-06T13:00:00Z",
          "metaData": '{ "size": "3MB", "camera": "Canon EOS R5" }',
          "annotations": '{ "comments": ["Looks in good condition"] }',
          "annotationTypes": '{ "type": "Visual" }',
          "contextType": "Inspection",
          "regulatedEntityId": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573"
        },
        {
          "id": "d4e7b2c3-4567-4d2b-9a77-def012345678",
          "regulatedEntityInspectionTypeId": "f4d8b7c3-928a-4b6a-90fa-3f2d7e9a12b3",
          "regulatedEntityItemId": "01234567-89ab-cdef-0123-456789abcdef",
          "mimeType": "video/mp4",
          "title": "Safety Drill",
          "description": "Recorded safety drill session",
          "active": true,
          "deleted": false,
          "createdBy": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "updatedBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "createdAt": "2024-02-07T14:30:00Z",
          "updatedAt": "2024-02-08T15:30:00Z",
          "metaData": '{ "duration": "15min", "fileSize": "50MB" }',
          "annotations": '{ "comments": ["Emergency response tested"] }',
          "annotationTypes": '{ "type": "Training" }',
          "contextType": "Safety",
          "regulatedEntityId": "9e24eb34-b5d1-4bbd-a786-24908e0c39fa"
        },
        {
          "id": "e5e7b2c3-5678-4d2b-9a77-ef0123456789",
          "regulatedEntityInspectionTypeId": "7e1a5b6d-8f4c-42e5-935a-4d2f8c7b1a9d",
          "regulatedEntityItemId": "abcdef01-2345-6789-abcd-ef0123456789",
          "mimeType": "text/plain",
          "title": "Inspector Notes",
          "description": "Handwritten notes from inspection",
          "active": true,
          "deleted": false,
          "createdBy": "6fd982c4-e2f1-4ea2-a61b-8d42a41df8b5",
          "updatedBy": "63c7d0a1-9e46-47ca-9d47-19984374dcfa",
          "createdAt": "2024-02-09T16:00:00Z",
          "updatedAt": "2024-02-10T17:00:00Z",
          "metaData": '{ "pages": 3, "handwriting": "Cursive" }',
          "annotations": '{ "comments": ["To be digitized"] }',
          "annotationTypes": '{ "type": "Documentation" }',
          "contextType": "Inspection",
          "regulatedEntityId": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9"
        },
        {
          "id": "f6e7b2c3-6789-4d2b-9a77-0123456789ab",
          "regulatedEntityInspectionTypeId": "b5a1d8c4-2f7b-4a65-9e7a-3d6c1f8b2e3d",
          "regulatedEntityItemId": "e12f3456-78ab-90cd-ef01-23456789abcd",
          "mimeType": "application/vnd.ms-excel",
          "title": "Compliance Checklist",
          "description": "Excel sheet with compliance points",
          "active": true,
          "deleted": false,
          "createdBy": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120",
          "updatedBy": "79b5a16c-ded0-4b20-9e55-7d127a5d764a",
          "createdAt": "2024-02-11T08:30:00Z",
          "updatedAt": "2024-02-12T09:30:00Z",
          "metaData": '{ "sheets": 5, "fileSize": "1MB" }',
          "annotations": '{ "comments": ["Review required"] }',
          "annotationTypes": '{ "type": "Audit" }',
          "contextType": "Regulatory",
          "regulatedEntityId": "8c7a2d3f-485c-49c8-8b73-02b74f5b4120"
        },
        {
          "id": "805b3680-a9e5-4ec0-b265-a974cbe44e73",
          "regulatedEntityInspectionTypeId": "d8e3b2f6-4c5a-4a7d-9e8b-1f2c3d6b5a7e",
          "regulatedEntityItemId": "9abc0123-4567-89de-f012-3456789abcd0",
          "mimeType": "audio/mpeg",
          "title": "Inspection Audio Notes",
          "description": "Audio recording of site inspection",
          "active": true,
          "deleted": false,
          "createdBy": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c",
          "updatedBy": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0",
          "createdAt": "2024-02-13T10:45:00Z",
          "updatedAt": "2024-02-14T11:45:00Z",
          "metaData": '{ "duration": "20min", "fileSize": "10MB" }',
          "annotations": '{ "comments": ["Transcription needed"] }',
          "annotationTypes": '{ "type": "Audio" }',
          "contextType": "Inspection",
          "regulatedEntityId": "79b5a16c-ded0-4b20-9e55-7d127a5d764a"
        },
        {
          "id": "bd685894-e855-414f-89f4-9718cb934109",
          "regulatedEntityInspectionTypeId": "3a6d9f2b-5e7c-4c8a-9b1d-2f3d7e4b5a6c",
          "regulatedEntityItemId": "56789abc-d012-3456-78ef-9012345abcd0",
          "mimeType": "image/png",
          "title": "Fire Safety Equipment",
          "description": "Image showing fire extinguisher placement",
          "active": true,
          "deleted": false,
          "createdBy": "2d6a7deb-dc31-4e7f-80b7-b49fde4e246b",
          "updatedBy": "5f3ea4bb-3b36-4d43-bbee-3cd55a9f1573",
          "createdAt": "2024-02-15T12:00:00Z",
          "updatedAt": "2024-02-16T13:00:00Z",
          "metaData": '{ "size": "2.5MB", "resolution": "1080x720" }',
          "annotations": '{ "comments": ["Equipment verified"] }',
          "annotationTypes": '{ "type": "Visual" }',
          "contextType": "Safety",
          "regulatedEntityId": "fa3e94b8-f2a9-45d0-8490-4236b7b7db3c"
        },
        {
          "id": "d82e39c6-aa2b-4b33-97d2-ca4c5b8e2ad2",
          "regulatedEntityInspectionTypeId": "5b1d2f3a-7e6c-4d8a-9f2b-3c7d4e5a6b9f",
          "regulatedEntityItemId": "0123abcd-4567-89ef-0123-456789abcde0",
          "mimeType": "application/json",
          "title": "Sensor Data Log",
          "description": "JSON log of temperature sensors",
          "active": true,
          "deleted": false,
          "createdBy": "9e24eb34-b5d1-4bbd-a786-24908e0c39fa",
          "updatedBy": "3b9d8d3b-d4d2-49e1-b10e-7df8044a05f9",
          "createdAt": "2024-02-17T14:30:00Z",
          "updatedAt": "2024-02-18T15:30:00Z",
          "metaData": '{ "entries": 150, "fileSize": "500KB" }',
          "annotations": '{ "comments": ["Reviewed for anomalies"] }',
          "annotationTypes": '{ "type": "Data" }',
          "contextType": "Monitoring",
          "regulatedEntityId": "1e2a81cb-1a7f-4f9a-98df-cdf5eb2346e0"
        },
        {
          "id": "9b407bbf-2882-4e12-8235-f16450c18087",
          "regulatedEntityInspectionTypeId": "6e7c5b1d-2f3a-4d9f-8a6c-3d7e4b5a9f2b",
          "regulatedEntityItemId": "abcde012-3456-789a-bcde-f01234567890",
          "mimeType": "application/msword",
          "title": "Audit Summary Report",
          "description": "Word document summarizing the audit findings",
          "active": true,
          "deleted": false,
          "createdBy": "6fd982c4-e2f1-4ea2-a61b-8d42a41df8b5",
          "updatedBy": "63c7d0a1-9e46-47ca-9d47-19984374dcfa",
          "createdAt": "2024-02-19T16:00:00Z",
          "updatedAt": "2024-02-20T17:00:00Z",
          "metaData": '{ "pages": 10, "fileSize": "2MB" }',
          "annotations": '{ "comments": ["Final review pending"] }',
          "annotationTypes": '{ "type": "Audit" }',
          "contextType": "Regulatory",
          "regulatedEntityId": "6fd982c4-e2f1-4ea2-a61b-8d42a41df8b5"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'regulatedentityservice', tableName: 'attachments' },
      {
        id: [
          'a1e7b2c3-1234-4d2b-9a77-abcdef012345',
          'b2e7b2c3-2345-4d2b-9a77-bcdef0123456',
          'c3e7b2c3-3456-4d2b-9a77-cdef01234567',
          'd4e7b2c3-4567-4d2b-9a77-def012345678',
          'e5e7b2c3-5678-4d2b-9a77-ef0123456789',
          'f6e7b2c3-6789-4d2b-9a77-0123456789ab',
          '805b3680-a9e5-4ec0-b265-a974cbe44e73',
          'bd685894-e855-414f-89f4-9718cb934109',
          'd82e39c6-aa2b-4b33-97d2-ca4c5b8e2ad2',
          '9b407bbf-2882-4e12-8235-f16450c18087',
        ],
      }
    );
  },
};  