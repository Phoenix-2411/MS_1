import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

export interface IContactInfo {
  id?: string;
  lastName?: string;
  firstName?: string;
  workEmail?: string;
  workPhone?: string;
  contactType?: string;
  isAssociatedToReIt?: boolean;
  title?: string;
  regulatedEntityId?: string;
  regulatedEntityInspectionTypeId?: string;
}
// Define the interface inside the file
export interface ContactsAttributes {
  id: string;
  regulatedEntityInspectionTypeId: string;
  contactType?: string;
  firstname: string;
  middlename?: string;
  lastname?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  default: boolean;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  workPhone?: string;
  workEmail?: string;
  clientMetaData?: any;
  title?: string;
  regulatedEntityId?: string;
}


// Define the class
export class Contacts extends Model<
  ContactsAttributes
> implements ContactsAttributes {
  id!: string;
  regulatedEntityInspectionTypeId!: string;
  contactType?: string;
  firstname!: string;
  middlename?: string;
  lastname?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  default!: boolean;
  active?: Boolean;
  deleted?: Boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  workPhone?: string;
  workEmail?: string;
  clientMetaData?: any;
  title?: string;
  regulatedEntityId?: string;

  static associate(models: any) {
    // Define associations here
    Contacts.belongsTo(models.RegulatedEntityInspectionType);
    Contacts.belongsTo(models.RegulatedEntity);
  }
}

// Define the init method separately
export function initContacts(sequelize: Sequelize) {
  Contacts.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      regulatedEntityInspectionTypeId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'regulatedEntityInspectionType',
          key: 'id'
        }
      },
      contactType: {
        type: DataTypes.STRING
      },
      firstname: {
        type: DataTypes.STRING
      },
      middlename: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.TEXT
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zip: {
        type: DataTypes.STRING
      },
      default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      workPhone: {
        type: DataTypes.STRING
      },
      workEmail: {
        type: DataTypes.STRING
      },
      clientMetaData: {
        type: DataTypes.JSONB
      },
      title: {
        type: DataTypes.STRING
      },
      regulatedEntityId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'regulatedEntity',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Contacts',
      tableName: 'contacts',
      schema: 'regulatedentityservice',
      timestamps: true
    }
  );
}
