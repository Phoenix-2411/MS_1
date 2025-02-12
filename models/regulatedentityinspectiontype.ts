import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface RegulatedEntityInspectionTypeAttributes {
  id: string;
  clientCode: string;
  externalId?: string;
  regulatedEntityId: string;
  inspectionTypeCode: string;
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  state: string;
  county?: string;
  zip?: string;
  country?: string;
  municipality?: string;
  mailingAddress: string;
  attributeMap?: JSON;
  clientMetaData?: JSON;
  active: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  regStartDate: Date;
}

// Define the class
export class RegulatedEntityInspectionType extends Model<
  RegulatedEntityInspectionTypeAttributes
> implements RegulatedEntityInspectionTypeAttributes {
  id!: string;
  clientCode!: string;
  externalId?: string;
  regulatedEntityId!: string;
  inspectionTypeCode!: string;
  name!: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  state!: string;
  county?: string;
  zip?: string;
  country?: string;
  municipality?: string;
  mailingAddress!: string;
  attributeMap?: JSON;
  clientMetaData?: JSON;
  active!: boolean;
  deleted!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  createdBy?: string;
  updatedBy?: string;
  regStartDate!: Date;

  static associate(models: any) {
    // Define associations here
  }
}

// Define the init method separately
export function initRegulatedEntityInspectionType(sequelize: Sequelize) {
  RegulatedEntityInspectionType.init(
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
        type: DataTypes.STRING
      },
      regulatedEntityId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'regulatedEntity', key: 'id' }
      },
      inspectionTypeCode: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT
      },
      latitude: {
        type: DataTypes.FLOAT
      },
      longitude: {
        type: DataTypes.FLOAT
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      county: {
        type: DataTypes.STRING
      },
      municipality: {
        type: DataTypes.STRING
      },
      mailingAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      attributeMap: {
        type: DataTypes.JSONB
      },
      clientMetaData: {
        type: DataTypes.JSONB
      },
      zip: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
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
      },
      regStartDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
      sequelize,
      modelName: 'RegulatedEntityInspectionType',
      tableName: 'regulatedEntityInspectionType',
      timestamps: true
    }
  );
}
