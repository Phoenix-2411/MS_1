import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

// Define the interface inside the file
export interface CovidDataAttributes {
  id: bigint;
  iso2?: string;
  iso3?: string;
  code3?: number;
  FIPS?: number;
  county?: string;
  state?: string;
  country?: string;
  lat?: number;
  long?: number;
  combinedKey?: string;
  date: string;
  count: number;
  createdAt: string;
}


// Define the class
export class CovidData extends Model<
  CovidDataAttributes
> implements CovidDataAttributes {
  id!: bigint;
  iso2?: string;
  iso3?: string;
  code3?: number;
  FIPS?: number;
  county?: string;
  state?: string;
  country?: string;
  lat?: number;
  long?: number;
  combinedKey?: string;
  date!: string;
  count!: number;
  createdAt!: string;

  static associate(models: any) {
    // Define associations here
  }
}

// Define the init method separately
export function initCovidData(sequelize: Sequelize) {
  CovidData.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
      },
      iso2: {
        type: DataTypes.STRING,
      },
      iso3: {
        type: DataTypes.STRING,
      },
      code3: {
        type: DataTypes.INTEGER,
      },
      FIPS: {
        type: DataTypes.INTEGER,
      },
      county: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.FLOAT,
      },
      long: {
        type: DataTypes.FLOAT,
      },
      combinedKey: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
      sequelize,
      modelName: 'CovidData',
      tableName: 'covidData',
      schema: 'regulatedentityservice',
      timestamps: false
    }
  );
}
