import { DataTypes, Model, UUIDV4, Sequelize } from 'sequelize';

export interface RegulatedEntityAttributes {
  id: string;
  clientCode: string;
  entityType?: string;
  externalId?: string;
  name: string;
  address?: string;
  zip?: string;
  country?: string;
  state: string;
  county?: string;
  municipality?: string;
  latitude?: number;
  longitude?: number;
  clientMetaData: any;
  owners: string;
  attributeMap: any;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export class RegulatedEntity extends Model<RegulatedEntityAttributes> implements RegulatedEntityAttributes {
  id!: string;
  clientCode!: string;
  entityType?: string;
  externalId?: string;
  name!: string;
  address?: string;
  zip?: string;
  country?: string;
  state!: string;
  county?: string;
  municipality?: string;
  latitude?: number;
  longitude?: number;
  clientMetaData: any;
  owners!: string;
  attributeMap: any;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  static associate(models: any) {
    // define association here
    RegulatedEntity.hasMany(models.RegulatedEntityInspectionType, {
      as: 'reInspectionType',
      foreignKey: 'regulatedEntityId'
    });
    RegulatedEntity.hasMany(models.RegulatedEntityItem, {
      as: 'reItem',
      foreignKey: 'regulatedEntityId'
    });
    RegulatedEntity.hasMany(models.Contacts, {
      as: 'contacts',
      foreignKey: 'regulatedEntityId'
    });
    RegulatedEntity.hasMany(models.Attachments, {
      as: 'attachments',
      foreignKey: 'regulatedEntityId'
    });
  }
}
export function initRegulatedEntity(sequelize: Sequelize) {
  RegulatedEntity.init({
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
    entityType: {
      type: DataTypes.STRING
    },
    externalId: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT
    },
    zip: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
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
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    clientMetaData: {
      type: DataTypes.JSONB
    },
    owners: {
      type: DataTypes.STRING
    },
    attributeMap: {
      type: DataTypes.JSONB
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
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
  }, {
    sequelize,
    modelName: 'RegulatedEntity',
    timestamps: true,
    schema: 'regulatedentityservice',
    tableName: 'regulatedEntity',
  });
}