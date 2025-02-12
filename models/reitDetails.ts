import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface reitDetailsAttributes {
  regulatedEntityInspectionTypeId: string;
  lastInspectionId?: string;
  lastInspectionDate?: Date;
  assignedToId?: string;
  assignedToName?: string;
  assignedToStartDate?: Date;
  assignedToTeamId?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


// Define the class
export class ReitDetails extends Model<
  reitDetailsAttributes
> implements reitDetailsAttributes {
  regulatedEntityInspectionTypeId!: string;
  lastInspectionId?: string;
  lastInspectionDate?: Date;
  assignedToId?: string;
  assignedToName?: string;
  assignedToStartDate?: Date;
  assignedToTeamId?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;

  static associate(models: any) {
    // Define associations here
  }
}

// Define the init method separately
export function initReitDetails(sequelize: Sequelize) {
  ReitDetails.init(
    {
      regulatedEntityInspectionTypeId: {
        type: DataTypes.UUID,
        references: { model: 'regulatedEntityInspectionType', key: 'id' },
        allowNull: false,
        primaryKey: true
      },
      lastInspectionId: {
        type: DataTypes.UUID
      },
      lastInspectionDate: DataTypes.DATE,
      assignedToId: {
        type: DataTypes.STRING
      },
      assignedToName: {
        type: DataTypes.STRING
      },
      assignedToStartDate: DataTypes.DATE,
      assignedToTeamId: {
        type: DataTypes.UUID
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
      modelName: 'ReitDetails',
      tableName: 'reitDetails',
      schema: 'regulatedentityservice',
      timestamps: true
    }
  );
}
