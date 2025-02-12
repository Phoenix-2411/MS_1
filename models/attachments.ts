import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface attachmentsAttributes {
  id?: string;
  regulatedEntityInspectionTypeId?: string;
  regulatedEntityItemId?: string;
  mimeType?: string;
  title?: string;
  description?: string;
  active?: Boolean;
  deleted?: Boolean;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  metaData?: JSON;
  annotations?: JSON;
  annotationTypes?: JSON;
  contextType?: string;
  regulatedEntityId?: string;
}


// Define the class
export class Attachments extends Model<
  attachmentsAttributes
> implements attachmentsAttributes {
  id?: string;
  regulatedEntityInspectionTypeId?: string;
  regulatedEntityItemId?: string;
  mimeType?: string;
  title?: string;
  description?: string;
  active?: Boolean;
  deleted?: Boolean;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  metaData?: JSON;
  annotations?: JSON;
  annotationTypes?: JSON;
  contextType?: string;
  regulatedEntityId?: string;

  static associate(models: any) {
    // Define associations here
  }
}

// Define the init method separately
export function initAttachments(sequelize: Sequelize) {
  Attachments.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      regulatedEntityInspectionTypeId: {
        type: DataTypes.UUID,
        references: { model: 'regulatedEntityInspectionType', key: 'id' }
      },
      regulatedEntityItemId: {
        type: DataTypes.UUID,
        references: { model: 'regulatedEntityItem', key: 'id' }
      },
      mimeType: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN
      },
      deleted: {
        type: DataTypes.BOOLEAN
      },
      createdBy: {
        type: DataTypes.UUID
      },
      updatedBy: {
        type: DataTypes.UUID
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      metaData: {
        type: DataTypes.JSONB
      },
      annotations: {
        type: DataTypes.JSONB
      },
      annotationTypes: {
        type: DataTypes.JSONB
      },
      contextType: {
        type: DataTypes.STRING
      },
      regulatedEntityId: {
        type: DataTypes.UUID,
        references: { model: 'regulatedEntity', key: 'id' }
      },
    },
    {
      sequelize,
      modelName: 'Attachments',
      tableName: 'attachments',
      schema: 'regulatedentityservice',
      timestamps: true
    }
  );
}
