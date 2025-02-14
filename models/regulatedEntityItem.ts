import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface RegulatedEntityItemAttributes {
  id?: string;
  clientCode: string;
  externalId?: string;
  regulatedEntityInspectionTypeId: string;
  regulatedEntityId?: string;
  keyName: string;
  keyValue?: string;
  attributeMap?: JSON;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface RegulatedEntityItemAttachmentAttributes {
  id: string;
  inspectionId: string;
  contextType: string;
  mimeType: string;
  title: string;
  description: string;
  active: Boolean;
  deleted: Boolean;
  annotations?: JSON;
  annotationTypes?: JSON;
}

// Define the class
export class RegulatedEntityItem extends Model<
  RegulatedEntityItemAttributes
> implements RegulatedEntityItemAttributes {
  id?: string;
  clientCode!: string;
  externalId?: string;
  regulatedEntityInspectionTypeId!: string;
  regulatedEntityId?: string;
  keyName!: string;
  keyValue?: string;
  attributeMap?: JSON;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;

  static associate(models: any) {
    // Define associations here
  }
}

// Define the init method separately
export function initRegulatedEntityItem(sequelize: Sequelize) {
  RegulatedEntityItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      clientCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      externalId: {
        type: DataTypes.STRING,
      },
      regulatedEntityInspectionTypeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'regulatedEntityInspectionType',
          key: 'id'
        }
      },
      regulatedEntityId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'regulatedEntity',
          key: 'id'
        }
      },
      keyName: {
        type: DataTypes.STRING
      },
      keyValue: {
        type: DataTypes.STRING
      },
      attributeMap: {
        type: DataTypes.JSONB
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      }
    },
    {
      sequelize,
      modelName: 'RegulatedEntityItem',
      tableName: 'regulatedEntityItem',
      schema: 'regulatedentityservice',
      timestamps: true
    }
  );
}
