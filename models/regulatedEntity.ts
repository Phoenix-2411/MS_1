import { DataTypes, Model, UUIDV4 } from 'sequelize';

export interface regulatedEntityAttributes {
  id?: string;
  clientCode?: string;
  entityType?: string;
  externalId?: string;
  name?: string;
  address?: string;
  zip?: string;
  country?: string;
  state?: string;
  county?: string;
  municipality?: string;
  latitude?: number;
  longitude?: number;
  clientMetaData: any;
  owners?: string;
  attributeMap?: any;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class regulatedEntity extends Model<regulatedEntityAttributes> implements regulatedEntityAttributes {
    id?: string;
    clientCode?: string;
    entityType?: string;
    externalId?: string;
    name?: string;
    address?: string;
    zip?: string;
    country?: string;
    state?: string;
    county?: string;
    municipality?: string;
    latitude?: number;
    longitude?: number;
    clientMetaData: any;
    owners?: string;
    attributeMap?: any;
    active?: Boolean;
    deleted?: Boolean;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    static associate(models: any) {
      // define association here
    }
  }
  regulatedEntity.init({
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
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'regulatedEntity',
    freezeTableName: true,
    timestamps: true,
    schema: 'regulatedentityservice',
    tableName: 'regulatedEntity',
  });
  return regulatedEntity;
};