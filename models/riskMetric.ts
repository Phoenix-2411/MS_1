import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface RiskMetricAttributes {
  id?: string;
  regulatedEntityInspectionTypeId?: string;
  category?: string;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}


// Define the class
export class RiskMetric extends Model<
  RiskMetricAttributes
> implements RiskMetricAttributes {
  id!: string;
  regulatedEntityInspectionTypeId?: string;
  category?: string;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  regStartDate?: string;

  static associate(models: any) {
    // Define associations here

  }
}

// Define the init method separately
export function initRiskMetric(sequelize: Sequelize) {
  RiskMetric.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      regulatedEntityInspectionTypeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'regulatedEntityInspectionType',
          key: 'id'
        }
      },
      category: {
        type: DataTypes.STRING
      },
      value: {
        type: DataTypes.FLOAT
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
      modelName: 'RiskMetric',
      tableName: 'riskMetric',
      schema: 'regulatedentityservice',
      timestamps: true
    }
  );
}
