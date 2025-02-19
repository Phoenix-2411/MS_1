CREATE INDEX IF NOT EXISTS idx_regulatedEntity_deleted_state

  ON regulatedentityservice."regulatedEntity" ("state" DESC)

  WHERE "deleted" = false;

CREATE INDEX IF NOT EXISTS idx_reInspectionType_regEntityId_deleted

  ON regulatedentityservice."regulatedEntityInspectionType" ("regulatedEntityId")

  WHERE "deleted" = false;

CREATE INDEX IF NOT EXISTS idx_contacts_inspectionTypeId_deleted

  ON regulatedentityservice."contacts" ("regulatedEntityInspectionTypeId")

  WHERE "deleted" = false;

CREATE INDEX IF NOT EXISTS idx_attachments_inspTypeId_deleted_noItem

  ON regulatedentityservice."attachments" ("regulatedEntityInspectionTypeId")

  WHERE "deleted" = false

   AND "regulatedEntityItemId" IS NULL;

CREATE INDEX IF NOT EXISTS idx_regulatedEntity_clientCode_deleted
  ON regulatedentityservice."regulatedEntity" ("clientCode")
  WHERE "deleted" = false;

CREATE INDEX IF NOT EXISTS idx_reInspectionType_regEntityId_deleted_comp
  ON regulatedentityservice."regulatedEntityInspectionType" ("regulatedEntityId")
  WHERE "deleted" = false;

CREATE INDEX IF NOT EXISTS idx_attachments_itemid_deleted
  ON regulatedentityservice."attachments" ("regulatedEntityItemId")
  WHERE "deleted" = false;








